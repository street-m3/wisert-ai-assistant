declare module 'expo-clipboard' {
    export function getStringAsync(): Promise<string>;
    export function setString(text: string): void;
    export function setStringAsync(text: string): Promise<void>; // この行を追加
}
