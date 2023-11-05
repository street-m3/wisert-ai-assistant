import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorMode, StorageManager } from 'native-base';

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

export default colorModeManager;
