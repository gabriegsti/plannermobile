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
import styles from "./styles/createMateriaStyle";
import Title from "../Title";
import api from "../../../api";


function EditMateria({ route }){
    const {
        id,
        titulo,
        email,
        professor,
        data_Inicio,
        data_Fim
    } = route.params; 
    
    const [tituloInput, setTitulo] = useState(titulo);
    const [emailInput, setEmail] = useState(email);
    const [professorInput, setProfessor] = useState(professor);
    const [inicioInput, setInicio] = useState(data_Inicio);
    const [fimInput, setFim] = useState(data_Fim);
    

    function SalvarMateria (){
        fetch(api.baseURL + '/' + 'AtualizaMateria', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                Id_Materia: id,              
                Titulo: tituloInput,
                Email: emailInput,
                Professor: professorInput,
                Data_Inicio: inicioInput,
                Data_Fim: fimInput
            }) 
    });
    }
    

    return (
        <ScrollView style={styles.container}>
            <Title />
            <KeyboardAvoidingView style={styles.formContext}>
                <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
                <Text style={styles.formLabel}>Materia: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitulo}
                        value={tituloInput}
                        placeholder="Matéria"
                    ></TextInput>
                    <Text style={styles.formLabel}>Email: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={emailInput}
                        placeholder="Email@email.com"
                    ></TextInput>
                    <Text style={styles.formLabel}>Professor: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setProfessor}
                        value={professorInput}
                        placeholder="Nome"
                    ></TextInput>
                    <Text style={styles.formLabel}>Início:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInicio}
                        value={inicioInput}
                        placeholder="YYYY-MM-DD"
                        keyboardType="numeric"
                        maxLength={10}
                    ></TextInput>
                     <Text style={styles.formLabel}>Fim:</Text>
                    <TextInput
                         style={styles.input}
                         onChangeText={setFim}
                         value={fimInput}
                         placeholder="YYYY-MM-DD"
                         keyboardType="numeric"
                         maxLength={10}
                    ></TextInput>
                     <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={()=>{
                        SalvarMateria()
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

export default EditMateria;
