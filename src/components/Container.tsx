import { Box } from 'native-base';
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <Box flex={1} px={4}>
            {children}
        </Box>
    );
};

export default Container;
