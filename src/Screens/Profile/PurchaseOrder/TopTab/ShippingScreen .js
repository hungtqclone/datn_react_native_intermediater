import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ShippingScreen  = () => {
  return (
    <View style={styles.body}>
      <Image  source={require('../../../../assets/images/icons/icon_order.png')} style={styles.icon} />
      <Text style={styles.text}>Chưa có đơn hàng nào </Text>
    </View>
  )
}

export default ShippingScreen 

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