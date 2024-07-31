import { PermissionStatus } from '@/src/infrastructure/interfaces/permissions';
import * as Location from 'expo-location';
import * as Link from 'expo-linking';

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    const { status, canAskAgain } =
      await Location.requestForegroundPermissionsAsync();

    if (status === 'denied' && !canAskAgain) {
      Link.openSettings();
    }
    return status;
  };

export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  const { status } = await Location.getForegroundPermissionsAsync();
  return status;
};
