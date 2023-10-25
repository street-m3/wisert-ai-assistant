import { OPENAI_API_KEY, OPENAI_API_URL } from '@env';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    chatContainer: {
        flex: 1,
        paddingBottom: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 8,
        marginRight: 8,
    },
    userMsg: {
        alignSelf: 'flex-end',
        padding: 8,
        backgroundColor: '#E1F5FE',
        borderRadius: 5,
        marginBottom: 8,
        marginRight: 10,
        maxWidth: '75%',
    },
    aiMsg: {
        alignSelf: 'flex-start',
        padding: 8,
        backgroundColor: '#B2DFDB',
        borderRadius: 5,
        marginBottom: 8,
        marginLeft: 10,
        maxWidth: '75%',
    },
    msgText: {
        fontSize: 16,
    },
});

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const defaultOptions = {
    prepareText: 'こんにちは、私は「Wisert」です。ビジネスの疑問や課題について、知識を基にサポートいたします。何か質問がありますか？',
    newTabText: '初期質問',
    addTabText: '新しい質問',
}

const Homepage = (): JSX.Element => {
    const [textInput, setTextInput] = useState('');
    const [messages, setChatHistories] = useState<Message[]>([
        {
            role: 'assistant',
            content: defaultOptions.prepareText
        }
    ]);

    const handleSend = async () => {
        if (textInput.trim() === '') {
            return;
        }

        const userMessage: Message = {
            role: 'user',
            content: textInput.trim(),
        };

        setChatHistories([...messages, userMessage]);
        setTextInput(''); // 入力フィールドのリセット

        try {
            const response = await axios.post(
                OPENAI_API_URL,
                {
                    model: 'gpt-3.5-turbo',
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
                        { role: 'user', content: textInput.trim() },
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                    },
                }
            );

            const message: Message = {
                role: 'assistant',
                content: response.data.choices[0].message.content.trim(),
            };

            setChatHistories([...messages, userMessage, message]);
        } catch (error) {
            console.error('Error fetching data from OpenAI', error);
        }
    };

    const renderMessage = ({ item }: any) => (
        <View style={item.role === 'user' ? styles.userMsg : styles.aiMsg}>
            <Text style={styles.msgText}>{item.content}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(_, index) => index.toString()}
                style={styles.chatContainer}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText={setTextInput}
                    placeholder="Type your message here..."
                />
                <Button title="Send" onPress={handleSend} />
            </View>
        </KeyboardAvoidingView>
    );
};

export default Homepage;
