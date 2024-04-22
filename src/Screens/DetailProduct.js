/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Linking,
  ActivityIndicator
} from 'react-native';
import React, { useState, useEffect, useContext, Component } from 'react';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { getPostNewsByCategory, getProductById } from './ScreenService';
import { getPostNewsByUserId, savePost } from './ScreenService';
import Swiper from 'react-native-swiper';
import { UserContext } from '../components/users/UserContext';
import SweetAlert from 'react-native-sweet-alert';
import { useNavigation } from '@react-navigation/native';
import { urlAPI } from '../components/helpers/urlAPI';
const DetailProduct = (props) => {
  //lấy thông tin user
  const { user } = useContext(UserContext);
  const userId = user._id;
  //navigation
  const { rating, totalReviews, navigation } = props;
  // const navigation = useNavigation();
  //lấy id truyền qua từ màn hình trước
  const route = useRoute();
  const { id_product } = route.params;
  const [products, setProducts] = useState([]);
  const [prductByUser, setPrductByUser] = useState([]);
  const [proByCaterory, setProByCaterory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProByUser, setIsLoadingProByUser] = useState(true);
  const [isLoadingProByCategory, setIsLoadingProByCategory] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [title, setTitle] = useState('');
  const data = [
    { id: '1', question: 'Món hàng này còn không?' },
    { id: '2', question: 'Bạn có ship hàng không?' },
    { id: '3', question: 'Sản phẩm còn bảo hành không?' },
    { id: '4', question: 'Sản phẩm đã qua sửa chữa chưa?' },
    { id: '5', question: 'Có phụ kiện đi kèm theo sản phẩm?' },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.question}</Text>
    </View>
  );

  const reLoadScreen = async (id) => {
    setIsLoading(true);
    const productData = await getProductById(id);
    setProducts(productData);
    setPhoneNumber(productData.userid.phone);
    setIsLoading(false);

  };

  const handleCallPress = (phoneNumber) => {
    // Kiểm tra nếu thiết bị hỗ trợ mở cuộc gọi
    if (Linking.canOpenURL(`tel:${phoneNumber}`)) {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      console.log('Không thể thực hiện cuộc gọi trên thiết bị này.');
    }
  };
  const handleSMSPress = (phoneNumber) => {
    // Kiểm tra nếu thiết bị hỗ trợ mở tin nhắn
    if (Linking.canOpenURL(`sms:${phoneNumber}`)) {
      Linking.openURL(`sms:${phoneNumber}`);
    } else {
      console.log('Không thể mở tin nhắn trên thiết bị này.');
    }
  };
  const onSavePost = async (postId) => {
    try {
      // console.log('User ID:', userId);
      // console.log('Post ID:', postId);
      const response = await savePost(userId, postId);
      console.log('Save post response:', response);
      // Hiển thị thông báo sau khi lưu thành công
      alert('Lưu bài viết thành công!');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductById(id_product);
        setProducts(productData);
        setPhoneNumber(productData.userid.phone);
        setIsLoading(false);
        setTitle(productData.title);

        if (productData && productData.userid) {
          const userPosts = await getPostNewsByUserId(productData.userid._id);
          setPrductByUser(userPosts.posts);
          setIsLoadingProByUser(false);
        }

        if (productData && productData.idCategory) {
          const categoryPosts = await getPostNewsByCategory(productData.idCategory._id);
          setProByCaterory(categoryPosts);
          setIsLoadingProByCategory(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  }, []);


  return (
    <View style={styles.body}>
      <View style={styles.appbar}>
        <TouchableOpacity
          style={styles.imgBack}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/icons/icon_back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTitle}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.imgShare}
          onPress={() => console.log('share')}>
          <Image
            source={require('../assets/images/icons/iconShare.png')}
            style={styles.icon}
          />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.imgHeart}
          onPress={() => console.log('heart')}>
          <Image
            source={require('../assets/images/icons/heart2.png')}
            style={styles.icon}
          />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.bacham}
          onPress={() => console.log('bacham')}>
          <Image
            source={require('../assets/images/icons/icon_3dot.png')}
            style={styles.icon}
          />
        </TouchableOpacity> */}
      </View>
      {isLoading ? (
        <ActivityIndicator
          style={styles.loadingIcon}
          size="large"
          color="#3498db"
        />
      ) : (
        <>
          <ScrollView >
            {/* <View style={styles.header}>
              <Image
                //source={require('../assets/images/imgProduct.png')}
                source={{ uri: `${urlAPI}${products.files[0]}` }}
                style={styles.product}
              />
            </View> */}
            <View style={styles.containerslide}>
              <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} autoplayTimeout={2}>
                {products.files.map((file, index) => (
                  <View style={styles.slide} key={index}>
                    <Image
                      source={{ uri: `${file}` }}
                      style={styles.image}
                    />
                  </View>
                ))}
              </Swiper>
            </View>
            <View style={styles.txtHeader}>
              <View style={styles.nameProduct}>
                <Text style={styles.txtNameProduct}> {products.title} </Text>
              </View>
              <View style={styles.price}>
                <View>
                  <Text style={styles.textprice}>{products.price + ' đ'} </Text>
                  <Text style={styles.timeIn}>  {products.created_AT}</Text>
                </View>
                <TouchableOpacity style={styles.containerPrice}
                  onPress={() => onSavePost(products._id)}
                >
                  <Image
                    style={styles.iconLike}
                    source={require('../assets/images/icons/heart2.png')}
                  />
                  <Text style={styles.txtLuutin}>Lưu tin</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.infoNguoiban}>
              <View style={styles.center}>
                <View style={styles.info}>
                  <View style={styles.name}>
                    <View style={styles.infoAv}>
                      <Image
                        source={require('../assets/images/avatarDetail.png')}
                        style={styles.avt}
                      />
                      <View style={styles.contName}>
                        <Text style={styles.nameNguoiban}>  {products.userid.name} </Text>
                        <View style={styles.reviewContainer}>
                          <Image
                            source={require('../assets/images/icons/icon_stars.png')}
                            style={styles.iconStart}
                          />
                          <Image
                            source={require('../assets/images/icons/icon_stars.png')}
                            style={styles.iconStart}
                          />
                          <Image
                            source={require('../assets/images/icons/icon_stars.png')}
                            style={styles.iconStart}
                          />
                          <Image
                            source={require('../assets/images/icons/icon_stars.png')}
                            style={styles.iconStart}
                          />
                          <Image
                            source={require('../assets/images/icons/icon_stars.png')}
                            style={styles.iconStart}
                          />
                          <Text>4.9</Text>
                          {/* <Text style={styles.reviewText}>{`(${totalReviews})`}</Text> */}
                        </View>
                        <View style={styles.dotOnl}>
                          <View style={styles.dot} />
                          <Text style={styles.txtOnl}>Đang hoạt động</Text>
                        </View>
                      </View>
                    </View>
                    {/* <TouchableOpacity style={styles.containerXemtrang}>
                      <Text style={styles.txtXemtrang}>Xem trang</Text>
                    </TouchableOpacity> */}
                  </View>
                </View>
                {/* <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.followButton}>
                 
                    <Image
                      source={require('../assets/images/icons/icon_add.png')}
                      style={styles.icons}
                    />
                    <Text style={styles.folowtext}>Theo dõi</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.viewStoreButton}>
                 
                    <Image
                      source={require('../assets/images/icons/icon_store.png')}
                      style={styles.icons}
                    />
                    <Text style={styles.viewtext}>Xem cửa</Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>

            <View style={styles.decriptionPr}>
              <View style={styles.contDesc}>
                <Text style={styles.titleDecs}>Mô tả</Text>
              </View>
              <View style={styles.contentDecs}>
                <Text>   {products.detail}
                  {products.properties}
                </Text>
              </View>
            </View>
            <View style={styles.infoProduct}>
              <View style={styles.contTitleInfo}>
                <Text>Thông tin sản phẩm</Text>
              </View>
              <View style={styles.detailInfoProduct}>
                <View style={styles.col1}>
                  <View style={styles.row}>
                    <Image
                      source={require('../assets/images/icons/iconTag.png')}
                      style={styles.image1}
                    />
                    <Text style={styles.textdetailInfoProduct}>Hãng:</Text>
                    <Text style={styles.textdetailInfoProduct}>Apple</Text>
                  </View>
                  <View style={styles.row}>
                    <Image
                      source={require('../assets/images/icons/iconTag2.png')}
                      style={styles.image1}
                    />
                    <Text style={styles.textdetailInfoProduct}>Dòng máy:</Text>
                    <Text style={styles.textdetailInfoProduct}>Iphone 6</Text>
                  </View>
                  <View style={styles.row}>
                    <Image
                      source={require('../assets/images/icons/iconProtect.png')}
                      style={styles.image1}
                    />
                    <Text style={styles.textdetailInfoProduct}>
                      Tình trạng bảo hành: Còn bảo hành
                    </Text>
                    <Text style={styles.textdetailInfoProduct}></Text>
                  </View>
                </View>
                <View style={styles.col2}>
                  <View style={styles.row}>
                    <Image
                      source={require('../assets/images/icons/iconColor.png')}
                      style={styles.image1}
                    />
                    <Text style={styles.textdetailInfoProduct}>Màu sắc:</Text>
                    <Text style={styles.textdetailInfoProduct}>Vàng</Text>
                  </View>
                  <View style={styles.row}>
                    <Image
                      source={require('../assets/images/icons/iconPaper.png')}
                      style={styles.image1}
                    />
                    <Text style={styles.textdetailInfoProduct}>
                      Tình trạng: Đã sử dụng (Chưa sửa chữa)
                    </Text>
                    <Text style={styles.textdetailInfoProduct}></Text>
                  </View>
                  <View style={styles.row}>
                    <Image
                      source={require('../assets/images/icons/iconData.png')}
                      style={styles.image1}
                    />
                    <Text style={styles.textdetailInfoProduct}>Dung lượng:</Text>
                    <Text style={styles.textdetailInfoProduct}>64 GB</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* <View>
              <Text style={styles.ask}>Hỏi người bán qua chat</Text>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View> */}
            <View>
              <Text style={styles.ask}>Khu vực</Text>
              <Text style={styles.adress}>
                {products.location}
              </Text>
            </View>
            {/* <View style={styles.rp}>
              <TouchableOpacity style={styles.rpbutton}>
                <Text style={styles.rptext}>Báo tin đã bán</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rpbutton}>
                <Text style={styles.rptext}>Báo tin không hợp lệ</Text>
              </TouchableOpacity>
            </View> */}
            {/* <TouchableOpacity style={styles.pushbt}>
              <Text style={styles.pushtext}>Đăng nhanh - Bán gọn</Text>
            </TouchableOpacity> */}
            {/* <View style={styles.share}>
              <Text style={styles.sharetext}>Chia sẽ tin đăng này cho bạn bè</Text>
              <View style={styles.listIcons}>
                <TouchableOpacity style={styles.iconimg}>
                  <Image
                    source={require('../assets/images/icons/icon_fb.png')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconimg}>
                  <Image
                    source={require('../assets/images/icons/icon_zalo.png')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconimg}>
                  <Image
                    source={require('../assets/images/icons/icon_mess.png')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconimg}>
                  <Image
                    source={require('../assets/images/icons/icon_whatapp.png')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconimg}>
                  <Image
                    source={require('../assets/images/icons/icon_sms.jpg')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconimg}>
                  <Image
                    source={require('../assets/images/icons/icon_link.jpg')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
              </View>
            </View> */}
            <View style={styles.newdiff1}>
              <Text style={styles.diferrence} numberOfLines={1} ellipsizeMode="tail">
                Tin rao khác của {products.userid.name}
              </Text>
              <TouchableOpacity style={styles.btnviewall}>
                <Text style={styles.textviewall}>Xem tất cả</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.contpro}>
              <FlatList
                data={prductByUser}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.horizontalItem}
                    onPress={() => reLoadScreen(item._id)}
                  >
                    <Image
                      // source={item.files[0]} 
                      source={{ uri: `${item.files[0]}` }}
                      style={styles.horizontalImage} />
                    <Text style={styles.tagpro}>Thanh toán đảm bảo</Text>
                    <View style={styles.horizontalTextContainer}>
                      <Text style={styles.horizontalname} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                      <Text style={styles.horizontalrice} numberOfLines={1} ellipsizeMode="tail">{item.price} đ </Text>
                      <Text style={styles.horizontaltime}>{item.created_AT}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={styles.newdiff}>
              <Text style={styles.diferrence}>Tin đăng tương tự</Text>
              <TouchableOpacity style={styles.btnviewall}>
                <Text style={styles.textviewall}>Xem tất cả</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.contpro}>
              <FlatList
                data={proByCaterory}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.horizontalItem}
                    onPress={() => reLoadScreen(item._id)}
                  >
                    <Image
                      source={{ uri: `${item.files[0]}` }}
                      style={styles.horizontalImage} />
                    <Image
                      source={require('../assets/images/icons/like.png')}
                      style={styles.icontim}
                    />
                    <Text style={styles.tagpro}>Thanh toán đảm bảo</Text>
                    <View style={styles.horizontalTextContainer}>
                      <Text style={styles.horizontalname} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                      <Text style={styles.horizontalrice} numberOfLines={1} ellipsizeMode="tail">{item.price} đ </Text>
                      <Text style={styles.horizontaltime}>{item.created_AT}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

          </ScrollView>
          <View style={[styles.containerbottomtab, { display: products.userid._id == userId ? 'none' : 'flex' }]}>
            <TouchableOpacity
              style={styles.bottomtabcall}
              onPress={() => handleCallPress(phoneNumber)}>
              <Image
                source={require('../assets/images/icons/phone-call.png')}
                style={styles.icons}
              />
              <Text style={styles.textcall1}>Gọi điện</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomtab}
              onPress={() => handleSMSPress(phoneNumber)}>
              <Image
                source={require('../assets/images/icons/icon_sms.jpg')}
                style={styles.iconc}
              />
              <Text style={styles.textcall}>Nhắn tin</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.bottomtab2}
              onPress={() => navigation.navigate('Chat', { data: products.userid })}>
              <Image
                source={require('../assets/images/icons/icon_chat.png')}
                style={styles.iconc}
              />
              <Text style={styles.textcall}>Chat</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={styles.bottomtabmua}
              onPress={() => console.log('Buy pressed')}>
              <Text style={styles.textmuangay}>Mua ngay</Text>
            </TouchableOpacity> */}
          </View>
        </>
      )}

    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  imgBack: {
    top: 20,
    backgroundColor: '#fff',
    left: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  imgHeart: {
    position: 'absolute',
    right: 70,
    top: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bacham: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgShare: {
    position: 'absolute',
    right: 80,
    top: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameProduct: {
    // paddingHorizontal: 10,
    borderRadius: 10,
    // backgroundColor: '#F1F2F3',

  },
  txtNameProduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  priceAndSave: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  // price: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   flex: 1,
  //   borderColor: 'red',
  //   borderWidth: 1,
  // },
  saveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  saveText: {
    fontSize: 14,
  },

  catelory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoNguoiban: {
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',

  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    // backgroundColor: '#F1F2F3',

    // padding: 10,
  },
  textprice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    padding: 5,

  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
  txtLuutin: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
  iconPrice: {
    width: 5,
    height: 5,
    padding: 10,
  },
  timeIn: {
    fontSize: 8,
    color: 'black',

  },
  dungluong: {
    padding: 5,
    backgroundColor: '#FF5C01',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  baohanh: {
    padding: 5,
    backgroundColor: '#FFD428',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  game: {
    padding: 5,
    backgroundColor: '#68C0FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  phukien: {
    padding: 5,
    backgroundColor: '#C1DBE3',
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tragop: {
    padding: 5,
    backgroundColor: '#5AED69',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  cauhinh: {
    padding: 5,
    backgroundColor: '#73EEDC',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  dactinh: {
    padding: 5,
    backgroundColor: '#F1F2F3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  name: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',

  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 50,
    marginHorizontal: 5,
  },
  txtOnl: {
    fontSize: 13,
  },
  containerXemtrang: {
    padding: 5,
    borderRadius: 15,
    borderColor: 'orange',
    borderWidth: 1,
  },
  dotOnl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtXemtrang: {
    fontSize: 8,
    color: 'orange',
  },
  botDetailNGuoiban: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contBanchuyen: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contDanhgia: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contPhanhoi: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  gachDung: {
    width: 1,
    height: 50,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  decriptionPr: {
    marginBottom: 10,
  },
  contDesc: {
    marginBottom: 10,
    marginLeft: 10,
  },
  titleDecs: {
    fontSize: 15,
    fontWeight: 'normal', // Change 'Nomal' to 'normal'
    backgroundColor: '#FFEB4D',
    width: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  contentDecs: {
    padding: 10,
    fontSize: 12,
  },
  infoProduct: {
    marginBottom: 10,
    marginLeft: 10,
  },
  detailInfoProduct: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F1F2F3',
  },
  col1: {
    padding: 10,
    flexDirection: 'column',
    // alignItems: 'center',
    width: '50%',
  },
  col2: {
    padding: 10,
    flexDirection: 'column',
    // alignItems: 'center',
    width: '50%',
  },
  contTitleInfo: {
    marginBottom: 10,
    backgroundColor: '#FFEB4D',
    width: 200,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  textdetailInfoProduct: {
    fontSize: 8,
    fontWeight: 'normal',
    margin: 5,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  info: {
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    padding: 20,
    borderTopWidth: 0.5, // Set the border width
    borderTopColor: '#ccc',
    marginLeft: 5,
    marginRight: 5,

  },
  infoAv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avt: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  product: {
    width: '100%',
    height: 300,
  },
  center: {
    width: '100%',
    alignItems: 'center',
    borderColor: 'black',

  },
  iconLike: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  appbar: {
    backgroundColor: '#FFCC00',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    backgroundColor: '#FFCC00',
    width: 25,
    height: 25,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStart: {
    width: 20,
    height: 20,
    marginRight: 5,
    // backgroundColor: '#FFCC00',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  followButton: {
    marginHorizontal: 20,
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  viewStoreButton: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  // container: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   marginTop: 20,
  // },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  // buttonText: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  bottomtab: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    flex: 1,
  },
  bottomtab2: {
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    flex: 1,
  },
  bottomtabcall: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#33CC33',
    padding: 10,
    borderRadius: 5,
  },
  containerbottomtab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: 15, // Điều chỉnh giá trị padding theo nhu cầu của bạn
    backgroundColor: '#FFF', // Màu nền của container

  },
  bottomtabmua: {
    flex: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    width: 150,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textcall: {
    color: 'black',
    fontSize: 12,
    paddingBottom: 7,
  },
  textcall1: {
    color: 'white',
    fontSize: 12,
    paddingBottom: 7,
  },
  textmuangay: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  viewtext: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  folowtext: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ask: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  item: {
    padding: 5,
    borderRadius: 10,
    borderColor: 'orange',
    borderWidth: 0.5,
    margin: 5,
  },
  adress: {
    fontSize: 12,
    fontWeight: 'normal',
    margin: 10,
    color: 'black',
  },
  rp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    padding: 10,
  },
  rpbutton: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  rptext: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
  pushbt: {
    backgroundColor: '#FFCC00',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  pushtext: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sharetext: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    color: 'gray',
  },
  iconImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  listIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    padding: 10,
  },
  newdiff1: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#C0C0C0',
    borderTopWidth: 5,
    padding: 10,
  },
  newdiff: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  diferrence: {
    width: '60%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  contpro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 5,
  },
  btnviewall: {
    // width: '40%',
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textviewall: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue',
  },
  horizontalItem: {
    width: 100,
    flexDirection: 'column',
    padding: 5,

  },
  horizontalImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
    position: 'relative',
  },
  horizontalTextContainer: {
    flex: 1,
  },
  horizontalname: {
    fontSize: 12,
    marginBottom: 5,
    color: 'black',
  },
  horizontalrice: {
    fontSize: 12,
    marginBottom: 5,
    color: 'red',
  },
  horizontaltime: {
    fontSize: 8,
    marginBottom: 5,
    color: 'gray',
  },
  icontim: {
    width: 10,
    height: 10,
    position: 'absolute',
    bottom: 90,
    right: 15,
  },
  tagpro: {
    position: 'absolute',
    top: 76,
    left: 5,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 1,
    fontSize: 5,
    fontWeight: 'bold',
    color: 'white',
    width: 50,
  },
  iconc: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  icons: {
    width: 20,
    height: 20,
    margin: 5,
  },
  nameNguoiban: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  txtHeader: {
    padding: 10,
    alignContent: 'center',
    textAlign: 'left',
    // borderColor: 'black',
    // borderWidth: 0.5,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  image1: {
    // width: '100%',
    // height: '100%',
  },
  containerslide: {
    width: '100%',
    height: 300,
  },
  title: {
    // width: '40%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',

  },
  btnTitle: {
    width: "50%",
    position: 'absolute',
    left: 50,
  },

});
