import { Ionicons } from '@expo/vector-icons';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  onPress: () => void;
  iconName: string;
  style: StyleProp<ViewStyle>;
}
const FAB = ({ onPress, iconName, style }: Props) => {
  return (
    <View style={[styles.btn, style]}>
      <Pressable onPress={onPress}>
        <Ionicons name={iconName} size={30} color='white' />
      </Pressable>
    </View>
  );
};
export default FAB;
const styles = StyleSheet.create({
  btn: {
    zIndex: 1,
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 4.5,
      height: 0.2,
    },
    elevation: 5,
  },
});
