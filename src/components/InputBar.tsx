import { Ionicons } from '@expo/vector-icons';
import { Box, HStack, IconButton, Input, useTheme } from 'native-base';
import React from 'react';

interface InputProps {
    textInput: string;
    setTextInput: (text: string) => void;
    sendMessage: () => void;
}

const InputBar: React.FC<InputProps> = ({ textInput, setTextInput, sendMessage }) => {
    const theme = useTheme();
    const sendMessageColor = textInput ? 'white' : theme.colors.primary[400];

    return (
        <HStack alignItems='center' space={2}>
            <Box
                flex={1}
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
                backgroundColor='#FFFFFF' // あるいはプロジェクトのテーマカラー
                borderRadius={8} // 丸みを帯びたデザイン
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
                    <Ionicons
                        name='send'
                        size={24}
                        color={sendMessageColor}
                        style={{ transform: [{ rotate: '-40deg' }, { translateY: 0 }, { translateX: 3 }] }}
                    />
                } // アイコンボタンを使用
                onPress={sendMessage}
                borderRadius={100}
                bg='primary.600'
                _pressed={{
                    backgroundColor: 'transparent', // プレス時の背景色を変更
                }}
                _hover={{
                    backgroundColor: 'transparent', // ホバー時の背景色を変更
                }}
            />
        </HStack>
    );
};

export default InputBar;
