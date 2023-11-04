import AnimatedScreen from '@/components/AnimatedScreen';
import Container from '@/components/Container';
import InputBar from '@/components/InputBar';
import MessageBubble from '@/components/MessageBubble';
// eslint-disable-next-line import/no-unresolved
import { OPENAI_API_KEY, OPENAI_API_URL } from '@env';
import axios from 'axios';
import { KeyboardAvoidingView, Text, VStack } from 'native-base';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Platform, SafeAreaView } from 'react-native';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

const defaultOptions = {
    prepareText:
        'こんにちは、私は「Wisert」です。ビジネスの疑問や課題について、知識を基にサポートいたします。何か質問がありますか？',
    maxRecentMessages: 5,
};

const Homepage = (): JSX.Element => {
    const flatListRef = useRef<FlatList>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [chatHistories, setChatHistories] = useState<Message[]>([
        {
            role: 'assistant',
            content: defaultOptions.prepareText,
        },
    ]);

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, [chatHistories]);

    const sendMessage = async () => {
        if (textInput.trim() === '') {
            return;
        }

        const userMessage: Message = {
            role: 'user',
            content: textInput.trim(),
        };

        const newMessages = [...chatHistories, userMessage];
        setTextInput('');
        setChatHistories(newMessages);

        try {
            // APIに渡すメッセージの履歴を作成。過去の全てのメッセージではなく、最新のメッセージのみを利用。
            // TODO chatHistories or newMessages
            const recentMessages =
                newMessages.length > defaultOptions.maxRecentMessages
                    ? newMessages.slice(-defaultOptions.maxRecentMessages)
                    : newMessages; // 直近のメッセージを使用

            setIsLoaded(true); // ローディング開始

            const requestSettings = {
                model: 'gpt-3.5-turbo',
                max_tokens: 100,
                messages: [
                    {
                        role: 'system',
                        content: `
                        あなたは「Wisert」という名のビジネス用Chatbotです。目的は、ユーザーが持つ疑問や課題に対し、知識ベースを活用して有用な情報を提供することです。
                        以下のガイドラインを厳密に守ってロールプレイを行ってください。
                        
                        冷静な対応:
                        ユーザーが感情的な表現やフラストレーションを示す場面でも、常に冷静で一貫したレスポンスを返します。感情に振り回されることなく、客観的な情報提供を目指します。
                        
                        丁寧な回答:
                        もしユーザーが理解できない内容や専門的な用語を使用していた場合、それを簡単に説明する努力をします。ユーザーの知識レベルや背景に関係なく、誰もが理解できるような回答を心掛けます。
                        
                        教育的対応:
                        単なる回答だけでなく、関連する情報や知識も合わせて提供します。ユーザーがより深く知識を得られるようサポートします。
                        
                        プライベートな話題の取り扱い:
                        ユーザーからのプライベートな情報や質問に対しては、適切に誤魔化し、または回答を避け、主題に関連する情報提供に焦点を当てます。
                        
                        常に学習:
                        ユーザーからのフィードバックや質問の内容をもとに、常に自身の知識ベースを更新・向上させます。
                        
                        名前の使用:
                        必要に応じて、「Wisertとしての意見」「Wisertの知識ベースによれば」といった形で、自分自身を第三者のように参照することができます。
                    `,
                    },
                    ...recentMessages,
                    { role: 'user', content: textInput.trim() },
                ],
            };

            // ここに送信しているデータを確認
            // console.log('OPENAI REQUEST DATA: ', requestSettings);

            const response = await axios.post(OPENAI_API_URL, requestSettings, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
            });

            // ここでレスポンスをコンソールに出力します。
            // console.log('Response from OpenAI:', response.data);

            const aiMessage: Message = {
                role: 'assistant',
                content: response?.data?.choices[0]?.message?.content.trim(),
            };

            setChatHistories([...newMessages, aiMessage]);
        } catch (error) {
            console.error('Error fetching data from OpenAI', error);
            // エラーメッセージをユーザーに表示する新しいメッセージをセットします。
            setChatHistories([
                ...newMessages,
                {
                    role: 'assistant',
                    content: '大変申し訳ございませんが、現在問題が発生しています。後でもう一度お試しください。',
                },
            ]);
        } finally {
            setIsLoaded(false); // ローディング終了
        }
    };

    const messageList = useMemo(
        () => (
            <FlatList
                data={chatHistories}
                renderItem={({ item }) => <MessageBubble item={item} />}
                keyExtractor={(_, index) => index.toString()}
                style={{ flex: 1 }}
                contentContainerStyle={{
                    paddingTop: 28, // 上部に余白を設定
                    paddingBottom: 32, // 下部に余白を設定
                }}
            />
        ),
        [chatHistories]
    );

    return (
        <AnimatedScreen>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={80}
                >
                    <Container>
                        {messageList}
                        {/* {isLoaded && <Text>Waiting...</Text>} */}
                        {isLoaded && (
                            <Text>
                                <ActivityIndicator size='small' color='#000' />
                            </Text>
                        )}
                        <VStack space={2} mb={4} justifyContent='center'>
                            <InputBar textInput={textInput} setTextInput={setTextInput} sendMessage={sendMessage} />
                        </VStack>
                    </Container>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </AnimatedScreen>
    );
};

export default React.memo(Homepage);
