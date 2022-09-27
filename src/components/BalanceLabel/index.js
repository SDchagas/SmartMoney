import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BalanceLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$ 2.064,35</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
    //    flex: 1,
        alignItems: 'center',
        top: 30,
    },
    label: {
        fontSize: 18,
        marginTop: 10,
    },
    value: {
        fontSize: 18,
        marginBottom: 10,
    },
});