import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Ionicons } from "@expo/vector-icons"
import  Entypo  from '@expo/vector-icons/Entypo';
export default function TelaAgua(){
    return (
        <View style={styles.centralizado}>
            <Ionicons name = "leaf" size={100} color="green"/>
            <Text style ={{fontSize: 20, fontWeight:700}}>Água</Text>
        </View>
    )
}