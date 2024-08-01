import { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';
import { usePermissionStore } from '../store/permissions/usePermissionStore';
import { useRouter } from 'expo-router';

const PermissionsChecker = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionStore();
  const router = useRouter();

  useEffect(() => {
    if (locationStatus === 'granted') {
      router.replace('/maps');
    } else if (locationStatus === 'undetermined') {
      router.navigate('/permission');
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, [checkLocationPermission]);

  useEffect(() => {
    const susbcription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });
    return () => {
      susbcription.remove();
    };
  }, [checkLocationPermission]);

  return <>{children}</>;
};
export default PermissionsChecker;
