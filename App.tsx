import React from "react";
import { Text, View } from "react-native";

export default function App(){
  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffbf51",
      


    }}>
      <Text key= "caua">Caua ama menos</Text>
      <Text key= "maria">Maria Ama mais </Text>
    </View>
  )
}