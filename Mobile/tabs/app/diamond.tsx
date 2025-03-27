import styles from "@/constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";

export default function diamond() {
    return (
      <View style={styles.centralizado}>
      < MaterialCommunityIcons name = "cards-diamond-outline" size={100} color="blue"/>
      <Text style ={{fontSize: 20, fontWeight:700}}>Espada</Text>
  </View>
  )
  }