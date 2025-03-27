import styles from "@/constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";

export default function heart() {
    return (
      <View style={styles.centralizado}>
      < MaterialCommunityIcons name = "cards-heart-outline" size={100} color="red"/>
      <Text style ={{fontSize: 20, fontWeight:700}}>Espada</Text>
  </View>
  )
  }
  