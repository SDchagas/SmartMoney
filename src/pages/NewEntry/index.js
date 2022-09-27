import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import BalanceLabel from '../../components/BalanceLabel/index';

export default function NewEntry({navigation}) {
    const currentBalance = 2065.38;
  return (
    <View style={styles.container}>
     <BalanceLabel currentBalance = {currentBalance} />
     <View style={{marginTop: 20}}>
        <TextInput style={styles.imput}/>
        <TextInput style={styles.imput}/>
        <Button title="GPS"/>   
        <Button title="Camera"/>   
     </View>
     <View>
        <Button title="Adicionar"/>   
        <Button title="Cancelar" onPress={() =>navigation.goBack() }/>   
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 10,
    },
    label: {
        fontSize: 12,
        marginTop: 10,
    },
    value: {
        fontSize: 18,
    },
    imput: {
        borderColor: '#000',
        borderWidth: 1,
        marginTop: 5,
    }

});