import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Main</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contaier: {
        flex: 1,
        padding: 10
    },
    label: {
        fontSize: 20
    },
});

export default Main;