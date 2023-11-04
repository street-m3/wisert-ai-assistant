import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Box, Center, Text, VStack } from 'native-base';
import { Platform } from 'react-native';
import AnimatedScreen from './AnimatedScreen';
import ThemeToggle from './ThemeToggle';

const CustomizeMenu = (props: any): JSX.Element => {
    return (
        <AnimatedScreen>
            <DrawerContentScrollView {...props}>
                <VStack space={3} my={4}>
                    <Center>
                        <Text>Custom Header</Text>
                    </Center>
                    <DrawerItemList {...props} />
                    {/* Add additional custom items */}
                    <DrawerItem label='Help' onPress={() => console.log('Help pressed')} />
                    {/* You can also add other custom components and buttons here */}
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
