import { NavigationContainer } from '@react-navigation/native';
import { useColorMode, useTheme } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from './MainNavigator';

const AppContainer = (): JSX.Element => {
    const { colorMode } = useColorMode();
    const theme = useTheme();

    const defaultDark = theme.colors.primary[900];
    const defaultLightThemeBgColor = 'white';

    return (
        <>
            <StatusBar
                backgroundColor={colorMode === 'dark' ? defaultDark : defaultLightThemeBgColor}
                barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
            />
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </>
    );
};

export default AppContainer;
