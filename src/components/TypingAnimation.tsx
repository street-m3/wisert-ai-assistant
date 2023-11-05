import { View } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

interface DotProps {
    delay?: number;
}

const Dot = ({ delay = 0 }: DotProps): JSX.Element => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        const runAnimation = () => {
            animatedValue.setValue(0);
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
                easing: Easing.linear,
                delay: delay,
            }).start(() => runAnimation());
        };

        runAnimation();
    }, [animatedValue, delay]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -10, 0],
    });
    return (
        <Animated.View
            style={[
                styles.dot,
                {
                    transform: [{ translateY }],
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'space-between',
    },
    dot: {
        backgroundColor: '#000',
        width: 8,
        height: 8,
        borderRadius: 4,
    },
});

const TypingAnimation = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Dot delay={0} />
            <Dot delay={200} />
            <Dot delay={400} />
        </View>
    );
};

export default TypingAnimation;
