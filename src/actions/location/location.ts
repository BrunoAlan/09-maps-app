import * as Location from 'expo-location';
import type { Location as LocationType } from '@/src/infrastructure/interfaces/location';
export const getCurrentLocation = async (): Promise<LocationType> => {
  const { coords } = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest,
  });
  return { latitude: coords.latitude, longitude: coords.longitude };
};

export const watchCurrentLocation = async (
  locationCallback: (location: LocationType) => void
) => {
  const locationSuscription = await Location.watchPositionAsync(
    { accuracy: Location.Accuracy.Highest },
    (newLocation) =>
      locationCallback({
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude,
      })
  );
  return locationSuscription;
};

export const clearWatchLocation = (
  locationSuscription: Location.LocationSubscription
) => {
  locationSuscription.remove();
};
