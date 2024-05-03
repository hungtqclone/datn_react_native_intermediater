import AxiosInstance from '../components/helpers/Axiosintance';
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { CGDStyles } from '../styleSheets/CategoriesDetailstyles';
import {
  getDetailCategory,
  getProduct,
  searchByNameCategory,
} from './ScreenService';
import PostnewsStack from '../components/navigation/PostnewsTabnavigation';
import { TabView } from 'react-native-tab-view';
import Foryou from './News/Foryou';
import Shopstores from './DetailCategories/shopstores';
import { styleNumber, formatDate } from '../styleSheets/styleJS';
import { urlAPI } from '../components/helpers/urlAPI';
import { useMessage } from '../components/messages/MessageContext';
const data = [
  { id: 1, image: require('../../image/bannertet.jpg') },
  { id: 2, image: require('../../image/laptopbanner.jpg') },
];
const datatile = [
  {
    id: 1,
    title: 'Thu mua điện thoại',
    image: require('../../image/icon_banngay.jpg'),
  },
  // {id: 2, title: 'Nạp đồng tốt', image: require('../../image/icon_dongxu.jpg')},
  // {
  //   id: 3,
  //   title: 'Chợ tốt ưu đãi',
  //   image: require('../../image/icon_uudai.jpg'),
  // },

  { id: 5, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
  { id: 6, title: 'Tin đã lưu', image: require('../../image/icon_hearth.jpg') },
  {
    id: 7,
    title: 'Đăng tin cho tặng',
    image: require('../../image/icon_qua.jpg'),
  },
  {
    id: 8,
    title: 'Tiềm kiếm đã lưu',
    image: require('../../image/icon_savenew.jpg'),
  },
];
const CategoriesDetail = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [dataSearch, setDataSearch] = useState(undefined);
  const [categoriesDetail, setCategoriesDetail] = useState([]);
  const [idCategory, setIdCategory] = useState('658fb995b41f1dd5128fa9cf');
  const numColumns = Math.ceil(categoriesDetail.length / 2);
  const { newMessage } = useMessage();
  const { navigation, route } = props;

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleInputSearch = async text => {
    try {
      if (text) {
        const dataPostsSearch = await AxiosInstance().get(`/api/categories/search/${text}`);
        setDataSearch(dataPostsSearch.data);
        console.log('dataPostsSearch', dataSearch);
      } else {
        setDataSearch(undefined);
      }
    } catch (error) {
      console.log('error handle input search product.js: ', error);
    }

  };

  const renderSearch = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => nextScreenListProducts(item._id)} style={CGDStyles.contaitong} >
        <View style={CGDStyles.contaiCity}>
          <Text style={CGDStyles.txtCity}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <View style={CGDStyles.contaiBanner}>
        <Image
          style={{ width: widthCasual, height: '100%' }}
          source={item.image}></Image>
      </View>
    );
  };
  //id của category truyền qua
  // const { params } = route;
  // console.log("id", params._id);
  const widthCasual = Dimensions.get('window').width;
  // Banner slider

  //Danh mục Dưới banner slider
  const renderItemTitle = ({ item, index }) => {
    return (
      <View style={CGDStyles.contaiTitle}>
        <Image style={CGDStyles.imgTitle} source={item.image}></Image>
        <Text style={CGDStyles.txtTitle}>{item.title}</Text>
      </View>
    );
  };

  const nextScreenListProducts = idCategory => {
    navigation.navigate('product', { idCategory });
    setModalVisible(false);
  };

  // CategoryDetail
  const renderItemCategoryDetail = value => {
    const { item } = value;
    return (
      <TouchableOpacity
        style={CGDStyles.categoryBody}
        onPress={() => nextScreenListProducts(item._id)}>
        <Image style={CGDStyles.imgcategoy} source={{ uri: `${item.img}` }} />
        <Text style={CGDStyles.txtCategoty} numberOfLines={2}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  const ongetCategoryDetail = async () => {
    const detailCate = await getDetailCategory(idCategory);
    setCategoriesDetail(detailCate);
    // console.log("Danh muc nổi bật 60: >" + JSON.stringify(detailCate));
  };

  const nextScreenProductDetail = idPostNews => {
    console.log('next screen product detail with idPostNews = ', idPostNews);
    navigation.navigate('DetailProduct', { id_product: idPostNews });
  };
  const renderItemProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={CGDStyles.productBody}
        onPress={() => nextScreenProductDetail(item._id)}>
        <Image style={CGDStyles.imgproduct} source={{ uri: `${item.files[0]}` }} />
        <Text style={CGDStyles.txtnameproduct}>{item.title}</Text>
        <Text style={CGDStyles.txtdetail} numberOfLines={1}>
          {item.detail}
        </Text>
        <Text style={CGDStyles.txtprice}>{styleNumber(item.price)}</Text>

        <View style={CGDStyles.contaiicontimeaddress}>
          <Image
            style={CGDStyles.imgiconprofile}
            source={require('../../image/Phone.png')}
          />
          {/* <Text style={CGDStyles.txtTime} > - {item.created_AT} - </Text> */}
          <Text style={CGDStyles.txtAdress}>{item.location}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const ongetProducts = async () => {
    const products = await getProduct();
    setProducts(products);
    // console.log("Sản Phẩm :83 >" + JSON.stringify(products));
  };

  useEffect(() => {
    ongetCategoryDetail(), ongetProducts();
  }, [idCategory]);
  return (
    <View style={CGDStyles.body}>
      <View style={CGDStyles.containerse}>
        <TouchableOpacity
          style={CGDStyles.viewSearch}
          onPress={() => openModal()}>
          <Text style={CGDStyles.txpSearch}>Tìm kiếm</Text>
          <Image
            style={CGDStyles.imgSearch}
            source={require('../../image/search.png')}
          />
        </TouchableOpacity>
        <Image
          style={CGDStyles.icon}
          source={require('../assets/images/icons/icon_notification.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ChatNavigation')}>
          <View style={{ position: 'relative', }}>
            <Image
              style={CGDStyles.icon}
              source={require('../assets/images/icons/icon_chat.png')}
            />
            <Image style={{
              width: 15,
              height: 15,
              position: 'absolute',
              right: 4,
              top: -4,
              // backgroundColor: 'red',
              borderRadius: 50,
              display: newMessage ? 'flex' : 'none',
            }} source={require('../assets/images/icons/record-button.png')} />

          </View>

        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={CGDStyles.contaiBannerFla}>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            pagingEnabled={true}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <FlatList
            data={datatile}
            renderItem={renderItemTitle}
            horizontal={true}
            keyExtractor={item => item.id.toString()}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={CGDStyles.contaiCategory}>
          <Text style={CGDStyles.txtTitleCategory}>Danh mục nổi bật</Text>
          <ScrollView
            horizontal={true}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 20 }}>
            {categoriesDetail.length == 0 ? (
              <ActivityIndicator
                style={{ marginTop: 10, marginLeft: 170 }}
                size="large"
                color="#3498db"
              />
            ) : (
              <FlatList
                contentContainerStyle={{
                  alignSelf: 'flex-start',
                }}
                numColumns={numColumns}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={categoriesDetail}
                renderItem={renderItemCategoryDetail}
                scrollEnabled={false}
              />
            )}
          </ScrollView>
          <View style={CGDStyles.containerHot}>
            <View style={CGDStyles.contaiProduct}>
              <Text style={CGDStyles.txtTitleProduct}>Có gì hot hôm nay</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={renderItemProduct}
                keyExtractor={item => item._id}
                horizontal={true}
              />
              <Pressable style={CGDStyles.presableAll}>
                <Text style={CGDStyles.txtPreess}>Xem tất cả sản phẩm</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* <Shopstores /> */}
        <Foryou />
      </ScrollView>

      {modalVisible && <View style={CGDStyles.overlay} />}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={CGDStyles.centeredView}>
          <View style={CGDStyles.modalView}>
            <View style={CGDStyles.Container}>
              <View style={CGDStyles.contaiappbar}>
                <Pressable style={CGDStyles.pres} onPress={() => closeModal()}>
                  <Image source={require('../../image/close.png')} />
                </Pressable>
              </View>
              <View style={CGDStyles.viewSearch2} onPress={() => openModal()}>
                <TextInput
                  placeholder="Tìm kiếm"
                  style={CGDStyles.txpSearch2}
                  onChangeText={handleInputSearch}></TextInput>
                <Image
                  style={CGDStyles.imgSearch}
                  source={require('../../image/search.png')}
                />
              </View>
            </View>
            <View>
              <FlatList
                scrollEnabled={false}
                data={dataSearch}
                renderItem={renderSearch}
                horizontal={false}
                keyExtractor={item => item._id.toString()}
                showsHorizontalScrollIndicator={false}
                onEndReachedThreshold={0.1}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CategoriesDetail;
