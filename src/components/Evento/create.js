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
import styles from "./styles/CreateEventoStyle";
import DatePicker from "react-native-datepicker";

export default function CreateEvento(){

    const [evento, setEvento] = useState(null);
    const [dataDoEvento, setdataDoEvento] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState('');

    return (
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
                <TextInput
                    style={styles.input}
                    onChangeText={setdataDoEvento}
                    value={dataDoEvento}
                    placeholder="AAAA-DD-MM"
                    keyboardType="numeric"
                ></TextInput>
                <DatePicker 
                    format="YYYY-DD-MM"
                    style={ styles.DateComponente}
                    date={data}
                    onDataChange={setData}
                />
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
    )
}