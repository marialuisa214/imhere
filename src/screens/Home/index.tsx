import React, { useState } from "react";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";

export function Home(){
  // gera a lista participante e a FUNÇÃO(setParticipants) de atualizacao da lista, <> estou informando o tipo - Array String
  const [participants, setParticipants] = useState<String[]>([]);
  const [participantName, setParticipantName] = useState("");

  
  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert("Participante existente", "O Participante já foi adicionado ao evento anteriormente!");
    }
    // adiciono novo participante ao fim da lista
    // ["Joao"] => [["Joao"], "Caua"] -> ... -> serve para desestrutar:  ["Joao"] => ["Joao", "Caua"]
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }
  function handleParticipantRemove(name: string){
    Alert.alert("Remover", 
                `Deseja remover o participante ${name}?`, 
                [
                    {text:'Sim', onPress: () => Alert.alert("Deletado")}, 
                    {text:'Não'}
                ]
      );
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
                  //dispara um evento sempre que o que ta dentro da caixa muda
                  onChangeText={setParticipantName}
                  value={participantName}
      />
        <TouchableOpacity style = {styles.button} onPress ={handleParticipantAdd}>
            <Text style = {styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>

      <FlatList
      data = {participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant key={item} 
                     name={item} 
                     onRemove={() => handleParticipantRemove(item)}/>
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