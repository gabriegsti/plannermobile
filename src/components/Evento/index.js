import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Pressable,
    Keyboard,
    FlatList,
    TouchableOpacity,
    Alert
} from "react-native";
import Title from "../Title";
import styles from "./styles/IndexEventoStyle";

import api from '../../../api';
import { useNavigation } from "@react-navigation/native";

function IndexEvento() {

    const [EventoList, setEventoList] = useState([]);    
    const navigation =   useNavigation();

    function DeleteEvento(id_Evento) {
        Alert.alert(
            "Excluir",
            "Confirmar Exclusão?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => fetch(api.baseURL + '/' + 'RemoverEventoPorId' + '/' + id_Evento, {
                        method: 'DELETE'
                    })
                }
            ]
        );
    }

    function loadEventosList() {
        fetch(api.baseURL + '/' + 'indexEvento')
        .then((response) => response.json())
        .then((json) => setEventoList(json))
        .catch((error) => {
            console.error(error);
        })
    }

    useEffect(() => {
        loadEventosList();
    }, [EventoList]);

    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.formContext}>
            <TouchableOpacity 
                    style={styles.adornoButtonTextCadastrar}
                    onPress={()=>{
                        navigation.navigate('CreateEvento')
                        }}
                    >
                    <Text style={styles.menuButtonTextEvento}>Cadastrar Evento</Text>
                </TouchableOpacity>
                <FlatList
                    style={styles.listImcs}
                    data={EventoList}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.resultImcItem}>  
                                <Text style={styles.textResultItemList}>
                                    {item.titulo}
                                </Text>
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoEditar}
                                    onPress={()=>{
                                        navigation.navigate('EditEvento',{
                                            id: item.id_Evento,
                                            titulo: item.titulo,
                                            data_Hora: item.data_Hora})
                                        }}
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoExcluir}
                                    onPress={() => {
                                        DeleteEvento(item.id_Evento)
                                    }}  
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Excluir</Text>
                                    
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    KeyExtractor={(item) =>item.id_Evento}
                >
                </FlatList>
            </View>
        </View>
    )
}



export default IndexEvento;