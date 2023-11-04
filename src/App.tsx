import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from '@screens/Home';
import Settings from '@screens/Settings';
import { registerRootComponent } from 'expo';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { ColorMode, NativeBaseProvider, StorageManager, useColorModeValue } from 'native-base';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import CustomizeMenu from './components/CustomMenu';
import HeaderLogo from './components/HeaderLogo';
import theme from './theme';

const Drawer = createDrawerNavigator();

const colorModeManager: StorageManager = {
    get: async () => {
        try {
            let val = await AsyncStorage.getItem('@color-mode');
            return val === 'dark' ? 'dark' : 'light';
        } catch (e) {
            return 'light';
        }
    },
    set: async (value: ColorMode) => {
        try {
            typeof value === 'string'
                ? await AsyncStorage.setItem('@color-mode', value)
                : console.warn('Invalid value for @color-mode', value);
        } catch (e) {
            console.error(e);
        }
    },
};

const MainNavigator = () => {
    const backgroundColor = useColorModeValue('#FFFFFF', '#161718');
    const colorTitle = useColorModeValue('#161718', '#FFFFFF');

    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerType: 'front',
                headerTintColor: colorTitle,
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerContent={(props) => <CustomizeMenu {...props} />}
        >
            <Drawer.Screen
                name='Home'
                options={{
                    drawerLabel: 'Wisert Chats',
                    title: 'Wisert',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    headerTitle: () => <HeaderLogo />,
                    headerStyle: {
                        backgroundColor: backgroundColor,
                    },

                    headerTitleAlign: 'center',
                }}
                component={Homepage}
            />
            <Drawer.Screen
                name='Settings'
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                    headerStyle: {
                        backgroundColor: backgroundColor,
                    },
                }}
                component={Settings}
            />
        </Drawer.Navigator>
    );
};

const App = (): JSX.Element => {
    useEffect(() => {
        const prepareResource = async () => {
            try {
                await preventAutoHideAsync();
                await new Promise((resolve) => setTimeout(resolve, 3000));
            } catch (e) {
                console.error(e);
            } finally {
                await hideAsync();
            }
        };
        prepareResource();
    }, []);

    return (
        <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

registerRootComponent(App);

export default App;
