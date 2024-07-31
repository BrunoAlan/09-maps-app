import { globalStyles } from '@/src/config/theme/styles';
import { View, Text, Pressable } from 'react-native';
import { usePermissionStore } from '../../store/permissions/usePermissionStore';
const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enable localization</Text>
      <Pressable
        style={globalStyles.btnPrimary}
        onPress={() => {
          requestLocationPermission();
        }}
      >
        <Text style={{ color: 'white' }}>Enable localization</Text>
      </Pressable>

      <Text>Location status:{locationStatus} </Text>
    </View>
  );
};
export default PermissionsScreen;
