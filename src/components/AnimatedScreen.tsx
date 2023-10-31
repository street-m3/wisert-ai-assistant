import { useToken, useColorModeValue } from 'native-base';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Props {
    children: React.ReactNode;
    lightColor?: string;
    darkColor?: string;
}

const AnimatedScreen: React.FC<Props> = ({ children, lightColor = 'primary.50', darkColor = 'primary.900' }) => {
    // useTokenを使用して、テーマの色を解決します。
    const [lightBackgroundColor, darkBackgroundColor] = useToken(
        'colors', // トークンの種類（ここでは 'colors'）
        [lightColor, darkColor] // 取得したいトークンのキー（ここでは色）
    );

    // 現在のカラーモードに基づいて色を設定します（システムのライト/ダークモード設定に依存）。
    const colorToAnimate = useColorModeValue(lightBackgroundColor, darkBackgroundColor);

    // Animatedの値を設定。ここでは背景色です。
    const AnimatedColor = useSharedValue(colorToAnimate);

    useEffect(() => {
        // 背景色が変更されたときにアニメーションを実行
        AnimatedColor.value = withTiming(colorToAnimate, { duration: 200 });
    }, [AnimatedColor, colorToAnimate]);

    const AnimatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: AnimatedColor.value,
        };
    });

    return <Animated.View style={[{ flex: 1 }, AnimatedStyle]}>{children}</Animated.View>;
};

export default AnimatedScreen;
