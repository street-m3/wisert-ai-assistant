import { Box, Text, useTheme } from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface RenderMessageProps {
    item: Message;
}

const MessageBubble: React.FC<RenderMessageProps> = ({ item }) => {
    const theme = useTheme();
    // 画面のサイズを取得
    const { width } = useWindowDimensions();

    // 画面の幅から16pxを指し位ひいてAIの返答をと判別できるレイアウト調整を計算し出力する
    const adjustedWidthPx = width - 1.0 - 32;
    const adjustedWidthPercent = (adjustedWidthPx / width) * 100;

    const userMessageBgColor = theme.colors.primary[500];
    const userMessageTextColor = '#FFFFFF';
    const assistantBgColor = 'rgba(203, 203, 203, 0.2)';
    const systemBgColor = 'rgba(203, 203, 203, 0.2)';
    const backgroundColor =
        item.role === 'user' ? userMessageBgColor : item.role === 'assistant' ? assistantBgColor : systemBgColor;
    const textColor = item.role === 'user' ? userMessageTextColor : undefined;

    return (
        <Box
            alignSelf={item.role === 'user' ? 'flex-end' : 'flex-start'}
            p={3}
            rounded='md'
            mb={2}
            backgroundColor={backgroundColor}
            maxWidth={`${adjustedWidthPercent}%`}
        >
            <Text fontSize='md' color={textColor}>
                {item.content}
            </Text>
        </Box>
    );
};

export default MessageBubble;
