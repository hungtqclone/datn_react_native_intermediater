/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeliveredScreen  = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>DeliveredScreen </Text>
    </View>
  )
}

export default DeliveredScreen 

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
})