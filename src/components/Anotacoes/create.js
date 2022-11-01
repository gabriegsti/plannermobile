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
    KeyboardAvoidingView 
} from "react-native";
import styles from "./styles/CreateAnotacoesStyle";
import Title from "../Title";
import api from "../../../api";


function CreateAnotacoes(){

    const [titulo, setTitulo] = useState(null); 
    const [link, setLink] = useState(null); 
    const [campo_texto, setCampo_texto] = useState(null); 

    function SalvarAnotacao (){
        fetch(api.baseURL + '/' + 'SalvarAnotacao', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                Titulo:titulo,
                Campo_Texto:campo_texto,
                Link:link
            }) 
        });
    }


    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.formContext}>
                <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
                    <Text style={styles.formLabel}>Anotacao: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitulo}
                        value={titulo}
                        placeholder="Anotação"
                    ></TextInput>
                    <Text style={styles.formLabel}>Link:</Text>
                  <TextInput
                        style={styles.input}
                        onChangeText={setLink}
                        value={link}
                        placeholder="Link.com.br"
                    ></TextInput>
                    <Text style={styles.formLabel}>Texto: </Text>
                    <TextInput
                        style={styles.inputBigText}
                        onChangeText={setCampo_texto}
                        value={campo_texto}
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
            </View>
        </View>
    )
}

export default CreateAnotacoes;