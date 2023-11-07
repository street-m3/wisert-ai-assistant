import { NavigationContainer } from '@react-navigation/native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useColorMode, useTheme } from 'native-base';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from './MainNavigator';

const AppContainer = (): JSX.Element => {
    const { colorMode } = useColorMode();
    const theme = useTheme();

    const defaultDark = theme.colors.primary[900];
    const defaultLightThemeBgColor = 'white';

    useEffect(() => {
        const prepareResource = async () => {
            try {
                await preventAutoHideAsync();
                await new Promise((resolve) => setTimeout(resolve, 1800));
            } catch (e) {
                console.error(e);
            } finally {
                await hideAsync();
            }
        };
        prepareResource();
    }, []);

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
