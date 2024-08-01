import { getCurrentLocation } from '@/src/actions/location/location';
import type { Location } from '@/src/infrastructure/interfaces/location';
import { create } from 'zustand';
interface LocationState {
  lastKnowLocation: Location | null;
  getLocation: () => Promise<Location>;
}

export const useLocationStore = create<LocationState>()((set, get) => ({
  lastKnowLocation: null,
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({ lastKnowLocation: location });
    return location;
  },
}));
