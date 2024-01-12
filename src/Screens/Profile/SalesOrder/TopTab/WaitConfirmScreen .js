/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'

const WaitConfirmScreen1  = () => {
  return (
    <View style={styles.body}>
      <Image  source={require('../../../../assets/images/icons/icon_wallet_color.png')} style={styles.icon} />
      <Text style={styles.text}>Kích hoạt ví bán hàng</Text>
      <Text style={styles.text1}>Tăng số lượng đơn hàng thanh toán {'\n'} trực tuyến trên nền tảng chợ tốt</Text>
    <View>
    <View style={styles.button}>
        <Image source={require('../../../../assets/images/icons/icon_check.png')} style={styles.icon1} />
        <Text style={styles.text2}>Tăng đơn đặt hàng giao dịch qua chợ tố</Text>
      </View>
      <View style={styles.button}>
        <Image source={require('../../../../assets/images/icons/icon_check.png')} style={styles.icon1} />
        <Text style={styles.text2}>Nổi bật tin đăng với nhãn</Text>
        <Text style={styles.tagpro}>Thanh toán đảm bảo</Text>
      </View>
      <View style={styles.button}>
        <Image source={require('../../../../assets/images/icons/icon_check.png')} style={styles.icon1} />
        <Text style={styles.text2}>Quản lí trạng thái đơn hàng trong mục</Text>
      </View>
    </View>
    </View>
  )
}

export default WaitConfirmScreen1

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    width: 100,
    height: 100,
  },
  text1: {
    fontSize: 11,
    color: '#000',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon1: {
    width: 20,
    height: 20,
  },
  text2: {
    fontSize: 11,
    color: '#000',
    marginLeft: 10,
  },
  tagpro: {
    position: 'absolute',
    bottom: 1,
    left: 210,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 1,
    fontSize: 5,
    fontWeight: 'bold',
    color: 'white',
    width: 50,
    borderRadius: 5,
  },
})