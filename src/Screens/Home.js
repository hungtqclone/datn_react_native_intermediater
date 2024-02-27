/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {homeStyles} from '../styleSheets/HomeStyles';
import {getCategory, getProduct} from './ScreenService';
import CategoriesDetail from './CategoriesDetail';

const datatile = [
  {
    id: 1,
    title: 'Thu mua điện thoại',
    image: require('../../image/icon_banngay.jpg'),
  },
  {id: 2, title: 'Nạp đồng tốt', image: require('../../image/icon_dongxu.jpg')},
  {
    id: 3,
    title: 'Chợ tốt ưu đãi',
    image: require('../../image/icon_uudai.jpg'),
  },
  {id: 4, title: 'Thu mua ô tô', image: require('../../image/icon_car.jpg')},
  {id: 5, title: 'Gói pro', image: require('../../image/icon_pro.jpg')},
  {id: 6, title: 'Tin đã lưu', image: require('../../image/icon_hearth.jpg')},
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
  {
    id: 9,
    title: 'Tiềm kiếm đã lưu',
    image: require('../../image/icon_savenew.jpg'),
  },
  {
    id: 10,
    title: 'Tiềm kiếm đã lưu',
    image: require('../../image/icon_savenew.jpg'),
  },
  {
    id: 11,
    title: 'Tiềm kiếm đã lưu',
    image: require('../../image/icon_savenew.jpg'),
  },
];

const Home = props => {
  const {navigation} = props;
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const widthCasual = Dimensions.get('window').width;
  const numColumns = Math.ceil(datatile.length / 2);
  const data = [
    {id: 1, image: require('../../image/Sinhvien.png')},
    {id: 2, image: require('../../image/bannerchotot.png')},
  ];

  urlApi = 'http://datnapi.vercel.app/';

  const handToCategoriesDetail = _id => {
    if (_id === '658fbcbdb41f1dd5128fa9e4') {
      return navigation.navigate('realestate', {_id});
    }
    if (_id === '65ae8089d30801351cc0dea9') {
      return navigation.navigate('vehicles', {_id});
    }
    if (_id === '658fbb7db41f1dd5128fa9da') {
      return navigation.navigate('jobber', {_id});
    }
    navigation.navigate('CategoriesDetail', {_id});
  };

  // Banner slider
  const renderItem = ({item, index}) => {
    return (
      <View style={homeStyles.contaiBanner}>
        <Image
          style={{width: widthCasual, height: '100%'}}
          source={item.image}></Image>
      </View>
    );
  };
  //Danh mục Dưới banner slider
  const renderItemTitle = ({item, index}) => {
    return (
      <View style={homeStyles.contaiTitle}>
        <Image style={homeStyles.imgTitle} source={item.image}></Image>
        <Text style={homeStyles.txtTitle}>{item.title}</Text>
      </View>
    );
  };
  // Category
  const renderItemCategory = value => {
    const {item} = value;
    return (
      <Pressable
        style={homeStyles.categoryBody}
        onPress={() => handToCategoriesDetail(item._id)}>
        <Image style={homeStyles.imgcategoy} source={{uri: `${item.img}`}} />
        <Text style={homeStyles.txtCategoty} numberOfLines={2}>
          {item.name}
        </Text>
      </Pressable>
    );
  };
  const ongetCategory = async () => {
    const categories = await getCategory();
    setCategories(categories);

    // console.log("Danh muc :58 >" + JSON.stringify(categories));
  };
  // Postnews
  const renderItemPostnew = ({item}) => {
    return (
      <TouchableOpacity style={homeStyles.productBody}>
        <Image
          source={require('../assets/images/icons/icon_heart.png')}
          style={{
            width: 500,
            height: 200,
            opacity: opacity,
          }}
        />
        <Image
          style={homeStyles.imgproduct}
          source={{uri: `${urlApi}${item.files}`}}
        />
        <Text style={homeStyles.txtnameproduct}>{item.title}</Text>
        <Text style={homeStyles.txtdetail} numberOfLines={1}>
          {item.detail}
        </Text>
        <Text style={homeStyles.txtprice}>{item.price}</Text>

        <View style={homeStyles.contaiicontimeaddress}>
          <Image
            style={homeStyles.imgiconprofile}
            source={require('../../image/Phone.png')}
          />
          <Text style={homeStyles.txtTime}> - {item.created_AT} - </Text>
          <Text style={homeStyles.txtAdress}>{item.location}</Text>
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
    ongetProducts(), ongetCategory();
  }, []);
  return (
    <View style={homeStyles.body}>
      <View style={homeStyles.containerse}>
        <View style={homeStyles.viewSearch}>
          <TextInput
            style={homeStyles.txpSearch}
            placeholder="Tìm kiếm trên chợ tốt"
          />
          <Image
            style={homeStyles.imgSearch}
            source={require('../../image/search.png')}
          />
        </View>
        <Image
          style={homeStyles.icon}
          source={require('../../image/notificaiton.png')}
        />
        <Image
          style={homeStyles.icon}
          source={require('../../image/chatting.png')}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View>
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

        <View style={homeStyles.contaiCategory}>
          <Text style={homeStyles.txtTitleCategory}>Khám phá danh mục</Text>
          <ScrollView
            horizontal={true}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingVertical: 20}}>
            <FlatList
              contentContainerStyle={{
                alignSelf: 'flex-start',
              }}
              numColumns={numColumns}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={renderItemCategory}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
        <View style={homeStyles.contaiProduct}>
          <Text style={homeStyles.txtTitleProduct}>Tin Đăng dành cho bạn</Text>
          <FlatList
            data={products}
            renderItem={renderItemPostnew}
            numColumns={2}
            keyExtractor={item => item._id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
