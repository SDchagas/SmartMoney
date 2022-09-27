import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BalancePanelChart() {
  return (
    <View>
      <Text>BalancePanelChart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
   //     flex: 1,
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