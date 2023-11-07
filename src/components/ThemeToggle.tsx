import { HStack, Switch, Text, useColorMode } from 'native-base';
import React, { useCallback } from 'react';

const ThemeToggle = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();

    const handleToggle = useCallback(() => {
        toggleColorMode();
    }, [toggleColorMode]);

    return (
        <HStack space={2} alignItems='center'>
            <Text>Light</Text>
            <Switch isChecked={colorMode === 'dark'} size='md' onToggle={handleToggle} />
            <Text>Dark</Text>
        </HStack>
    );
};

export default ThemeToggle;
