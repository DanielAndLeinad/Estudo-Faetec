import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de importar o Ionicons
import styles from '../constants/styles';

export default function Index() {
  return (
    <View style={[styles.centralizado, { gap: 10 }]}>
      <Ionicons name="logo-react" 
      size={100} />
      <View style={{ alignItems: 'center' }}>
        <Text style=
        {{ fontSize: 20, fontWeight: '700' }}
        >React Native</Text>
      </View>
    </View>
  );
}