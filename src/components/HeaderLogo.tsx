import { Image, ImageStyle } from 'react-native';

interface Props {
    styled?: ImageStyle;
}

const HeaderLogo = ({ styled }: Props): JSX.Element => {
    return (
        <Image
            source={require('@/assets/logo.png')}
            style={[{ width: 34, height: 34, alignSelf: 'center', position: 'relative', top: -2 }, styled]}
            resizeMode='contain'
        />
    );
};

export default HeaderLogo;
