/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';

const PhonePricing = props => {
  const {navigation} = props;
  return (
    <View style={styles.body}>
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
          <Text style={styles.appbarLeftText}>Định giá điện thoại</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.cont1}>
            <Image
              style={styles.iconSeller}
              source={require('../../../assets/images/icons/icon_seller.png')}
            />
            <Text style={styles.textHeader}>Chợ tốt thu mua điện thoại</Text>
          </View>
          <Text style={styles.txtContent}>
            Nếu bạn chưa có mã booking và cần bán nhanh điện thoại cũ? Hãy truy
            cập vào dịch vụ thu mua điện thoại cũ của Chợ Tốt để được định giá
            điện thoại cần bán
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Xem báo giá dự kiến</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txtbetwen}>Nhập mã booking</Text>
        <Text style={styles.dow}>
          Vui lòng nhập mã booking để bắt đầu định giá
        </Text>
        <View style={styles.contAddres}>
          <TextInput style={styles.inputWard} placeholder="Nhập mã booking" />
        </View>
        <TouchableOpacity style={styles.btnAcep}>
          <Text style={styles.txtBtn2}>Xác nhận</Text>
        </TouchableOpacity>
        <View style={styles.end}>
          <Text style={styles.txtend}>
            Để được định giá điện thoại của bạn, hãy truy cập vào chương trình{' '}
            <Text style={styles.txtsell}>Thu mua điện thoại</Text> và hẹn lịch
            kiểm tra máy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PhonePricing;

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  appbar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFCC00',
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
  },
  appbarRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarRightIcon: {
    width: 20,
    height: 20,
  },
  appbarLeft: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarLeftText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    // flex: 1,
    // backgroundColor: '#ebebeb',
  },
  header: {
    // height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ebebeb',
    borderBottomWidth: 1,
    borderRadius: 5,
    margin: 20,
    backgroundColor: '#FFFAFA',
  },
  cont1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 30,
  },
  iconSeller: {
    width: 70,
    height: 70,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  txtContent: {
    fontSize: 14,
    textAlign: 'left',
    marginHorizontal: 10,
    paddingHorizontal: 30,
  },
  btn: {
    width: 200,
    height: 40,
    // backgroundColor: '#FFCC00',
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  txtBtn: {
    fontSize: 15,
    fontWeight: 'bold',
    // color: '#fff',
  },
  txtbetwen: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  dow: {
    fontSize: 14,
    textAlign: 'left',
    marginHorizontal: 20,
    // paddingHorizontal: 10,
  },
  contAddres: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ebebeb',
    borderWidth: 1,
  },
  inputWard: {
    width: '100%',
    // height: 40,
    fontSize: 15,
  },
  btnAcep: {
    // width: 200,
    height: 40,
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // marginVertical: 20,
    marginHorizontal: 20,
  },
  end: {
    backgroundColor: '#fff',
    // margin: 20,
    padding: 10,
    borderRadius: 5,
  },
  txtend: {
    fontSize: 14,
    textAlign: 'left',
    marginHorizontal: 10,
    paddingHorizontal: 30,
  },
  txtsell: {
    color: '#FFCC00',
    fontWeight: 'bold',
  },
  txtBtn2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
