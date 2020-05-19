import React, { useState, useEffect, useContext } from "react";
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import axios from 'axios'
import Message from '../components/Message'
import {MessagesContext, SelectedMessageContext} from '../context/messages.context'

export default function Messages({ navigation: { navigate }}){
  const context = useContext(MessagesContext);
  const messageContext = useContext(SelectedMessageContext);
  const {setSelectedContextMessage} = messageContext;
  async function fetchMessages() {
    const result = await axios('https://jsonplaceholder.typicode.com/users');
    await context.setContextMessages(result.data)
  }
  useEffect(()=>{
    fetchMessages();
  }, [])

  if(!context.Messages){
    return(
      <View>
        <Text>
          No messages
        </Text>
      </View>
    )
  }
  return(
    <FlatList
      data={context.Messages}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={()=>{
            setSelectedContextMessage(`${item.id}`)
            navigate('IndividualMessage')
          }}>
            <Message message={item} />
          </TouchableOpacity>
        )
      }}
    />
  )
}