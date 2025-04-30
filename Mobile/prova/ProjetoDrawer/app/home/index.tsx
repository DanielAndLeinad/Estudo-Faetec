import AsyncStorage from '@react-native-async-storage/async-storage';

const salvarDado = async () => {
  await AsyncStorage.setItem('nome', 'João');
};

const lerDado = async () => {
  const nome = await AsyncStorage.getItem('nome');
  alert('Nome salvo: ' + nome);
};
