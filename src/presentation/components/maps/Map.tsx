import { Location } from '@/src/infrastructure/interfaces/location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import FAB from '../ui/FAB';
import { useRef } from 'react';
import { useLocationStore } from '../../store/location/useLocationStore';

interface Props {
  showUserLocation?: boolean;
  initialLocation: Location;
}

const Map = ({ showUserLocation = false, initialLocation }: Props) => {
  const mapRef = useRef<MapView>();
  const cameraLocation = useRef<Location>(initialLocation);
  const { getLocation } = useLocationStore();

  const moveCameraToLocation = (location: Location) => {
    if (!mapRef.current) return;
    mapRef.current.animateCamera({
      center: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
    });
  };

  const moveToCurrentLocation = async () => {
    const location = await getLocation();
    if (!location) return;
    moveCameraToLocation(location);
  };

  return (
    <>
      <MapView
        ref={(map) => (mapRef.current = map!)}
        showsUserLocation={showUserLocation}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsCompass
        showsScale
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title='This is a marker'
          description='This is a marker example'
        />
      </MapView>
      <FAB
        iconName='compass-outline'
        onPress={moveToCurrentLocation}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      ></FAB>
    </>
  );
};
export default Map;
