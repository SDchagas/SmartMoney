import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function EntrySummaryList({entradasAcumuladas}) {
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>
      <FlatList data={entradasAcumuladas}
        renderItem = {({item}) => (<Text>-{item.description} - ${item.amount}
      </Text>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
     flex: 1,
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