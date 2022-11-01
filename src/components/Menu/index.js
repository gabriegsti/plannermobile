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
import { useNavigation } from '@react-navigation/native';



function Menu(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.formContext}>
                <View style={styles.listImcs}>
                    <View style={styles.resultImcItem}>
                        <TouchableOpacity 
                            style={styles.adornoButtonTextMenuListas}
                            onPress={()=>{
                                navigation.navigate('IndexEvento')
                                }}
                            >
                            <Text style={styles.menuButtonTextEvento}>Evento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.adornoButtonTextMenuListas}
                            onPress={()=>{
                                navigation.navigate('IndexMateria')
                                }}
                            >
                            <Text style={styles.menuButtonTextEvento}>Matérias</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.adornoButtonTextMenuListas}
                            onPress={()=>{
                                navigation.navigate('IndexAnotacoes')
                                }}
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