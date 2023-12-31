import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function ResultImc(props){
  return(
    <View style={styles.resultImc}>
      
      <Text style={styles.information}>{props.messageResultImc}</Text>  
      <Text style={styles.result}>{props.resultImc}</Text>

      <Text style={styles.tabelaImc}>{props.tabelaImc}</Text>

    
    </View>
  );
}