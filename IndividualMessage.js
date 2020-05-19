import React from "react";
import Search from './components/SearchInput'
import UserDetailsCard from './components/UserDetailsCard'
import Map from './components/Map'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard
} from "react-native";

export default function Home(){
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <Map/>
          <View style={styles.details}>
            <UserDetailsCard />
            {/* <Search /> */}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: "pink",
    height: '100%',
    width: '100%'
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: "pink",
    height: '100%',
    width: '100%'
  },
  details: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    position: "absolute"
  }
});