import React, {createContext, useState} from 'react';
import axios from 'axios';
export let MessagesContext = createContext([]);
export let SelectedMessageContext = createContext([]);

export const MessageProvider=({children})=>{
  const [Messages, setMessages] = useState([])
  return(
    <MessagesContext.Provider value={
      {
        Messages,
        setContextMessages:arr=>{
          setMessages(arr)
        }
      }
    }>
      {children}
    </MessagesContext.Provider>
  )
}

export const SelectMessageProvider=({children})=>{
  const [SelectedMessage, setSelectedMessage] = useState("")
  async function fetchMessage(key){
    let message = await axios.get(`http://jsonplaceholder.typicode.com/users?id=${key}`);
    setSelectedMessage(message.data[0])
  }
  return(
    <SelectedMessageContext.Provider value={
      {
        SelectedMessage,
        setSelectedContextMessage:async id=>{
          await fetchMessage(id)
        }
      }
    }>
      {children}
    </SelectedMessageContext.Provider>
  )
}