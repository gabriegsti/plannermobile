import React, { useState} from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Vibration,
    Pressable,
    Keyboard,
    Button
} from "react-native";
import styles from "./styles/CreateEventoStyle";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Title from "../Title";

export default function CreateEvento(){

    const [evento, setEvento] = useState(null);
    const [dataDoEvento, setdataDoEvento] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, seatErrorMessage] = useState(null);
    const [date, setDate] = useState(new Date());
    const [exibirCalendario, setExibirCalendario] = useState(false);

    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.formContext}>
                <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
                    <Text style={styles.formLabel}>Evento: </Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEvento}
                        value={evento}
                        placeholder="Reunião de trabalho"
                    ></TextInput>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    
                    DateTimePickerAndroid.open(params: AndroidNativeProps)
DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])
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
            </View>
        </View>
    )
}