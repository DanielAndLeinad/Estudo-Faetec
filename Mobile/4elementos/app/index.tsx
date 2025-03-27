import { Text, View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Importando gradiente

export default function Index() {
  return (
    <LinearGradient
      colors={["#0000FF", "#00FFFF", "#008000", "#8B4513", "#FF4500", "#FF0000"]}  // Azul, Verde, Marrom, Vermelho
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Exercício dos 4 elementos.</Text>
        <Image 
          source={require("../assets/gif/tumblr_31e827ff508af97516608870f6898f66_b933b76a_500.gif")}
          style={styles.gif}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // Deixe o texto branco para melhor visibilidade
    marginBottom: 20,
  },
  gif: {
    width: 520,  
    height: 500, 
    resizeMode: "contain",
  },
});
