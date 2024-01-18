/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'

const Seller = () => {
  return (
    <View style={styles.body}>
        <Image style={styles.imageRate} source={require('../../../../assets/images/icons/iocn_rate.png')} />
        <View style={styles.container}>
            <Text style={styles.txtContent1}>Bạn chưa có đánh giá nào</Text>
            <Text style={styles.txtContent2}>Hãy mua bán trên Chợ Tốt và đánh giá để xây dựng cộng đồng chất lượng hơn nhé</Text>
        </View>
         </View>
  )
}

export default Seller

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageRate: {
        width: 200,
        height: 200,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    txtContent1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    txtContent2: {
        fontSize: 15,
        marginTop: 10,
        textAlign: 'center',
    },
})