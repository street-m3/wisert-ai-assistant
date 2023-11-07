import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import colorModeManager from './libs/colorModeManager';
import theme from './theme';
import AppContainer from './components/AppContainer';

const App = (): JSX.Element => {
    return (
        <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
            <AppContainer />
        </NativeBaseProvider>
    );
};

registerRootComponent(App);

export default App;
