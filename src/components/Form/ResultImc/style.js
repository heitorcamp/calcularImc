import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    resultImc:{
      flex:1,
      backgroundColor:"#f6f6f6",
      alignItems:"center",
      width:"100%",
      marginTop:15, //se afasta do botao
      
      borderRadius:50,
      paddingTop:18
    },
    information:{
      fontSize:18,
      color:"red",
      fontWeight:"bold"
    },
    result:{
      fontSize:40,
      color:"red",
      fontWeight:"bold"
    },
    tabelaImc:{
      fontSize: 30,
      padding:30,
      fontWeight:"bold",
      
    }

});

export default styles