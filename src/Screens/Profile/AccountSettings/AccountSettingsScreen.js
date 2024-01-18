/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';

const AccountSettingsScreen = props => {
  const {navigation} = props;
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.body}>
      <ScrollView>
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
              <Image
                style={styles.iconAddress}
                source={require('../../../assets/images/icons/icon_arrow_right.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contPhone}>
            <TextInput
              style={styles.inputPhone}
              placeholder="Thêm số điện thoại *"
            />
          </View>
          <View>
            <View style={styles.contPhoneCheck}>
              <Text style={styles.txtPhonecheck}>
                Cho phép người mua liên lạc qua số điện thoại
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#FFCC00'}}
                thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <Text style={styles.txtPhonecheck1}>
              Khi bật tính năng này, số điện thoại của bạn sẽ được hiển thị trên
              tất cả tin đăng của bạn.
            </Text>
          </View>
          <View style={styles.contintro}>
            <Text style={styles.txtintro}>Giới thiệu</Text>
            <TextInput
              style={styles.inputintro}
              placeholder="Viết vài dòng giới thiệu về gian hàng của bạn"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.txtMax}>Tối đa 60 từ</Text>
          <View style={styles.contAddress}>
            <TouchableOpacity style={styles.btnAddress}>
              <Text style={styles.txtAddress}>CMND / CCCD / Hộ chiếu</Text>
              <Image
                style={styles.iconAddress}
                source={require('../../../assets/images/icons/icon_arrow_right.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contAddress}>
            <TouchableOpacity style={styles.btnAddress}>
              <Text style={styles.txtAddress}>Giới tính</Text>
              <Image
                style={styles.iconAddress}
                source={require('../../../assets/images/icons/icon_down-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contAddress}>
            <TouchableOpacity style={styles.btnAddress}>
              <Text style={styles.txtAddress}>Ngày, tháng, năm sinh </Text>
              <Image
                style={styles.iconAddress}
                source={require('../../../assets/images/icons/icon_down-arrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.txtPerInfo}>Thông tin xác thực</Text>
          <View style={styles.contMail}>
            <View style={styles.cont}>
              <Image
                style={styles.iconMain}
                source={require('../../../assets/images/icons/icon_mail.png')}
              />
              <Text style={styles.txtMail}>Email</Text>
            </View>

            <TouchableOpacity style={styles.btnMail}>
              <Text style={styles.txtConnect}>Kết nối</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contMail}>
            <View style={styles.cont}>
              <Image
                style={styles.iconMain}
                source={require('../../../assets/images/icons/icon_fb.png')}
              />
              <Text style={styles.txtMail}>Facebook</Text>
            </View>

            <TouchableOpacity style={styles.btnMail}>
              <Text style={styles.txtConnect}>Kết nối</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contMail}>
            <View style={styles.cont}>
              <Image
                style={styles.iconMain}
                source={require('../../../assets/images/icons/icon_google.png')}
              />
              <Text style={styles.txtMail}>Google</Text>
            </View>

            <TouchableOpacity style={styles.btnMail}>
              <Text style={styles.txtConnect}>Kết nối</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contMail}>
            <View style={styles.cont}>
              <Image
                style={styles.iconMain}
                source={require('../../../assets/images/icons/icon_apple.png')}
              />
              <Text style={styles.txtMail}>Apple ID</Text>
            </View>

            <TouchableOpacity style={styles.btnMail}>
              <Text style={styles.txtConnect}>Kết nối</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contMail}>
            <View style={styles.cont}>
              <Image
                style={styles.iconMain}
                source={require('../../../assets/images/icons/icon_zalo.png')}
              />
              <Text style={styles.txtMail}>Zalo</Text>
            </View>

            <TouchableOpacity style={styles.btnMail}>
              <Text style={styles.txtConnect}>Kết nối</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container3}>
          <Text style={styles.txtPerInfo}>Cài đặt tài khoản</Text>
          <View style={styles.contAddress}>
            <TouchableOpacity style={styles.btnAddress}>
              <Text style={styles.txtAddress}>Mật khẩu *</Text>
              <Image
                style={styles.iconAddress}
                source={require('../../../assets/images/icons/icon_arrow_right.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contPhone}>
            <TextInput style={styles.inputPhone} placeholder="Mã số thuế" />
          </View>
          <View style={styles.contAddress}>
            <TouchableOpacity style={styles.btnAddress}>
              <Text style={styles.txtAddress}>Danh mục yêu thích</Text>
              <Image
                style={styles.iconAddress}
                source={require('../../../assets/images/icons/icon_arrow_right.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contAddress}>
            <TouchableOpacity style={styles.btnAddress}>
              <Text style={styles.txtAddress}>Thông tin xuất hóa đơn</Text>
              <Image
                style={styles.iconAddress}
                source={require('../../../assets/images/icons/icon_arrow_right.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.txtend}>Yêu cầu chấm dứt tài khoản</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.save}>
        <Text style={styles.txtSave}>LƯU</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  txtPerInfo: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  contName: {
    height: 70,
    padding: 5,
    marginBottom: 20,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
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
  contAddress: {
    padding: 5,
    height: 70,
    marginBottom: 20,
    borderColor: '#ebebeb',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnAddress: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtAddress: {
    fontSize: 15,
  },
  iconAddress: {
    width: 20,
    height: 20,
    // position: 'absolute',
    right: 0,
  },
  contPhone: {
    height: 70,
    padding: 5,
    marginBottom: 20,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  contPhoneCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  txtPhonecheck: {
    fontSize: 15,
    width: '90%',
    justifyContent: 'center',
    color: '#000',
  },
  txtPhonecheck1: {
    fontSize: 12,
    width: '100%',
    justifyContent: 'center',
  },
  contintro: {
    height: 70,
    padding: 5,
    marginBottom: 20,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 20,
  },
  txtintro: {
    fontSize: 15,
    fontWeight: 'bold',
    // marginBottom: 10,
  },
  inputintro: {
    borderWidth: 0,
    borderBottomColor: 'transparent', // Đặt màu border thành trong suốt
    borderBottomWidth: 0, // Đặt độ rộng border là 0
    fontSize: 12,
  },
  txtMax: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 20,
  },
  container2: {
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  contMail: {
    height: 60,
    padding: 5,
    marginBottom: 10,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtMail: {
    fontSize: 15,
    marginLeft: 10,
  },
  btnMail: {
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
  txtConnect: {
    fontSize: 15,
    color: 'blue',
  },
  iconMain: {
    width: 20,
    height: 20,
    padding: 5,
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container3: {
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  txtend: {
    fontSize: 15,
    color: 'blue',
    // textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
    textDecorationLine: 'underline',
  },
  save: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCC00',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  txtSave: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
