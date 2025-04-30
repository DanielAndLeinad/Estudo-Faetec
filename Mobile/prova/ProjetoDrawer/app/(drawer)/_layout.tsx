import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{
      headerShown: true,
      drawerActiveTintColor: 'blue',
      drawerLabelStyle: { fontSize: 18 }
    }}>
      <Drawer.Screen
        name="tabs/home"
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="tabs/perfil"
        options={{
          drawerLabel: 'Perfil',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}
      />
    </Drawer>
  );
}