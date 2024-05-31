import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles }from './styles'

export function Home(){

    function handleParticipantAdd(){
        console.log("ai como clica");
    }

    return(
        <View style={ 
          styles.container}
        >
          <Text style={styles.eventName}>Nome do Evento</Text>
          <Text style={styles.eventDate}>Sexta, 25 de março de 2024 </Text>
          <View  style = {styles.containerInput}>
          <TextInput style= {styles.input}
                     placeholder="Nome do participante"
                     placeholderTextColor="#8c8d8c"
          />
            <TouchableOpacity style = {styles.button} onPress ={handleParticipantAdd}>
                <Text style = {styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }