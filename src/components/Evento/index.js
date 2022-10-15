import React, { useEffect, useState} from "react";
import { 
    View, 
    Text, 
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import Title from "../Title";
import styles from "./styles/IndexEventoStyle";

function IndexEvento() {

  const [EventoList, setEventoList] = useState([])

  useEffect(() => {
    loadEventosList();
  }, []);
    function loadEventosList(){
        fetch('https://localhost:7100/IndexEvento').then((response)=>{
            return response;
        }).catch((error)=>{
            console.log("Error while loading Events");
        })
        setEventoList(response.json);
    }

  return (
    <View style={styles.container}>
        <Title/>   
        <View style={styles.formContext}>
            <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
                
            </Pressable>
            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listImcs}
            data={EventoList}
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
    </View>
  )
}

export default IndexEvento;