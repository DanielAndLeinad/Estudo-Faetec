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
            title: 'Bem-Vindo!',
            drawerIcon: () => <Ionicons name="albums" size={24} color="black" />,
          }}
          
        />
        <Drawer.Screen
          name="primeiro" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Componente 1',
            title: '1° Componente',
            drawerIcon: () => <Ionicons name="add" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="contador" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contador',
            title: 'Contador',
            drawerIcon: () => <Ionicons name="checkmark" size={24} color="black" />,
          }}
          
        />

<Drawer.Screen
          name="propriedades" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Props',
            title: 'Props',
            drawerIcon: () => <Ionicons name="keypad" size={24} color="black" />,
          }}
          
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
