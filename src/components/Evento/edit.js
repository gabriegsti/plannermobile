import React, { useState } from "react";
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
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import styles from "./styles/CreateEventoStyle";
import Title from "../Title";
import api from "../../../api";


function EditEvento({ route }){
    const {id, titulo, data_Hora} = route.params; 
    const [tituloInput, setTitulo] = useState(titulo); 
    const [idEvento,setIdEvento] = useState(id);
    const [errorMessageDia, setErrorMessageDia] = useState(null);
    const [errorMessageMes, setErrorMessageMes] = useState(null);
    const [errorMessageAno, setErrorMessageAno] = useState(null);
    
    const [dia, setDia] = useState(data_Hora.substring(8, 10)); 
    const [mes, setMes] = useState(data_Hora.substring(5, 7));
    const [ano, setAno] =  useState(data_Hora.substring(0, 4));


    function SalvarEvento (){
        let date = ano + '-' + mes + '-' + dia ;
        fetch(api.baseURL + '/' + 'AtualizaEvento', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                id_Evento: id,
                Titulo: tituloInput,
                Data_Hora: date
            }) 
        });
    }
    

    return (
        <ScrollView style={styles.container}>
            <Title />
            <KeyboardAvoidingView behavior="padding" style={styles.formContext}>
                <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
                    <Text style={styles.formLabel}>Evento: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitulo}
                        value={tituloInput}
                        placeholder="Reunião de trabalho"
                    ></TextInput>
                    <Text style={styles.formLabel}>Data</Text>
                    <Text style={styles.formLabel}>Dia:</Text>
                    <Text style={styles.errorMessage}>{errorMessageDia}</Text> 
                    <TextInput
                        style={styles.input}
                        onChangeText={setDia}
                        value={dia}
                        placeholder="DD"
                        keyboardType="numeric"
                        maxLength={2}
                    ></TextInput>
                    <Text style={styles.formLabel}>Mes: </Text>
                    <Text style={styles.errorMessageMes}>{errorMessageMes}</Text> 
                    <TextInput
                        style={styles.input}
                        onChangeText={setMes}
                        value={mes}
                        placeholder="MM"
                        keyboardType="numeric"
                        maxLength={2}
                    ></TextInput>
                    <Text style={styles.formLabel}>Ano:</Text>
                    <Text style={styles.errorMessageAno}>{errorMessageAno}</Text> 
                    <TextInput
                        style={styles.input}
                        onChangeText={setAno}
                        value={ano}
                        placeholder="YYYY"
                        keyboardType="numeric"
                        maxLength={4}
                    ></TextInput>
                     <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={()=>{
                        SalvarEvento()
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

export default EditEvento;
