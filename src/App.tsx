import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from '@screens/Home';
import Settings from '@screens/Settings';
import { registerRootComponent } from 'expo';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { NativeBaseProvider, useColorModeValue } from 'native-base';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import CustomizeMenu from './components/CustomMenu';
import theme from './theme';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    const backgroundColor = useColorModeValue('#FFFFFF', '#000E08');

    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerType: 'front',
                headerTintColor: '#fff',
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerContent={(props) => <CustomizeMenu {...props} />}
        >
            <Drawer.Screen
                name='Home'
                options={{
                    drawerLabel: 'Wisert Chats',
                    title: 'Wisert',
                    headerStyle: {
                        backgroundColor: backgroundColor,
                    },
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
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

registerRootComponent(App);

export default App;
