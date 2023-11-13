import promptData from '@/assets/prompts.json';
import AnimatedScreen from '@/components/AnimatedScreen';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Box, HStack, IconButton, Text, VStack, useColorMode, useTheme, useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

const Prompts = (): JSX.Element => {
    const toast = useToast();
    const [prompts, setPrompts] = useState<string[]>([]);
    const theme = useTheme();
    const { colorMode } = useColorMode();

    useEffect(() => {
        setPrompts(promptData);
    }, []);

    const copyToClipBoard = (prompt: string) => {
        Clipboard.setStringAsync(prompt);
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
                <Box flex={1} alignItems='center' pl={4} pr={4} pt={8}>
                    <Text fontSize='2xl' alignSelf='flex-start' mb={5} bold pl={1}>
                        ⭐️よく使うプロンプト
                    </Text>
                    <VStack space={4} alignItems='center' w='100%'>
                        {prompts.map((prompt, index) => (
                            <Box key={index} borderWidth={1} borderRadius='md' p={1} w='100%'>
                                <HStack height={12} alignItems='center' justifyContent='space-between' space={2} px={2}>
                                    <Text alignSelf='center' fontSize='md'>
                                        {prompt}
                                    </Text>
                                    <IconButton
                                        icon={
                                            <Feather
                                                name='copy'
                                                color={colorMode === 'dark' ? 'white' : theme.colors.primary[900]}
                                                size={18}
                                            />
                                        }
                                        onPress={() => copyToClipBoard(prompt)}
                                    />
                                </HStack>
                            </Box>
                        ))}
                    </VStack>
                </Box>
            </SafeAreaView>
        </AnimatedScreen>
    );
};

export default Prompts;
