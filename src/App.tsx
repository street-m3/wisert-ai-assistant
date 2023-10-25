import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from '@screens/Home';
import Settings from '@screens/Settings';
import { registerRootComponent } from 'expo';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import CustomizeDrawer from './components/CustomMenu';

const Drawer = createDrawerNavigator();

const App = (): JSX.Element => {
    useEffect(() => {
        const prepareResource = async () => {
            try {
                await preventAutoHideAsync();
                await new Promise(resolve => setTimeout(resolve, 3000));
            } catch (e) {
                console.error(e);
            } finally {
                await hideAsync()
            }
        }
        prepareResource()
    }, [])

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{ drawerType: 'front' }}
                drawerContent={(props) => 
                    <CustomizeDrawer {...props} />
                }
            >
                <Drawer.Screen
                    name="Home"
                    options={{ drawerLabel: 'Homepage', title: 'Homepage' }}
                    component={Homepage}
                />
                <Drawer.Screen
                    name="Settings"
                    options={{ drawerLabel: 'Settings', title: 'Settings' }}
                    component={Settings}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

registerRootComponent(App);

export default App;
