import React from "react";
import IndividualMessage from './IndividualMessage'
import Messages from './screens/Messages'
import {MessageProvider, SelectMessageProvider} from './context/messages.context'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App({message}){
  return (
    <MessageProvider >
      <SelectMessageProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Messages"
              component={Messages} 
            />
            <Stack.Screen
              name="IndividualMessage"
              component={IndividualMessage} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SelectMessageProvider>
    </MessageProvider>
  );
}