import Prompts from '@/screens/Prompts';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homepage from '@screens/Home';
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
                name='Prompts'
                options={{
                    drawerLabel: 'Prompts',
                    title: 'Prompts',
                    headerStyle: {
                        backgroundColor: backgroundColor,
                    },
                }}
                component={Prompts}
            />
        </Drawer.Navigator>
    );
};

export default MainNavigator;
