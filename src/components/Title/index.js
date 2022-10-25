import React from "react";
import {View, Text,TouchableOpacity } from "react-native"
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

function goToMenu(){
    
}

export default function Title(){
        const navigation = useNavigation();
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Planner</Text>
            <TouchableOpacity 
                style={styles.adornoButtonText}
                onPress={()=>{
                    navigation.navigate('Menu')
                    }}>
                <Text style={styles.menuButtonText}>Menu</Text>
            </TouchableOpacity>
        </View>
    );
}