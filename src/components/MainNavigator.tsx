import { createDrawerNavigator } from '@react-navigation/drawer';
import Homepage from '@screens/Home';
import Settings from '@screens/Settings';
import { useColorModeValue } from 'native-base';
import React from 'react';
import CustomizeMenu from './CustomMenu';
import HeaderLogo from './HeaderLogo';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    const backgroundColor = useColorModeValue('#FFFFFF', '#161718');
    const colorTitle = useColorModeValue('#161718', '#FFFFFF');

    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerType: 'front',
                headerTintColor: colorTitle,
                drawerLabelStyle: {
                    color: colorTitle,
                },
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

export default MainNavigator;
