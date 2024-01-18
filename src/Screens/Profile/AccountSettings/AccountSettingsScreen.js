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

const AccountSettingsScreen = props => {
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
          <Text style={styles.appbarLeftText}>Cài đặt thông tin</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.txtPerInfo}>Thông tin cá nhân</Text>
        <View style={styles.contName}>
          <View style={styles.title}>
            <Text style={styles.txtName}>Họ và tên</Text>
            <Text style={styles.txtZ}>*</Text>
          </View>
          <TextInput
            style={styles.inputName}
            placeholder="Nhập họ và tên"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.contAddress}>
            <TouchableOpacity style={styles.btnAddress}>
              <Text style={styles.txtAddress}>Địa chỉ của bạn</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountSettingsScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#fff',
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
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  txtPerInfo: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  contName: {
    padding: 5,
    marginBottom: 20,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  txtZ: {
    fontSize: 15,
    color: 'red',
  },
  inputName: {
    borderWidth: 0,
    borderBottomColor: 'transparent', // Đặt màu border thành trong suốt
    borderBottomWidth: 0, // Đặt độ rộng border là 0
    fontSize: 15,
  },
});
