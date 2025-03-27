import styles from "@/constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";

export default function club() {
  return (
    <View style={styles.centralizado}>
    < MaterialCommunityIcons name = "cards-club-outline" size={100} color="green"/>
    <Text style ={{fontSize: 20, fontWeight:700}}>Espada</Text>
</View>
)
}