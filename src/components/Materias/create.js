import React, { useState, useEffect} from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Vibration,
    Pressable,
    Keyboard,
    Button,
    Platform
} from "react-native";
import styles from "./styles/createMateriaStyle";
import Title from "../Title";
import api from "../../../api";


function CreateMateria(){

    const [titulo, setTitulo] = useState(null);
    const [email, setEmail] = useState(null);
    const [professor, setProfessor] = useState(null);
    const [inicio, setInicio] = useState(null);
    const [fim, setFim] = useState(null);
    
    useEffect(() => {
      if(inicio != null){
      
        let condicaoInicio =
          (inicio.length == 4 || inicio.length == 7);
        if(condicaoInicio){
            //todo: mecanica do pop, se o que estiver no pop for um traço, deve ser impedido de o caracter ser somado, e o pop deve ser limpo, se o pop estiver limpo, deve ser acionado o caractere
            setInicio(inicio + "-");
        }
      }
      if(fim != null){

        let condicaoFim =
            (fim.length == 4 || fim.length == 7);
        
        if(condicaoFim){
            setFim(fim + "-");
        }
      }
    }, [inicio, fim]);


    function SalvarMateria(){
        fetch(api.baseURL + '/' + 'CadastrarMateria', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                Titulo: titulo,
                Email:email,
                Professor: professor,
                Data_Inicio: inicio,
                Data_Fim: fim,
            }) 
        });
    }


    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.formContext}>
                <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
                    <Text style={styles.formLabel}>Materia: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitulo}
                        value={titulo}
                        placeholder="Matéria"
                    ></TextInput>
                    <Text style={styles.formLabel}>Email: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email@email.com"
                    ></TextInput>
                    <Text style={styles.formLabel}>Professor: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setProfessor}
                        value={professor}
                        placeholder="Nome"
                    ></TextInput>
                    <Text style={styles.formLabel}>Início:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInicio}
                        value={inicio}
                        placeholder="YYYY-MM-DD"
                        keyboardType="numeric"
                        maxLength={10}
                    ></TextInput>
                     <Text style={styles.formLabel}>Fim:</Text>
                    <TextInput
                         style={styles.input}
                         onChangeText={setFim}
                         value={fim}
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
            </View>
        </View>
    )
}

export default CreateMateria;
