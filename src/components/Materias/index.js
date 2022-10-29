import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Pressable,
    Keyboard,
    FlatList,
    TouchableOpacity
} from "react-native";
import Title from "../Title";
import styles from './styles/indexMateriaStyle';


function IndexMateria() {

    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.formContext}>
            <TouchableOpacity 
                    style={styles.adornoButtonTextCadastrar}
                    onPress={()=>{
                        navigation.navigate('CreateMateria')
                        }}
                    >
                    <Text style={styles.menuButtonTextEvento}>Cadastrar Matéria</Text>
            </TouchableOpacity>
            
            </View>
        </View>

    )
}



export default IndexMateria;