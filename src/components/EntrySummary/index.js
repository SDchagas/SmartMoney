import { View, Text } from 'react-native'
import React from 'react'
import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryChart/EntrySummaryList'

export default function EntrySummary() {
  return (
    <View>
      <EntrySummaryChart />
      <EntrySummaryList />
    </View>
  )
}