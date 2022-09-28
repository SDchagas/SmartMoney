import { View, StyleSheet } from 'react-native'
import React from 'react'
import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryChart/EntrySummaryList'

export default function EntrySummary({entradasAcumuladas}) {
  return (
    <View  style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entradasAcumuladas={entradasAcumuladas} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});