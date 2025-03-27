import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import  Entypo  from '@expo/vector-icons/Entypo';
import '@/global.css'
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'Quatro Elementos',
            drawerIcon: () =>
              <Ionicons name ='home'
            size={18} color={'black'} />
          }}
        />
           <Drawer.Screen
          name="fogo" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'fogo',
            title: 'Elemento Fogo',
            drawerIcon: () =>
              <Ionicons name ='flame'
            size={18} color={'red'} />
          }}
          
        />
           <Drawer.Screen
          name="agua" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'agua',
            title: 'Elemento Agua',
            drawerIcon: () =>
              <Ionicons name ='water'
            size={18} color={'blue'} />
          }}
        />
           <Drawer.Screen
          name="terra" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'terra',
            title: 'Elemento Terra',
            drawerIcon: () =>
              <Entypo name ='leaf'
            size={18} color={'green'} />
          }}
        />
           <Drawer.Screen
          name="ar" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'ar',
            title: 'Elemento Ar',
            drawerIcon: () =>
              <Entypo name ='air'
            size={18} color={'gray'} />
          }}
        />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}
