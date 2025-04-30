import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type Props = {
  texto: string;
  rota?: string;
  onPress?: () => void | Promise<void>;
};

export default function BotaoPadrao({ texto, rota, onPress }: Props) {
  const router = useRouter();

  const handlePress = () => {
    if (rota) {
      router.push(rota);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={styles.botao} onPress={handlePress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
