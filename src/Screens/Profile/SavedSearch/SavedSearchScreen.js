/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Image } from '@rneui/base';
import { getProduct } from '../../ScreenService';
import Product from '../../Product';
const horizontalData = [
  {
    id: '1',
    name: 'Product 1',
    price: '1,000,000 đ',
    time: '1 hour ago',
    image: require('../../../assets/images/imgProduct.png'),
  },
  {
    id: '2',
    name: 'Product 2',
    price: '2,500,000 đ',
    time: '2 hours ago',
    image: require('../../../assets/images/imgProduct.png'),
  },
  {
    id: '3',
    name: 'Product 3',
    price: '1,000,000 đ',
    time: '1 hour ago',
    image: require('../../../assets/images/imgProduct.png'),
  },
  {
    id: '4',
    name: 'Product 4',
    price: '2,500,000 đ',
    time: '2 hours ago',
    image: require('../../../assets/images/imgProduct.png'),
  },
];

const SavedSearchScreen = props => {
  //link api
  const urlServer = 'https://datn-nodejs.onrender.com/';
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { navigation } = props;
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
  useEffect(() => {
    ongetProducts();
  }, []);
  const renderItem = ({ item, index }) => (
    <View key={index} style={styles.horizontalItem}>
      <Image
        source={{ uri: `${urlServer}${item.files[0]}` }}
        style={styles.horizontalImage}
      />
      <View style={styles.horizontalTextContainer}>
        <TouchableOpacity style={styles.iconSave}>
          <Image
            source={require('../../../assets/images/icons/icon_heart.png')}
            style={styles.icontim}
          />
        </TouchableOpacity>
        <Text style={styles.horizontalname}>{item.title}</Text>
        <Text style={styles.horizontalrice}>{item.price} đ</Text>
        <View style={styles.contend}>
          <Image
            style={styles.iconbag}
            source={require('../../../assets/images/icons/icon_office_bag.png')}
          />
          <Image
            style={styles.icondot}
            source={require('../../../assets/images/icons/icon_dot.png')}
          />
          <Text style={styles.horizontaltime}>{item.created_AT}</Text>
        </View>
      </View>
    </View>
  );
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
          <Text style={styles.appbarLeftText}>
            Tìm kiếm đã lưu <Text>(0/5)</Text>
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.txtnoti}>Bạn chưa lưu tìm kiếm nào</Text>
      </View>

      <View style={styles.contNew}>
        <Text style={styles.txtNew}>Tin đăng mới</Text>
        {isLoading ? (
          <ActivityIndicator
            style={styles.loadingIcon}
            size="large"
            color="#3498db"
          />
        ) : (
          <>
            <FlatList
              data={products}
              scrollEnabled={false}
              keyExtractor={item => item._id.toString()}
              renderItem={renderItem}
              // horizontal
              numColumns={2}
              showsHorizontalScrollIndicator={false}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default SavedSearchScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
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
  txtnoti: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
    marginBottom: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  contNew: {
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  txtNew: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  horizontalItem: {
    width: '48%',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 1,
    padding: 1,
    borderColor: 'Silver',
    borderWidth: 0.1,
    position: 'relative',
  },
  horizontalImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    padding: 10,
  },
  horizontalTextContainer: {
    // padding: 10,
    // borderColor: 'Silver',
    // position: 'relative',
    // borderWidth: 1,
  },

  horizontalname: {
    fontSize: 15,
    marginBottom: 5,
    color: 'black',
  },
  horizontalrice: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'red',
  },
  horizontaltime: {
    fontSize: 8,
    marginBottom: 5,
    color: 'gray',
  },
  icontim: {
    width: 20,
    height: 20,
    // position: 'absolute',
  },
  iconSave: {
    position: 'absolute',
    right: 10,
    top: -25,
    zIndex: 1,
  },
  contend: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconbag: {
    width: 20,
    height: 20,
  },
  icondot: {
    width: 20,
    height: 20,
  },
});
