import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Entypo, Ionicons } from "@expo/vector-icons"
export default function TelaAr(){
    return (
        <View style={styles.centralizado}>
            <Entypo name = "air" size={100} color="#63625f"/>
            <Text style ={{fontSize: 20, fontWeight:700}}>Ar</Text>
        </View>
    )
}