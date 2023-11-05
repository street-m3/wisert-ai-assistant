import { registerRootComponent } from 'expo';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import colorModeManager from './libs/colorModeManager';
import theme from './theme';
import AppContainer from './components/AppContainer';

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
            <AppContainer />
        </NativeBaseProvider>
    );
};

registerRootComponent(App);

export default App;
