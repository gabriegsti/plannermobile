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
import styles from './styles/IndexAnotacoesStyle';
import api from '../../../api';
import { useNavigation } from "@react-navigation/native";

function IndexAnotacoes() {

    const [AnotacaoList, setEventoList] = useState([]);    
    const navigation =   useNavigation();

    function DeleteAnotacao(id){
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
                    text: "OK", onPress: () =>  fetch(api.baseURL + '/' + 'RemoverAnotacaoPorId'+ '/' + id , {
                        method: 'DELETE'
                    })
                }
            ]
        );
    }

    function loadAnotacaoList() {
        fetch(api.baseURL + '/' + 'indexAnotacao')
        .then((response) => response.json())
        .then((json) => setEventoList(json))
        .catch((error) => {
            console.error(error);
        })
    }

    useEffect(() => {
        loadAnotacaoList();
    }, [AnotacaoList]);

    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.formContext}>
            <TouchableOpacity 
                    style={styles.adornoButtonTextCadastrar}
                    onPress={()=>{
                        navigation.navigate('CreateAnotacoes')
                        }}
                    >
                    <Text style={styles.menuButtonTextEvento}>Cadastrar Anotações</Text>
                </TouchableOpacity>
                <FlatList
                    style={styles.listImcs}
                    data={AnotacaoList}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.resultImcItem}>  
                                <Text style={styles.textResultItemList}>
                                    {item.titulo}
                                </Text>
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoEditar}
                                    onPress={()=>{
                                        navigation.navigate('EditAnotacoes',{
                                            id: item.id_Anotacao,
                                            titulo: item.titulo,
                                            link: item.link,
                                            campo_texto: item.campo_Texto})
                                        }}
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoExcluir}
                                    onPress={() => {
                                        DeleteAnotacao(item.id_Anotacao)
                                    }}  
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Excluir</Text>
                                    
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    KeyExtractor={(item) =>item.id_Anotacao}
                >
                </FlatList>
            </View>
        </View>
    )
}



export default IndexAnotacoes;