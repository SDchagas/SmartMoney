import { View, StyleSheet } from 'react-native'
import React from 'react'
import EntryListItem from './EntryListItem';

export default function EntryList() {
  return (
    <View>
      <EntryListItem />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
   
});