import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Ionicons } from "@expo/vector-icons"
export default function TelaAgua(){
    return (
        <View style={styles.centralizado}>
            <Ionicons name = "water" size={100} color="#3A98FF"/>
            <Text style ={{fontSize: 20, fontWeight:700}}>Água</Text>
        </View>
    )
}