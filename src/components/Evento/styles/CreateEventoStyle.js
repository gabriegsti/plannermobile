import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e5e5',
        paddingTop: 80,
    },
    formContext: {
        flex:1,
        backgroundColor:"#ffffff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:"center",
        paddingTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
    },
    formLabel:{
        color:"#000000",
        fontSize:16,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:35,
        margin:6,
        paddingLeft:20,
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exhibitionResultImc:{
        width: "100%",
        height:"50%",
    },
    listImcs:{
        marginTop:20,
    },
    resultImcItem:{
        fontSize:26,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
    },
    textResultItemList:{
        fontSize:14,
    },
    inputDate:{
        width:"90%",
        height:35,
        margin:6,
        paddingLeft:20,
    },
});

export default styles