import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Pressable,
    Keyboard,
    FlatList,
    TouchableOpacity
} from "react-native";
import Title from "../Title";
import styles from './styles/indexMateriaStyle';
import api from '../../../api';
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-web";


function IndexPomodoro() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [customInterval, setcustomInterval] = useState();

    const startTimer = () => {
            setcustomInterval(
                setInterval(
                    ()=> {changeTime();}
                    ,1000));
    };

    const stopTimer = () => {
        if(customInterval){
            clearInterval(customInterval);
        }
    };

    const clear = () => {
        stopTimer();
        setSeconds(0);
        setMinutes(0);
    }

    const changeTime = () => {
        setSeconds((prevState)=>{
            if(prevState + 1 == 60) {
                setMinutes((prevState) => prevState + 1);
                return 0;
            }
            return prevState + 1;
        });
    };


    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.formContext}>
                <Text style = {styles.textTimer}>
                { minutes < 10 ? "0" + minutes : minutes}: 
                { seconds < 10 ? "0" + seconds : seconds} 
                </Text>
            
                <TouchableOpacity style={styles.buttonCalculator} onPress={startTimer}>
                            <Text style={styles.textButtonCalculator}>
                            Start
                            </Text>
                </TouchableOpacity>
                    <TouchableOpacity  style={styles.buttonCalculator}  onPress={stopTimer}>
                            <Text style={styles.textButtonCalculator}>
                            Stop
                            </Text>
                </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCalculator} onPress={clear}>
                            <Text style={styles.textButtonCalculator}>
                                Clear
                            </Text>
                </TouchableOpacity>
                </View>
        </View>

    )
}



export default IndexPomodoro;