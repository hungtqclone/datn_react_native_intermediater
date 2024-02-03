/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Image} from '@rneui/base';
import Modal from 'react-native-modal';
import {Dropdown} from 'react-native-element-dropdown';
const AccountSettingsScreen = props => {
  const {navigation} = props;
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState('');
  const [selectedWard, setSelectedWard] = useState(null);
  const [isWardSelected, setIsWardSelected] = useState(false);

  //hiện thông báo nếu chưa chọn địa chỉ
  const showAddressNotification = () => {
    if (!selectedCity || !selectedDistrict || !selectedWard) {
      Alert.alert(
        'Thông báo',
        'Vui lòng chọn tỉnh/thành, quận/huyện và phường/xã trước khi nhập địa chỉ cụ thể.',
      );
    }
  };

  //hiện và ẩn bottom sheet
  const toggleBottomSheet = () => {
    if (selectedCity) {
    }
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const fetchCities = async () => {
    try {
      const response = await fetch('https://provinces.open-api.vn/api/');
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };
  const fetchDistricts = async cityCode => {
    try {
      const response = await fetch(
        `https://provinces.open-api.vn/api/p/${cityCode}?depth=2`,
      );
      const data = await response.json();
      setDistricts(data.districts);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const fetchWards = async districtCode => {
    try {
      const wardResponse = await fetch(
        `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
      );
      const wardData = await wardResponse.json();
      setWards(wardData.wards);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };
  useEffect(() => {
    fetchCities();
  }, []);
  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheetContainer}>
      <View style={styles.contDialog}>
        <View style={styles.start}>
          {/* <TouchableOpacity
            style={styles.btnClosee}
            onPress={toggleBottomSheet}>
            <Image
              style={styles.iconClose}
              source={require('../../../assets/images/icons/icon_close.png')}
            />
          </TouchableOpacity> */}
          <Text style={styles.txtStart}>Địa chỉ</Text>
        </View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cities}
          search
          maxHeight={300}
          labelField="name" // Change "label" to "name"
          valueField="code" // Change "value" to "code"
          placeholder="Tỉnh/Thành phố*"
          searchPlaceholder="Tìm kiếm..."
          value={selectedCity} // Use selectedCity as the value
          onChange={city => {
            setSelectedCity(city);
            fetchDistricts(city.code);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={districts}
          search
          maxHeight={300}
          labelField="name" // Change "label" to "name"
          valueField="code" // Change "value" to "code"
          placeholder="Quận/huyện*"
          searchPlaceholder="Tìm kiếm..."
          value={selectedDistrict} // Use selectedCity as the value
          onChange={districts => {
            setSelectedDistrict(districts.code);
            fetchWards(districts.code);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={wards}
          search
          maxHeight={300}
          labelField="name"
          valueField="code"
          placeholder="Phường, xã, thị trấn"
          searchPlaceholder="Tìm kiếm..."
          value={selectedWard}
          onChange={ward => {
            setIsWardSelected(true);
            setSelectedWard(ward);
          }}
        />

        <View style={styles.contAddres}>
          <TouchableOpacity onPress={showAddressNotification}>
            <TextInput
              editable={isWardSelected}
              style={styles.inputWard}
              placeholder="Địa chỉ cụ thể"
              value={ward}
              onChangeText={text => setWard(text)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={toggleBottomSheet}
        style={styles.bottomSheetCloseButton}>
        <Text style={styles.bottomSheetCloseButtonText}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
//dđ
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
            <TouchableOpacity
              onPress={toggleBottomSheet}
              style={styles.btnAddress}>
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
      <Modal
        isVisible={isBottomSheetVisible}
        onBackdropPress={toggleBottomSheet}
        style={styles.bottomSheet}>
        {renderBottomSheetContent()}
      </Modal>
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
  bottomSheet: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheetContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomSheetCloseButton: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'silver',
    padding: 10,
    borderRadius: 5,
  },
  bottomSheetCloseButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  start: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtStart: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    width: '70%',
    padding: 5,
    textAlign: 'center',
  },
  iconClose: {
    width: 20,
    height: 20,
  },
  btnClosee: {
    padding: 5,
    width: '10%',
  },
  contDialog: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  contCity: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
  },
  txtCity: {
    fontSize: 15,
    marginLeft: 10,
  },
  icondown: {
    width: 20,
    height: 20,
  },
  txt: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contdistrict: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  contward: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  inputWard: {
    borderWidth: 0,
    borderBottomColor: 'transparent', // Đặt màu border thành trong suốt
    borderBottomWidth: 0, // Đặt độ rộng border là 0
    fontSize: 15,
    // width: '90%',
  },
  contAddres: {
    width: '100%',
    height: 60,
    padding: 5,
    marginBottom: 20,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 20,
  },
  dropdown: {
    width: '100%',
    margin: 16,
    // height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    // height: 40,
    fontSize: 16,
  },
});
