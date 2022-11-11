import React, { useState} from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Vibration,
    Pressable,
    Keyboard,
    Button,
    Platform,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import styles from "./styles/CreateAnotacoesStyle";
import Title from "../Title";
import api from "../../../api";


function EditAnotacoes({ route }){
    const {id, titulo, link, campo_texto} = route.params; 
    const [tituloInput, setTitulo] = useState(titulo); 
    const [linkInput, setLink] = useState(link); 
    const [campo_textoInput, setCampo_texto] = useState(campo_texto); 

    function SalvarAnotacao (){
        fetch(api.baseURL + '/' + 'AtualizarAnotacao', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                Id_Anotacao: id,
                Titulo:tituloInput,
                Campo_Texto:campo_textoInput,
                Link:linkInput
            }) 
        });
    }


    return (
        <ScrollView style={styles.container}>
            <Title />
            <KeyboardAvoidingView style={styles.formContext} behavior="padding">
                <Pressable onPress={ () => {Keyboard.dismiss} } style={styles.form}>
                    <Text style={styles.formLabel}>Anotacao: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitulo}
                        value={tituloInput}
                        placeholder="Anotação"
                    ></TextInput>
                    <Text style={styles.formLabel}>Link:</Text>
                  <TextInput
                        style={styles.input}
                        onChangeText={setLink}
                        value={linkInput}
                        placeholder="Link.com.br"
                    ></TextInput>
                    <Text style={styles.formLabel}>Texto: </Text>
                    <TextInput
                        multiline 
                        numberOfLines={4}
                        style={styles.inputBigText}
                        onChangeText={setCampo_texto}
                        value={campo_textoInput}
                        maxLength={500}
                        placeholder="It is simply dummy text of the
                         printing and typesetting industry. 
                         Lorem Ipsum has been the industry's"
                    ></TextInput>
                     <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={()=>{
                        SalvarAnotacao()
                    }}>
                        <Text style={styles.textButtonCalculator}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </Pressable>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default EditAnotacoes;
