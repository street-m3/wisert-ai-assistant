import { Image } from 'react-native';

const HeaderLogo = (): JSX.Element => {
    return <Image source={require('@/assets/logo.png')} style={{ width: 36, height: 36 }} resizeMode='contain' />;
};

export default HeaderLogo;
