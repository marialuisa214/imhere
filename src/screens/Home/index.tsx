import React from "react";
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";

export function Home(){
  const names = ["Ana", "Carlos", "Beatriz", "Fernando", "Gabriela", "João", "Mariana", "Lucas", "Sofia", "Pedro"];

  function handleParticipantAdd(){
    console.log("ai como clica")
  }
  function handleParticipantRemove(name: string){
    console.log(`ai como remove: ${name}`);
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

      <FlatList
      data = {names}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant key={item} 
                     name={item} 
                     onRemove={() => handleParticipantRemove("oi")}/>
      )}
      //remove barra lateral
      showsVerticalScrollIndicator={false}

      //casoa lista esteja vazia, reenderize outra coisa:
      ListEmptyComponent={
        <Text style= {styles.listEmptyText} > Ainda nenhum participante foi adicionado! </Text>
      }

      />
    </View>
      )
}