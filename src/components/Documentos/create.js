import React, { useState } from 'react';
import { Button, View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Vibration,
  Pressable,
  Keyboard,
  Platform,
  ScrollView,
  KeyboardAvoidingView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import api from '../../../api';
import styles from "./styles/CreateDocumentosStyle";
import Title from '../Title';

const DocPicker = () => {
    const [ doc, setDoc ] = useState();
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({ 
         type: "*/*", 
         copyToCacheDirectory: true })
          .then(response => {
            if (response.type == 'success') {          
              let { name, size, uri } = response;

           
              if (Platform.OS === "android" && uri[0] === "/") {
                 uri = `file://${uri}`;
                 uri = uri.replace(/%/g, "%25");
              }
          

              let nameParts = name.split('.');
              let fileType = nameParts[nameParts.length - 1];
              var fileToUpload = {
                name: name,
                size: size,
                uri: uri,
                type: "application/" + fileType
              };
              console.log(fileToUpload, '...............file')
              setDoc(fileToUpload);
            } 
          });
        // console.log(result);
    }

    const postDocument = () => {
        const url = api.baseURL + "/" + "upload";
        const fileUri = doc.uri;
        const formData = new FormData();
        formData.append('documento', doc);
        const options = {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
        };
        console.log(formData);

        fetch(url, options).catch((error) => console.log(error));
    }

    return (        
        <ScrollView style={styles.container}>
          <Title/>
          <KeyboardAvoidingView style={styles.formContext}>
          <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
            <TouchableOpacity style={styles.adornoButtonTextEventoEditar} onPress={pickDocument} >
              <Text style={styles.menuButtonTextEvento}>Selecionar Documento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.adornoButtonTextEventoExcluir}  onPress={postDocument}>
              <Text style={styles.menuButtonTextEvento}>Salvar</Text>
            </TouchableOpacity>
          </Pressable>
          </KeyboardAvoidingView>
        </ScrollView>
    )
};

export default DocPicker;