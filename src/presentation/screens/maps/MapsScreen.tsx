import { useEffect } from 'react';
import { View } from 'react-native';
import { useLocationStore } from '../../store/location/useLocationStore';
import LoadingScreen from '../loading/LoadingScreen';
import Map from '../../components/maps/Map';

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
