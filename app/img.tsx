import { Image } from 'react-native';
import { Asset } from 'expo-asset';

const MyComponent = () => {
  const image = Asset.fromModule(require('../../assets/adaptive-icon.png')).uri;

  return (
    <Image source={{ uri: image }} />
  );
};
export default MyComponent