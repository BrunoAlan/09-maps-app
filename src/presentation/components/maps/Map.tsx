import { Location } from '@/src/infrastructure/interfaces/location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import FAB from '../ui/FAB';

interface Props {
  showUserLocation?: boolean;
  initialLocation: Location;
}

const Map = ({ showUserLocation = false, initialLocation }: Props) => {
  return (
    <>
      <MapView
        showsUserLocation={showUserLocation}
        region={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
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
        onPress={() => {}}
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
