/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Linking,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import Modal from 'react-native-modal';

const MAX_ADDRESS_LENGTH = 30;
const MAX_HEIGHT = 100;
const Explore = () => {
  //list và hiện list ảnh sản phẩm

  const data = [
    {id: '1', image: require('../../assets/images/imgProduct.png')},
    {id: '2', image: require('../../assets/images/imgProduct.png')},
    {id: '3', image: require('../../assets/images/imgProduct.png')},
    {id: '4', image: require('../../assets/images/imgProduct.png')},
    {id: '5', image: require('../../assets/images/imgProduct.png')},
    {id: '6', image: require('../../assets/images/imgProduct.png')},
    // Add more images as needed
  ];
  const visibleData = data ? data.slice(0, 4) : [];
  const remainingItemCount = Math.max(0, data.length - 4);
  const renderItem = ({item}) => (
    <View style={styles.gridItem}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  // hàm hiện thị nút xem thêm
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCollapseButton, setShowCollapseButton] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const checkContentHeight = event => {
    const {height} = event.nativeEvent.layout;

    if (height > MAX_HEIGHT) {
      setShowCollapseButton(true);
    } else {
      setShowCollapseButton(false);
    }
  };

  const renderContent = () => {
    const content = `Xe nhà đang sử dụng, muốn lên 7 chỗ nên cần sang lại cho chủ mới. Màu trắng nội thất đỏ Đăng kiểm còn tới 07/2025 Xe 1 chủ mua từ đầu. Xem xe tại nhà.`;

    if (isExpanded) {
      return content;
    } else {
      return `${content.slice(0, MAX_HEIGHT)}...`;
    }
  };

  // gọi điện
  const phoneNumber = '0123456789';

  const handleCallPress = () => {
    // Kiểm tra nếu thiết bị hỗ trợ mở cuộc gọi
    if (Linking.canOpenURL(`tel:${phoneNumber}`)) {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      console.log('Không thể thực hiện cuộc gọi trên thiết bị này.');
    }
  };
  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.img}
              source={require('../../assets/images/icons/man-person-icon.png')}
            />
            <View>
              <View style={styles.nameshop}>
                <Text style={styles.textnameshop}>Auto 380</Text>
                <Image
                  style={styles.iconbag}
                  source={require('../../assets/images/icons/icon_bag.png')}
                />
              </View>
              <View style={styles.timecont}>
                <Text>5 giờ trước</Text>
                <View style={styles.circle} />
                <Text>5km</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => console.log('theo dõi')}>
              <Text style={styles.txtBtn}>Theo dõi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bodycont}>
            {/* Định vị hiện tại ở góc trên bên trái */}
            <View style={styles.currentLocation} zIndex={2}>
              <Image
                source={require('../../assets/images/icons/icon_address.png')}
                style={styles.imgaddress}
              />
              <Text style={styles.locationText}>Quận ABC, TP XYZ</Text>
            </View>
            {/* Danh sách Gridview */}
            <FlatList
              scrollEnabled={false}
              data={visibleData}
              renderItem={({item, index}) => (
                <View style={styles.gridItem}>
                  <Image source={item.image} style={styles.image} />
                  {index === 3 && (
                    <TouchableOpacity
                      style={styles.overlay}
                      onPress={() => console.log('+2')}>
                      <Text style={styles.overlayText}>
                        {remainingItemCount > 0 ? `+${remainingItemCount}` : ''}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
            <TouchableOpacity style={styles.nameprice}>
              <View style={styles.cont_nameprice}>
                <Text style={styles.textnameprice}>CHEVROLET AVEO 2017.</Text>
                <Text style={styles.textprice}>275.000.000 đ</Text>
              </View>
              <Image
                style={styles.icon_arrow_right}
                source={require('../../assets/images/icons/icon_arrow_right.png')}
              />
            </TouchableOpacity>
            <View style={styles.infoPro} onLayout={checkContentHeight}>
              <Text style={styles.textInfoPro}>{renderContent()}</Text>
              <TouchableOpacity
                style={styles.btncall}
                onPress={handleCallPress}>
                <Text style={styles.textcall}>Liên hệ ngay: </Text>
                <Text style={styles.textcall}>{phoneNumber}</Text>
              </TouchableOpacity>
              {showCollapseButton && (
                <TouchableOpacity onPress={toggleExpand}>
                  <Text style={styles.readMoreText}>
                    {isExpanded ? 'Thu gọn' : 'Thêm'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.btncontact}>
            <TouchableOpacity style={styles.btnCall}>
              <Image
                style={styles.iconCall}
                source={require('../../assets/images/icons/heart.png')}
              />
              <Text style={styles.txtBtnCall}>Lưu tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCall}>
              <Image
                style={styles.iconCall}
                source={require('../../assets/images/icons/icon_chat.png')}
              />
              <Text style={styles.txtBtnCall}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCall}>
              <Image
                style={styles.iconCall}
                source={require('../../assets/images/icons/iconShare.png')}
              />
              <Text style={styles.txtBtnCall}>Chia sẻ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  //phần body tổng
  body: {
    flex: 1,
    backgroundColor: '#FDF5E6',
  },
  //phần địa chỉ
  contAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  imgaddress: {
    width: 50,
    height: 50,
  },
  icon_arrow_right: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  //phần header cont
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  nameshop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  textnameshop: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  circle: {
    marginHorizontal: 5,
    width: 6,
    height: 6,
    borderRadius: 5, // Chỉnh giá trị để tạo hình chấm tròn
    backgroundColor: 'grey', // Màu sắc của chấm tròn
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  timecont: {
    flexDirection: 'row',
    marginLeft: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#FFCC00',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
    width: 150,
    alignContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },
  iconbag: {
    width: 20,
    height: 20,
  },
  //phần body cont
  bodycont: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 300,
    height: 200,
  },
  currentLocation: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 5,
  },
  iconAddress: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  remainingCount: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 15,
    elevation: 2,
  },
  remainingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Màu nền overlay và độ trong suốt
  },
  overlayText: {
    color: '#fff', // Màu chữ trắng
    fontSize: 24,
    fontWeight: 'bold',
  },
  //phần tên và giá
  nameprice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFFAF0',
    marginHorizontal: 10,
    alignContent: 'space-between',
    alignItems: 'center',
  },
  textnameprice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textprice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  cont_nameprice: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  //phần thông tin sản phẩm
  infoPro: {
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  textInfoPro: {
    fontSize: 15,
    textAlign: 'left',
  },
  readMoreText: {
    color: 'grey', // Màu sắc của nút "Xem thêm" hoặc "Thu gọn"
    fontWeight: 'bold',
  },
  textcall: {
    fontSize: 15,

    color: 'blue',
  },
  btncall: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  // phần nút gọi điện và chat
  btncontact: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  btnCall: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  txtBtnCall: {
    color: 'black',
  },
  iconCall: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default Explore;
