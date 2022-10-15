import React, { useState} from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import styles from "./style";
import ResultImc from "./ResultImc/";



export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
        let heightFormat = height.replace(",", ".")
        let totalImc = ((weight/(heightFormat*heightFormat)).toFixed(2));
        setImcList((arr) => [...arr,{id: new Date().getTime(), imc:totalImc}])
        setImc(totalImc)
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*");
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual: ");
            setTextButton("Calcular Novamente.");
            setErrorMessage(null);
        }
        else{
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("preencha o peso e a altura");
        }
        
    }

    return (
        <View style={styles.formContext}>
            {imc == null ?
            <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                ></TextInput>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={()=>{
                        validationImc()
                    }}>
                        <Text style={styles.textButtonCalculator}>
                            {textButton}
                        </Text>
                </TouchableOpacity>
            </Pressable>
            :
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} ResultImc={imc}></ResultImc>
                <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={()=>{
                            validationImc()
                        }}>
                            <Text style={styles.textButtonCalculator}>
                                {textButton}
                            </Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({item})=>{
                return(
                    <Text style = {styles.resultImcItem} >
                        <Text style={styles.textResultItemList}>
                            Resultado IMC = 
                        </Text>
                        {item.imc}
                    </Text>
                )
            }}
            KeyExtractor={(item)=>{
                item.id
            }}   
            >
            </FlatList>
        </View>
    )
}