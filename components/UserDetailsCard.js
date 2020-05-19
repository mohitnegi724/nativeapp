import React, {useContext} from "react";
import {SelectedMessageContext} from '../context/messages.context'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator
} from "react-native";

export default function UserDetails(){
  const context = useContext(SelectedMessageContext)
  if(!context.SelectedMessage){
    return(
      <ActivityIndicator />
    )
  }else{
    const {id, email, name, username, address, phone, website, company} = context.SelectedMessage;
    const {street, suite, city, zipcode} = address;
    const {companyName = name , catchPhrase, bs} = company;

    return (
      <View style={styles.userDetailCardContainer}>
        <View style={styles.nameAndPersonalDetails}>
          <Text style={styles.name}>
            {name}
          </Text>
          <Text style={styles.username}>
            {username}
          </Text>
        </View>
        <View style={styles.topLeft}>
          <Text>
            {zipcode}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userDetailCardContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#ededed',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  nameAndPersonalDetails: {
    margin: 0,
    marginLeft: 20,
    height: '100%',
    flexDirection: 'column',
  },
  name: {
    fontSize: 14,
    color: 'black'
  },
  personalDetails: {
    fontSize: 12,
  },
  topLeft: {
    marginLeft: 'auto'
  }
});