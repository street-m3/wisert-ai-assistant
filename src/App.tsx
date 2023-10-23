import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from '@screens/Home';
import Settings from '@screens/Settings';
import { registerRootComponent } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomizeDrawer from './components/CustomMenu';

const Drawer = createDrawerNavigator();

const App = () => {
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
