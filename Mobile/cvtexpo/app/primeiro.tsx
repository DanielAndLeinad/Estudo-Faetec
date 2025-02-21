//Importanando Text e View do react-native
import { Text, View, } from "react-native";
import styles from "../constants/styles";
export default function primeiro() {
  return (
    <View style = {styles.centralizado}>
      <Text> Primeiro Componente </Text>
    </View>
  );
}
