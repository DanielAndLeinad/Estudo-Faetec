import { Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from "@/constants/style";

export default function spades() {
  return (
    <View style={styles.centralizado}>
    < MaterialCommunityIcons name = "cards-spade-outline" size={100} color="gray"/>
    <Text style ={{fontSize: 20, fontWeight:700}}>Espada</Text>
</View>
)
}
