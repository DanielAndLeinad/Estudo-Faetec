//Importanando Text e View do react-native
import { Text, View, } from "react-native";
import styles from "../constants/styles";
export default function contador() {
  return (
    <View style = {styles.centralizado}>
      <Text> Contador </Text>
    </View>
  );
}