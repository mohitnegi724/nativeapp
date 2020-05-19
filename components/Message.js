import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

export default function Message({message}){
  return (
    <View style={styles.userContainer}>
      <View style={styles.userImageContainer}>
        <Image
          style={styles.userImage}
          title="User Image"
          source={require('../assets/user.png')}
        />
      </View>
      <View style={styles.nameAndPersonalDetails}>
        <Text style={styles.name}>
          {message.name}
        </Text>
        <Text style={styles.personalDetails}>
          {message.company.catchPhrase}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    paddingHorizontal: 10,
    margin: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 1,
  },
  nameAndPersonalDetails: {
    margin: 0,
    marginLeft: 20,
    height: 35,
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  name: {
    fontSize: 14,
    color: 'black'
  },
  personalDetails: {
    fontSize: 12,
  },
  userImageContainer: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    margin: 0,
    backgroundColor: 'pink',
    flexDirection: 'column',
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
  },
  userImage: {
    width: '100%',
    height: '100%',
  }
});