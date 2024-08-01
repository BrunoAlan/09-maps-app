import {
  clearWatchLocation,
  getCurrentLocation,
  watchCurrentLocation,
} from '@/src/actions/location/location';
import type { Location } from '@/src/infrastructure/interfaces/location';
import { LocationSubscription } from 'expo-location/build/Location.types';
import { create } from 'zustand';
interface LocationState {
  lastKnowLocation: Location | null;
  userLocationsList: Location[];
  locationSuscription?: LocationSubscription | null;
  getLocation: () => Promise<Location>;
  watchLocation: () => Promise<void>;
  clearWatchLocation: () => void;
}

export const useLocationStore = create<LocationState>()((set, get) => ({
  lastKnowLocation: null,
  userLocationsList: [],
  locationSuscription: null,
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({ lastKnowLocation: location });
    return location;
  },
  watchLocation: async () => {
    const locationSuscription = await watchCurrentLocation((location) => {
      set({ lastKnowLocation: location });
      set((state) => ({
        userLocationsList: [...state.userLocationsList, location],
      }));
    });
    set({ locationSuscription });
  },
  clearWatchLocation: () => {
    const { locationSuscription } = get();
    clearWatchLocation(locationSuscription!);
  },
}));
