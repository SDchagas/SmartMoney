import { View, StyleSheet, FlatList, Text } from 'react-native'
import React from 'react'


export default function EntryList({entradas}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas</Text>
      <FlatList data={entradas}
      renderItem = {({item}) => (<Text>{item.description} - ${item.amount}</Text>)}
      />
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