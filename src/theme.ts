import { extendTheme } from 'native-base';

const config = {
    useSystemColorMode: true,
    initialColorMode: 'light',
};

const colors = {
    primary: {
        50: '#FFFFFF', //bg.light
        100: '#F2F7FB',
        200: '#F3F6F6',
        300: '#CBCBCB',
        400: '#949497',
        500: '#797C7B',
        600: '#27998B',
        700: '#015653',
        800: '#121414',
        900: '#000E08', // bg-dark
    },
    danger: {
        100: '#FBD4D1',
        200: '#F7A5A6',
        300: '#E77482',
        400: '#D04E6B',
        500: '#B21E4D',
        600: '#99154C',
        700: '#800F49',
        800: '#670942',
        900: '#55053E',
    },
    warning: {
        100: '#FEEED0',
        200: '#FED7A1',
        300: '#FDBB72',
        400: '#FB9F4F',
        500: '#f97316',
        600: '#D65510',
        700: '#B33C0B',
        800: '#902707',
        900: '#771804',
    },
    info: {
        100: '#CBE4FB',
        200: '#98C7F7',
        300: '#63A0E7',
        400: '#3B7AD0',
        500: '#0849B2',
        600: '#053899',
        700: '#042980',
        800: '#021D67',
        900: '#011455',
    },
    success: {
        100: '#CDF9CD',
        200: '#9DF3A4',
        300: '#67DB7B',
        400: '#3EB75F',
        500: '#10873D',
        600: '#0B743D',
        700: '#08613B',
        800: '#054E36',
        900: '#034032',
    },
};

const components = {};

export default extendTheme({ config, colors });
