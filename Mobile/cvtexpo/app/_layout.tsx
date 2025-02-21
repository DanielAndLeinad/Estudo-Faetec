import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'Bem-Vindo!',
          }}
          
        />
        <Drawer.Screen
          name="Primeiro" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Componente 1',
            title: '1° Componente',
          }}
        />
        <Drawer.Screen
          name="contador" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contador',
            title: 'Contador',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
