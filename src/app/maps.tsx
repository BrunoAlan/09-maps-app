import { View } from 'react-native';
import Map from '../presentation/components/maps/Map';
import LoadingScreen from '../presentation/screens/loading/LoadingScreen';
import { useLocationStore } from '../presentation/store/location/useLocationStore';
import { useEffect } from 'react';

export default function Index() {
  const { lastKnowLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if (lastKnowLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnowLocation === null) {
    return <LoadingScreen />;
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Map showUserLocation={true} initialLocation={lastKnowLocation} />
    </View>
  );
}
