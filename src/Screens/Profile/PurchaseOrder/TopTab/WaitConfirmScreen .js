/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'

const WaitConfirmScreen  = () => {
  return (
    <View style={styles.body}>
      <Image  source={require('../../../../assets/images/icons/icon_order.png')} style={styles.icon} />
      <Text style={styles.text}>Chưa có đơn hàng nào </Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    width: 100,
    height: 100,
  },
})