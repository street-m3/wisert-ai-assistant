import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

const CustomizeMenu = (props: any): JSX.Element => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Custom Header</Text>
            </View>
            <DrawerItemList {...props} />
            {/* Add additional custom items */}
            <DrawerItem label="Help" onPress={() => console.log('Help pressed')} />
            {/* You can also add other custom components and buttons here */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Custom Drawer Footer</Text>
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomizeMenu;