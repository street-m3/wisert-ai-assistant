import AnimatedScreen from '@/components/AnimatedScreen';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Box, HStack, IconButton, Text, VStack, useToast } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

const Prompts = (): JSX.Element => {
    const toast = useToast();
    const [promptText, setPromptText] = useState('Example prompt text that can be copied');

    const copyToClipBoard = () => {
        Clipboard.setStringAsync(promptText as string);
        showToast('Copied to clipboard');
    };

    const showToast = (message: string) => {
        toast.show({
            title: message,
            duration: 2000, // 2秒間表示
            placement: 'bottom', // 下部に表示
        });
    };

    return (
        <AnimatedScreen>
            <SafeAreaView style={{ flex: 1 }}>
                <Box flex={1} justifyContent='center' alignItems='center' p={5}>
                    <VStack space={4} alignItems='center' w='100%'>
                        <Box borderWidth={1} borderColor='coolGray.300' borderRadius='md' p={3} w='100%'>
                            <HStack alignItems='center' justifyContent='center'>
                                <Text color='coolGray.600' flexShrink={1} size={24}>
                                    {promptText}
                                </Text>
                                <IconButton icon={<Feather name='copy' size={24} />} onPress={copyToClipBoard} />
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
            </SafeAreaView>
        </AnimatedScreen>
    );
};

export default Prompts;
