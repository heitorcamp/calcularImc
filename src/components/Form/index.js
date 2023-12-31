import React, {useState, useEffect} from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){
  
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, settextButton] = useState("Calcular");
  const [tabelaImc, setTabelaImc] = useState("");

  useEffect(() => {
    if (imc !== null) {
      tabelaGrauImc(imc);
    }
  }, [imc]);

  function imcCalculator(peso, altura) {
    const novoImc = (peso / (altura * altura)).toFixed(2);
    setImc(novoImc);
  }

  function validationImc() {
    if (peso !== null && altura !== null) {
      imcCalculator(peso, altura);
      setAltura(null);
      setPeso(null);
      setMessageImc("Seu IMC é igual: ");
      settextButton("Calcular novamente");

      return;
    }

    setImc(null);
    settextButton("Calcular");
    setMessageImc("Preencha peso e altura");
    setTabelaImc("");
  }

  

  function tabelaGrauImc(imc){

    if(imc <= 16.9){
      setTabelaImc("Muito abaixo do peso")
    } else if (imc <= 18.4){
      setTabelaImc("Abaixo do peso")
    } else if (imc <= 24.9){
      setTabelaImc("Peso normal")
    } else if (imc <= 29.9){
      setTabelaImc("Acima do peso")
    } else {
      setTabelaImc("Obeso")
      
    }
    
  
}



  return(
    <View style={styles.formContext}>
      <View style={styles.form}>
        
        <Text style={styles.formLAbel}>Peso</Text>
        <TextInput style={styles.input}
         onChangeText={setPeso}
         value={peso}
         placeholder="Ex: 75.4"
         keyboardType="numbers-and-punctuation" 
          />

        <Text style={styles.formLAbel}>Altura</Text>
        <TextInput style={styles.input}
          onChangeText={setAltura}
          value={altura}
          placeholder="Ex: 1.56"
          keyboardType="numbers-and-punctuation"
        />

        <TouchableOpacity style={styles.button} onPress={validationImc} >
          <Text 
          style={{color:"white", fontWeight:"bold"}}
          >{textButton}
          </Text>
        </TouchableOpacity>
        
                </View>
                <ResultImc messageResultImc={messageImc} resultImc={imc} tabelaImc={tabelaImc}/>
    </View>
  )
}






