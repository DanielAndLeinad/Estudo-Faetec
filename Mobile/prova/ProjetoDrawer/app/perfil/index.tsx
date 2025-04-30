// app/(tabs)/perfil.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Perfil</Text>
      <Text style={styles.descricao}>Aqui você pode ver os dados do usuário.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 18,
    color: '#555',
  },
});
