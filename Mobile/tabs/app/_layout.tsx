import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarStyle: {
            backgroundColor: 'red', // Cor de fundo específica para a aba "Home"
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBackground}>
              <MaterialCommunityIcons
                size={20}
                name="cards-playing"
                color={focused ? 'white' : 'blue'} // Ícone branco quando ativo, azul quando inativo
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="club"
        options={{
          title: 'Club',
          tabBarStyle: {
            backgroundColor: 'green', // Cor de fundo específica para a aba "Club"
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBackground}>
              <MaterialCommunityIcons
                size={20}
                name="cards-club"
                color={focused ? 'white' : 'black'} // Ícone branco quando ativo, preto quando inativo
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="diamond"
        options={{
          title: 'Diamond',
          tabBarStyle: {
            backgroundColor: 'pink', // Cor de fundo específica para a aba "Diamond"
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBackground}>
              <MaterialCommunityIcons
                size={20}
                name="cards-diamond"
                color={focused ? 'white' : 'red'} // Ícone branco quando ativo, vermelho quando inativo
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          title: 'Heart',
          tabBarStyle: {
            backgroundColor: 'lightcoral', // Cor de fundo específica para a aba "Heart"
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBackground}>
              <MaterialCommunityIcons
                size={20}
                name="cards-heart"
                color={focused ? 'white' : 'red'} // Ícone branco quando ativo, vermelho quando inativo
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="spades"
        options={{
          title: 'Spades',
          tabBarStyle: {
            backgroundColor: 'gray', // Cor de fundo específica para a aba "Spades"
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBackground}>
              <MaterialCommunityIcons
                size={20}
                name="cards-spade"
                color={focused ? 'white' : 'black'} // Ícone branco quando ativo, preto quando inativo
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fundo semi-transparente
    borderRadius: 30, // Deixa o fundo arredondado
    padding: 10, // Espaçamento interno
  },
});
0