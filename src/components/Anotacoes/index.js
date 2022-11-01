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
import styles from './styles/IndexAnotacoesStyle';
import api from '../../../api';
import { useNavigation } from "@react-navigation/native";

function IndexAnotacoes() {

    const [AnotacaoList, setEventoList] = useState([]);    
    const navigation =   useNavigation();

    function DeleteAnotacao(id){
        fetch(api.baseURL + '/' + 'RemoverAnotacaoPorId'+ '/' + id , {
            method: 'DELETE'
        });
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
                                            id: item.Id_Anotacao,
                                            titulo: item.Titulo,
                                            link: item.Link,
                                            campo_texto: item.Campo_Texto})
                                        }}
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoExcluir}
                                    onPress={() => {
                                        DeleteAnotacao(item.Id_Anotacao)
                                    }}  
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Excluir</Text>
                                    
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    KeyExtractor={(item) =>item.Id_Anotacao}
                >
                </FlatList>
            </View>
        </View>
    )
}



export default IndexAnotacoes;