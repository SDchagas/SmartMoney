import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BalancePanelLabel from '../../components/BalancePanel/BalancePanelLabel/index';
import BalancePanel from '../../components/BalancePanel/index';
import BalancePanelChart from '../../components/BalancePanel/BalancePanelLabel/BalancePanelChart/index';

const Main = () => {
    return (
        <View style={styles.container}>
            <BalancePanel/>
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