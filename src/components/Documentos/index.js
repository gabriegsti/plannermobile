import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Pressable,
    Keyboard,
    FlatList,
    TouchableOpacity,
    Image,
    RNFetchBlob,
    PermissionsAndroid 
} from "react-native";
import Title from "../Title";
import styles from "./styles/IndexDocumentos.Style";

import api from '../../../api';
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';


function IndexDocumentos() {

    const [DocumentosList, setDocumentosList] = useState([]);    
    const navigation =   useNavigation();

    function DeleteEvento(Id_Documento){
        fetch(api.baseURL + '/' + 'RemoverEventoPorId'+ '/' + Id_Documento , {
            method: 'DELETE'
        });
    }

    function loadDocumentosList() {
        fetch(api.baseURL + '/' + 'indexDocumentos')
        .then((response) => response.json())
        .then((json) => setDocumentosList(json))
        .catch((error) => {
            console.error(error);
        })
    }

    downloadFile = (item)  => {
      const uri = api.baseURL + '/' + 'DownloadDocumentos' + '/' + item.id_Documento
      let fileUri = FileSystem.documentDirectory + item.titulo;
      FileSystem.downloadAsync(uri, fileUri)
      .then(({ uri }) => {
          this.saveFile(uri);
        })
        .catch(error => {
          console.error(error);
        })
  }
  
  saveFile = async (fileUri) => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
          const asset = await MediaLibrary.createAssetAsync(fileUri)
          await MediaLibrary.createAlbumAsync("Download", asset, false)
      }
  }

  
    useEffect(() => {
        loadDocumentosList();
    }, [DocumentosList]);

    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.formContext}>
            <TouchableOpacity 
                    style={styles.adornoButtonTextCadastrar}
                    onPress={()=>{
                        navigation.navigate('DocPicker')
                        }}
                    >
                    <Text style={styles.menuButtonTextEvento}>Cadastrar Documentos</Text>
                </TouchableOpacity>
                <FlatList
                    style={styles.listImcs}
                    data={DocumentosList}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.resultImcItem}>  
                                <Text style={styles.textResultItemList}>
                                    {item.titulo}
                                </Text>
                                
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoEditar}
                                    onPress={() => downloadFile(item)}
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Baixar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.adornoButtonTextEventoExcluir}
                                    onPress={() => {
                                        DeleteEvento(item.id_Documento)
                                    }}  
                                    >
                                    <Text style={styles.menuButtonTextEvento}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    KeyExtractor={(item) =>item.id_Documento}
                >
                </FlatList>
            </View>
        </View>
    )
}



export default IndexDocumentos;