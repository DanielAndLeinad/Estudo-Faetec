import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'Bem-vindo',
            drawerIcon: () =>
              <Ionicons name ='checkmark-circle-outline'
            size={18} color={'gray'}
            />
          }}
        />
        <Drawer.Screen
          name="sobre" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'home',
            title: 'Bem-vindo',
            drawerIcon: () =>
            <Ionicons name='alert-circle-outline'
            />
          }}
        />
        <Drawer.Screen
          name="contador" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contador',
            title: 'Contador',
            drawerIcon: () =>
              <Ionicons name='stopwatch-outline'
              size={18} color={'red'}
              />
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
