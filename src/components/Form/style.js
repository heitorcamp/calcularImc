import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext:{
    width:"100%", //ocupa 100 de largura
    height:"100%", // altura de 100
    bottom:0, // vai ate embaixo da tela
    backgroundColor:"#ffff", 
    alignItems:"center", // centraliza os intens filhos
    marginTop:30, // ele afasta do titulo
    borderTopLeftRadius: 30, //os dois bordertop arredonda os cantos 
    borderTopRightRadius: 30
  },
  button:{
    backgroundColor:"red", 
    height: 40,
    width: "90%",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30,
    marginLeft:15,
    marginTop:30,
    marginBottom:30
    
  },
  form:{
    width:"100%",
    height:"auto",
    marginTop:30,
    padding:10,
    
  },
  formLAbel:{
    color:"black",
    fontSize:18,
    paddingLeft:20,
    
  },
  input:{
    width:"90%", //o input ocupa 90% da tela na horizontal
    backgroundColor:"#f6f6f6", // cinza claro
    borderRadius: 50, // arredonda os dois lados
    height: 40, // deixa ele mais alto
    margin: 12,
    paddingLeft:10 // afasta oque ta dentro dele da parede esquerda
  }
});

export default styles