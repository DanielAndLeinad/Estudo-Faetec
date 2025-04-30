import { View, Text, StyleSheet } from 'react-native';
import BotaoPadrao from '../../../components/BotaoPadrao';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Perfil</Text>
      <BotaoPadrao texto="Voltar ao Início" rota="/home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});