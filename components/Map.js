import React, { useEffect, useState, useContext } from "react";
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';
import {SelectedMessageContext} from '../context/messages.context'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from "react-native";

export default function Map(){
  const messageContext = useContext(SelectedMessageContext);
  const {SelectedMessage} = messageContext;

  if(!SelectedMessage.id){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    )
  }
  return(
    <View style={styles.container}>
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: Number(SelectedMessage.address.geo.lat),
          longitude: Number(SelectedMessage.address.geo.lng),
          latitudeDelta: .005,
          longitudeDelta: .005
      }}>
        
        <Marker
          coordinate={{
            latitude: Number(SelectedMessage.address.geo.lat),
            longitude: Number(SelectedMessage.address.geo.lng),
          }}
        >
        </Marker >
      </MapView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
  }
})