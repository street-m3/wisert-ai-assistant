import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Box, Center, VStack } from 'native-base';
import { Platform } from 'react-native';
import AnimatedScreen from './AnimatedScreen';
import ThemeToggle from './ThemeToggle';

const CustomizeMenu = (props: DrawerContentComponentProps): JSX.Element => {
    return (
        <AnimatedScreen>
            <DrawerContentScrollView {...props}>
                <VStack space={3} my={4}>
                    <DrawerItemList {...props} />
                </VStack>
            </DrawerContentScrollView>
            <Box>
                <Center py={Platform.OS === 'ios' ? 12 : 6}>
                    <ThemeToggle />
                </Center>
            </Box>
        </AnimatedScreen>
    );
};

export default CustomizeMenu;
