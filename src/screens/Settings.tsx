import AnimatedScreen from '@/components/AnimatedScreen';
import { Box, Button, useToast } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';

const Settings = (): JSX.Element => {
    const toast = useToast();

    const showToast = () => {
        toast.show({
            title: 'Limit reached',
            description: 'You can only ask 3 questions per day.',
            duration: 4000, // ここでは4秒間表示
            placement: 'top', // top または bottom
        });
    };

    return (
        <AnimatedScreen>
            <SafeAreaView style={{ flex: 1 }}>
                <Box flex={1} justifyContent='center' alignItems='center'>
                    <Button onPress={showToast} />
                </Box>
            </SafeAreaView>
        </AnimatedScreen>
    );
};

export default Settings;
