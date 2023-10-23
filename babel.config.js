module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    // ルートフォルダを設定。これにより、絶対パスでのインポートが可能になります。
                    root: ['./src'],
                    extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.ts', '.tsx'],
                    // エイリアスの設定。これにより、指定したキーワードで特定のパスを参照できるようになります。
                    alias: {
                        // 他のエイリアスもここに追加
                        "@": "./src",
                        '@components': './src/components',
                        '@assets': './src/assets',
                        '@styles': './src/styles',
                        '@libs': './src/libs',
                        '@screens': './src/screens',
                        // ... その他必要なエイリアス
                    },
                },
            ],
            'react-native-reanimated/plugin',
        ],
    };
};
