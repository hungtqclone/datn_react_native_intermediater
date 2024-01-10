/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'

const PurchaseOrdersScreen = () => {
  return (
    <ScrollView style={styles.body}>
        <View style={styles.container}>
            <Image  style={styles.image} source={require('../../assets/images/icons/icon_back.png')} />
            <Text style={styles.title}>Đơn mua</Text>
        </View>

      <Text>PurchaseOrdersScreen</Text>
    </ScrollView>
  )
}

export default PurchaseOrdersScreen

const styles = StyleSheet.create({})