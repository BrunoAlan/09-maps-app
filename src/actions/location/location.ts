import * as Location from 'expo-location';
import type { Location as LocationType } from '@/src/infrastructure/interfaces/location';
export const getCurrentLocation = async (): Promise<LocationType> => {
  const { coords } = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest,
  });
  return { latitude: coords.latitude, longitude: coords.longitude };
};
