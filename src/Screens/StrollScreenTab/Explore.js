/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { getProduct, savePost } from '../ScreenService';
import { UserContext } from '../../components/users/UserContext';
import { urlAPI } from '../../components/helpers/urlAPI';
const Explore = (props) => {
  const MAX_HEIGHT = 100;
  //lấy thông tin user
  const { user } = useContext(UserContext);
  const userId = user._id;
  const { navigation } = props;
  //list và hiện list ảnh sản phẩm
  // hàm hiện thị nút xem thêm
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCollapseButton, setShowCollapseButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState();
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const [products, setProducts] = useState([]);
  const checkContentHeight = event => {
    const { height } = event.nativeEvent.layout;

    if (height > MAX_HEIGHT) {
      setShowCollapseButton(true);
    } else {
      setShowCollapseButton(false);
    }
  };
  const ongetProducts = async () => {
    try {
      setIsLoading(true); // Set loading state to true before making the request
      const products = await getProduct();
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after the request is complete
    }
  };

  const onSavePost = async (postId) => {

    try {
      console.log('User ID:', userId);
      console.log('Post ID:', postId);
      const response = await savePost(userId, postId);
      //console.log('Save post response:', response);
      alert('Lưu bài viết thành công!');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };



  const handleCallPress = (phoneNumber) => {
    // setPhoneNumber(item.phone)
    // console.log(phoneNumber);
    // Kiểm tra nếu thiết bị hỗ trợ mở cuộc gọi
    if (Linking.canOpenURL(`tel:${phoneNumber}`)) {

      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      console.log('Không thể thực hiện cuộc gọi trên thiết bị này.');
    }
  };
  useEffect(() => {
    ongetProducts();
  }, []);
  const renderItem = ({ item, index }) => (
    <View key={item.id} style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../assets/images/icons/man-person-icon.png')}
        />
        <View>
          <View style={styles.nameshop}>
            <Text style={styles.textnameshop}>{item.userid.name}</Text>
            <Image
              style={styles.iconbag}
              source={require('../../assets/images/icons/icon_bag.png')}
            />
          </View>
          <View style={styles.timecont}>
            <Text> {item.created_AT}</Text>
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
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
        {/* Danh sách Gridview */}
        <FlatList
          scrollEnabled={false}
          //  data={item.files}
          data={item.files.slice(0, 4)} // Chỉ hiển thị 4 ảnh đầu tiên
          renderItem={({ item, index }) => (
            // console.log('Constructed Image URL:', `${urlServer}${item}`),
            <View key={item.toString()} style={styles.gridItem}>
              <Image
                source={{ uri: `${item}` }}
                style={styles.image}
              />
              {/* {index === 3 && (
                <TouchableOpacity
                  style={styles.overlay}
                  onPress={() => console.log('+2')}>
                  <Text style={styles.overlayText}>
                    {remainingItemCount > 0 ? `+${remainingItemCount}` : ''}
                  </Text>
                </TouchableOpacity>
              )} */}
            </View>
          )}
          keyExtractor={index => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.nameprice}
          onPress={() => navigation.navigate('DetailProduct', { id_product: item._id })}
        >
          <View style={styles.cont_nameprice}>
            <Text style={styles.textnameprice}> {item.title} </Text>
            <Text style={styles.textprice}>{item.price} đ</Text>
          </View>
          <Image
            style={styles.icon_arrow_right}
            source={require('../../assets/images/icons/icon_arrow_right.png')}
          />
        </TouchableOpacity>
        <View style={styles.infoPro} onLayout={checkContentHeight}>
          {/* <Text style={styles.textInfoPro}>{renderContent()}</Text> */}
          <Text style={styles.textInfoPro}>{item.detail}</Text>
          <TouchableOpacity style={styles.btncall} onPress={() => handleCallPress(item.userid.phone)}>
            <Text style={styles.textcall}>Liên hệ ngay: </Text>
            <Text style={styles.textcall}>{item.userid.phone}</Text>
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
          <TouchableOpacity
            onPress={() => onSavePost(item._id)}
          >
            <Text style={styles.txtBtnCall}>Lưu tin</Text>
          </TouchableOpacity>
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
  );
  return (
    <View style={styles.body}>
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator
            style={styles.loadingIcon}
            size="large"
            color="#3498db"
          />
        ) : (
          <>
            <FlatList
              scrollEnabled={false}
              data={products}
              renderItem={renderItem}
              keyExtractor={item => item._id.toString()}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal={false}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  //phần body tổng
  body: {
    flex: 1,
    backgroundColor: '#FDF5E6',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    height: 300,
    // borderColor: 'black',
    // borderWidth: 1,
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
  loadingIcon: {
    marginTop: 20,
  },
});

export default Explore;
