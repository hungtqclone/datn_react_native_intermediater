/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WaitConfirmScreen  = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>WaitConfirmScreen </Text>
    </View>
  )
}

export default WaitConfirmScreen 

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
})