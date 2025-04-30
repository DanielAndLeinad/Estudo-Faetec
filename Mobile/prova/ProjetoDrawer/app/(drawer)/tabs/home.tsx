import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BotaoPadrao from '../../../components/BotaoPadrao';

export default function Home() {
  const [nome, setNome] = useState('');
  const [nomeSalvo, setNomeSalvo] = useState('');

  // Carrega o nome salvo ao iniciar a tela
  useEffect(() => {
    carregarNome();
  }, []);

  const salvarNome = async () => {
    try {
      await AsyncStorage.setItem('@nomeUsuario', nome);
      Alert.alert('Sucesso', 'Nome salvo com sucesso!');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar o nome.');
    }
  };

  const carregarNome = async () => {
    try {
      const valor = await AsyncStorage.getItem('@nomeUsuario');
      if (valor !== null) {
        setNomeSalvo(valor);
      }
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível carregar o nome.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo à Tela Home</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <BotaoPadrao texto="Salvar Nome" onPress={salvarNome} />
      <BotaoPadrao texto="Carregar Nome" onPress={carregarNome} />

      {nomeSalvo ? (
        <Text style={styles.nomeExibido}>Nome salvo: {nomeSalvo}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  nomeExibido: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});
