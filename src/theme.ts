import { extendTheme } from 'native-base';

const config = {
    useSystemColorMode: true,
    initialColorMode: 'light',
};

// red GraphiteDrawer: '#222628', // Red Graphite - DRW (ライトモードのドロワー背景色)
// solarizedCode: '#FDF6E3', // Solarized Light - SCD (ライトモードのcodeタグ背景色)
// highlightCode: '#0F111A', // Highlight Dark - SCD (ダークモードのcodeタグ背景色)

const colors = {
    primary: {
        50: '#FDF6E3', // Solarized Light - BG1 (ライトモードの背景色)
        100: '#EEE8D5', // Solarized Light - BG2 (ライトモードのセカンダリ背景色)
        200: '#F0F2F5', // Red Graphite - BG2 (ライトモードのセカンダリ背景色)
        300: '#586E75', // Solarized Light - TXT (ライトモードのテキスト色)
        400: '#343434', // Red Graphite - TXT (ライトモードのテキスト色)
        500: '#015653', // Primary Color (メインカラー)
        600: '#C1D2DE', // Highlight Dark - TXT (ダークモードのテキスト色)
        700: '#232324', // Highlight Dark - BG2 (ダークモードのセカンダリ背景色)
        800: '#212223', // Highlight Dark - DRW (ダークモードのドロワー背景色)
        900: '#161718', // Highlight Dark - BG1 (ダークモードの背景色)
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

export default extendTheme({ config, colors });
