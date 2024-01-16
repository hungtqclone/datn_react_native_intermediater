/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const SalesWalletScreen = props => {
  const {navigation} = props;
  return (
    <ScrollView style={styles.body}>
      <View style={styles.appbar}>
        <View style={styles.appbarRight}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.appbarRightIcon}
              source={require('../../../assets/images/icons/icon_back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.appbarLeft}>
          <Text style={styles.appbarLeftText}>Ví bán hàng</Text>
        </View>
      </View>
      <Image
        style={styles.banner}
        source={require('../../../assets/images/banners/thanhtoandambao.png')}
      />
      <View style={styles.container}>
        <Text style={styles.title}> Liên kết ví bán hàng</Text>
        <Text style={styles.content}>
          Sau khi <Text style={styles.bont}>Liên kết Ví</Text> thành công, tin
          đăng của bạn sẽ được kích hoạt tính năng "
          <Text style={styles.bont}>Thanh toán đảm bảo</Text>" - cho phép người
          mua có thể thanh toán trực tuyến sản phẩm của bạn qua Chợ Tốt.
        </Text>
        <View style={styles.contZalo}>
          <View style={styles.zalocont}>
            <Image
              style={styles.zalo}
              source={require('../../../assets/images/icons/icon_zalo.png')}
            />
            <Text style={styles.zaloText}>ZaloPay</Text>
          </View>
          <TouchableOpacity style={styles.zaloButton}>
            <Text style={styles.zaloButtonText}>Liên kết</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contZalo}>
          <View style={styles.zalocont}>
            <Image
              style={styles.zalo}
              source={require('../../../assets/images/icons/icon_vnpay.png')}
            />
            <Text style={styles.zaloText}>VNPay</Text>
          </View>
          <TouchableOpacity style={styles.zaloButton}>
            <Text style={styles.zaloButtonText}>Liên kết</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}>
          Lưu ý:Bạn chỉ nhận được thanh toán khi xác thực đầy đủ thông tin (CMND/ CCCD/ Hộ chiếu và Tài Khoản Ngân Hàng) mà ví điện tử đó yêu cầu.
          </Text>
        </View>
        
      </View>
      <View style={styles.instruct}>
      <Text style={styles.textinstruct}>Thanh toán đảm bảo là gì?</Text>
        <Text style={styles.textinstruct}>Hướng dẫn liên kết ví bán hàng</Text>
        <Text style={styles.textinstruct}>Hướng dẫn xử lí đơn hàng</Text>
        <Text style={styles.textinstruct}>Điều khoản và điều kiện xử dụng</Text>

      </View>
    </ScrollView>
  );
};

export default SalesWalletScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  appbar: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FFCC00',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  appbarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appbarLeftText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  appbarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  appbarRightIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  text: {
    // flex: 1,
    width: '100%',
    height: '100%',
    fontSize: 100,
    fontWeight: 'bold',
    color: '#000',
  },
  //banner
  banner: {
    width: '100%',
    height: 200,
  },
  //container
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    // backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  bont: {
    fontWeight: 'bold',
  },
  contZalo: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#FDF5E6',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
  },
  zalo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  zaloText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#000',
  },
  zaloButton: {
    backgroundColor: '#FFCC00',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  zaloButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  zalocont: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  note: {
    borderRadius: 10,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 10,
  },
  noteText: {
  },
  instruct:{
    marginHorizontal: 10,
    marginTop: 10,
    // backgroundColor: '#fff',
  },
  textinstruct:{
    fontWeight: 'bold',
    marginBottom: 10,
    //gạch chân
    textDecorationLine: 'underline',
  },

});
