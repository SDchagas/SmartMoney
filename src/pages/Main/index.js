import React from "react";
import { View, StyleSheet, Button } from "react-native";
import BalancePanel from '../../components/BalancePanel/index';
import EntryList from "../../components/EntryList/index";
import EntrySummary from "../../components/EntrySummary/index";

const Main = ({navigation}) => {
    const currentBalance = 2064.35;  //define o valor de current balance (sald0)
    return (
        <View style={styles.container}>
            <BalancePanel currentBalance={currentBalance} /> 
            <Button title='Adicionar' onPress={() => navigation.navigate('NewEntry')} />
            <EntrySummary />
            <EntryList />
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