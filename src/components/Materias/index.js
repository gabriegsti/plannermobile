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
import api from '../../../api';
import { useNavigation } from "@react-navigation/native";


function IndexMateria() {
    const [MateriasList, setMateriasList] = useState([]);    
    const navigation = useNavigation();

    function loadMateriasList() {
        fetch(api.baseURL + '/' + 'IndexMateria')
        .then((response) => response.json())
        .then((json) => setMateriasList(json))
        .catch((error) => {
            console.error(error);
        })
    }

    useEffect(() => {
        loadMateriasList();
    }, [MateriasList]);

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
            <FlatList
                    style={styles.listImcs}
                    data={MateriasList}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.resultImcItem}>  
                                <Text style={styles.textResultItemList}>
                                    {item.titulo}
                                </Text>
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoEditar}
                                    onPress={()=>{
                                        navigation.navigate('EditMateria',{
                                            id:item.id_Materia,
                                            titulo: item.titulo,
                                            email:item.materia,
                                            professor:item.professor,
                                            data_Inicio:item.data_Inicio,
                                            data_Fim:item.data_Fim
                                        })
                                        }}
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
                    KeyExtractor={(item) =>item.id_Materia}
                >
                </FlatList>
            </View>
        </View>

    )
}



export default IndexMateria;