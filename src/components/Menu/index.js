import React, { useState} from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import styles from "./styles/indexMenuStyle";
import Title from "../Title";



function Menu(){

    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.formContext}>
                <View style={styles.listImcs}>
                    <View style={styles.resultImcItem}>
                        <TouchableOpacity 
                            style={styles.adornoButtonTextMenuListas}
                            >
                            <Text style={styles.menuButtonTextEvento}>Evento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.adornoButtonTextMenuListas}
                            >
                            <Text style={styles.menuButtonTextEvento}>Matérias</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.adornoButtonTextMenuListas}
                            >
                            <Text style={styles.menuButtonTextEvento}>Anotacoes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

export default Menu;