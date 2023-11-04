import { HStack, Switch, Text, useColorMode } from 'native-base';
import React, { useCallback } from 'react';

const ThemeToggle = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();

    const handleToggle = useCallback(() => {
        toggleColorMode();
    }, [toggleColorMode]);

    return (
        <HStack space={2} alignItems='center'>
            <Text>Dark</Text>
            <Switch isChecked={colorMode === 'light'} size='md' onToggle={handleToggle} />
            <Text>Light</Text>
        </HStack>
    );
};

export default ThemeToggle;
