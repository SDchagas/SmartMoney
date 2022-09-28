import React from "react";
import { View, StyleSheet, Button } from "react-native";
import BalancePanel from '../../components/BalancePanel/index';
import EntryList from "../../components/EntryList/index";
import EntrySummary from "../../components/EntrySummary/index";

const Main = ({navigation}) => {

    const currentBalance = 2064.35;  //define o valor de current balance (sald0)

    const entradasAcumuladas=[
        {Key: '1', description: 'alimentação', amount: 10},
        {Key: '2', description: 'cachaça', amount: 19},
        {Key: '3', description: 'bar', amount: 12},
        {Key: '4', description: 'pinga', amount: 15},
        {Key: '5', description: 'cerveja', amount: 16}          
    ];
    const entradas=[
        {Key: '1', description: 'poker', amount: 10},
        {Key: '2', description: 'alimentação', amount: 59},
        {Key: '3', description: 'bar', amount: 42},
        {Key: '4', description: 'pinga', amount: 25},
        {Key: '5', description: 'cerveja', amount: 300}
    ];


    return (
        <View style={styles.container}>
            <BalancePanel currentBalance={currentBalance} /> 
            <Button title='Adicionar' onPress={() => navigation.navigate('NewEntry')} />
            <EntrySummary  entradasAcumuladas={entradasAcumuladas} />
            <EntryList entradas={entradas} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
   
});

export default Main;