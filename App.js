import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,
   ScrollView, StatusBar, Button, FlatList, ToastAndroid } from 'react-native';


   const AddEntry = () =>{ //função do clique
    ToastAndroid.show("tamo aprendendo",ToastAndroid.SHORT); 
    console.log('aqui estamos');
   }


const App = () => {
  return (
    <View>
      <Text style={{fontSize: 22, fontWeight: "bold",
        marginTop:50, MarginBotton: 20}}>Saldo: -5.000,00
      </Text>
      <Button
       onPress={AddEntry} //função chamada no onpress
       title="adicionar">
      </Button>
      <Text style={{fontSize: 22, fontWeight: "bold",
        marginTop:10, MarginBotton: 10}}>Categorias
      </Text>
      <FlatList data={[
        {Key: 'alimentação'},
        {Key: 'cachaça'},
        {Key: 'bar'},
        {Key: 'pinga'},
        {Key: 'cerveja'}
      ]}
      renderItem = {({item}) => <Text>{item.Key}</Text>}
      ></FlatList>
      <Text style={{fontSize: 22, fontWeight: "bold",
        marginTop:10, MarginBotton: 10}}>Ultimos Lançamentos</Text>
      <FlatList data={[
        {Key: 'alimentação: R$50,00'},
        {Key: 'cachaça: R$:10,00'},
        {Key: 'bar'},
        {Key: 'pinga'},
        {Key: 'cerveja'}
      ]}
      renderItem = {({item}) => <Text>{item.Key}</Text>}
      ></FlatList>
      
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
