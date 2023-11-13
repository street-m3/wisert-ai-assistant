import { Feather } from '@expo/vector-icons';
import { Box, HStack, IconButton, Input, useTheme } from 'native-base';
import React from 'react';
import { ActivityIndicator } from 'react-native';

interface InputProps {
    textInput: string;
    setTextInput: (text: string) => void;
    sendMessage: () => void;
    isLoading?: boolean;
}

const InputBar: React.FC<InputProps> = ({ textInput, setTextInput, sendMessage, isLoading }) => {
    const theme = useTheme();
    const sendMessageColor = textInput ? theme.colors.primary[400] : theme.colors.primary[200];

    return (
        <HStack alignItems='center' space={2}>
            <Box
                flex={1}
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
                backgroundColor='transparent'
                borderRadius={8}
                _dark={{
                    backgroundColor: 'gray.600', // ダークモードの対応
                }}
                _light={{
                    backgroundColor: 'primary.200',
                }}
            >
                <Input
                    flex={1}
                    fontSize={16}
                    color='black' // iOSの場合、デフォルトのテキスト色を変更
                    placeholder='Message...'
                    placeholderTextColor='#666666' // よりスタイリッシュなプレースホルダーの色
                    bg='transparent' // 入力背景を透明に
                    borderWidth={0} // 枠線を削除
                    value={textInput}
                    onChangeText={setTextInput}
                    borderRadius={8} // 入力自体にも丸みを追加
                    py={2} // 上下のパディングを追加して、より均等な配置に
                    px={3}
                    minH={12}
                    multiline={true} // 複数行のテキスト入力を可能にする
                    numberOfLines={1}
                />
            </Box>
            <IconButton
                w={12}
                h={12}
                icon={
                    isLoading ? (
                        <ActivityIndicator size='small' color='#000' />
                    ) : (
                        <Feather name='arrow-up' size={28} color={sendMessageColor} />
                    )
                } // アイコンボタンを使用
                onPress={sendMessage}
                borderRadius={100}
                bg={theme.colors.primary[600]}
                _pressed={{
                    opacity: 0.8, // プレス時の背景色を変更
                }}
                _hover={{
                    opacity: 0.8, // ホバー時の背景色を変更
                }}
            />
        </HStack>
    );
};

export default InputBar;
