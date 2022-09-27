import { View, StyleSheet, FlatList, Text } from 'react-native'
import React from 'react'


export default function EntryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas</Text>
      <FlatList data={[
        {Key: 'alimentação'},
        {Key: 'cachaça'},
        {Key: 'bar'},
        {Key: 'pinga'},
        {Key: 'cerveja'}
      ]}
      renderItem = {({item}) => <Text>{item.Key}</Text>}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop:10,
        marginBottom:10,
    
    }
   
});