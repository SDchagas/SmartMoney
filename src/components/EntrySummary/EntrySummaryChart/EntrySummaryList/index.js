import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function EntrySummaryList() {
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>
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
  container : {
  //    flex: 1,
  },
  label: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom:10,
},
  value: {},
});