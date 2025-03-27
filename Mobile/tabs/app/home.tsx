import styles from "@/constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";



export default function home() {
  return (
    <View style={styles.centralizado}>
    < MaterialCommunityIcons name = "cards-playing-club-multiple-outline" size={100} color="purple"/>
    <Text style ={{fontSize: 20, fontWeight:700}}>Espada</Text>
</View>
)
}