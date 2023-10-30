import { HStack, Switch, Text, useColorMode } from 'native-base';
import React from 'react';

const ThemeToggle = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack space={2} alignItems='center'>
            <Text>Dark</Text>
            <Switch isChecked={colorMode === 'light'} onToggle={toggleColorMode} />
            <Text>Light</Text>
        </HStack>
    );
};

export default ThemeToggle;
