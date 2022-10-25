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
import styles from "./styles/IndexEventoStyle";

import api from '../../../api';

function IndexEvento() {

    const [EventoList, setEventoList] = useState([]);

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
    }, []);

    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.formContext}>
            <TouchableOpacity 
                    style={styles.adornoButtonTextCadastrar}
                    >
                    <Text style={styles.menuButtonTextEvento}>Cadastrar Evento</Text>
                </TouchableOpacity>
                <FlatList
                    // showsVerticalScrollIndicator={false}
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
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoExcluir}
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