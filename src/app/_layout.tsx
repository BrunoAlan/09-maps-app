import { Stack } from 'expo-router';
import PermissionsChecker from '../presentation/providers/PermissionsChecker';

export default function RootLayout() {
  return (
    <PermissionsChecker>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='index' />
        <Stack.Screen name='maps' />
        <Stack.Screen name='loading' />
      </Stack>
    </PermissionsChecker>
  );
}
