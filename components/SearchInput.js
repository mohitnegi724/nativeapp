import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput
} from "react-native";

export default function Search(){
  const [query, setQuery] = useState("");
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchText}
        placeholder="Search For Place"
        value={query}
        onChangeText={val=>setQuery(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: '80%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    position: 'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  searchText: {
    color: 'black'
  }
});