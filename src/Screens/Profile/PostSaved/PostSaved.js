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
import React, { useState, useEffect, useContext } from 'react';
import { Image } from '@rneui/base';
import { getProduct } from '../../ScreenService';
import { getPostSaved } from '../../ScreenService';
import { UserContext } from '../../../components/users/UserContext';
const PostSaved = (props) => {
  //link api
  const urlServer = 'https://datnapi-qelj.onrender.com/';
  const [products, setProducts] = useState([]);
  const [saved, setSaved] = useState([]);
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(true);
  //lấy thông tin user
  const { user } = useContext(UserContext);
  const userId = user._id;
  const ongetProducts = async () => {
    try {
      setIsLoading(true); // Set loading state to true before making the request
      const products = await getProduct();
      setProducts(products);
      console.log('ds tin mới:', products[0]);
      console.log('userId', products[0].userid._id);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
    finally {
      setIsLoading(false); // Set loading state to false after the request is complete
    }
  };
  const ongetSaved = async () => {
    try {
      const saved = await getPostSaved(userId);
      setSaved(saved);

      // console.log('ds tin đã lưu:', saved);
    } catch (error) {
      console.error('không lấy được ds tin đã lưu:', error);
    }
  };
  useEffect(() => {
    ongetProducts();
    ongetSaved();
  }, []);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity key={index} style={styles.horizontalItem}
      onPress={() => navigation.navigate('DetailProduct', { id_product: item._id })} >
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
    </TouchableOpacity>
  );
  const renderSaved = ({ item, index }) => (
    <TouchableOpacity key={index} style={styles.horizontalItem}
      onPress={() => navigation.navigate('DetailProduct', { id_product: item.postId._id })}
    >
      <Image
        source={{ uri: `${urlServer}${item.postId.files[0]}` }}
        style={styles.horizontalImage}
      />

      <View style={styles.horizontalTextContainer}>
        <TouchableOpacity style={styles.iconSave}>
          <Image
            source={require('../../../assets/images/icons/icon_heart.png')}
            style={styles.icontim}
          />
        </TouchableOpacity>
        <Text style={styles.horizontalname}>{item.postId.title}</Text>
        <Text style={styles.horizontalrice}>{item.postId.price} đ</Text>
        <View style={styles.contend}>
          <Image
            style={styles.iconbag}
            source={require('../../../assets/images/icons/icon_office_bag.png')}
          />
          <Image
            style={styles.icondot}
            source={require('../../../assets/images/icons/icon_dot.png')}
          />
          <Text style={styles.horizontaltime}>{item.postId.created_AT}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
            Tin đăng đã lưu <Text>(0/50)</Text>
          </Text>
        </View>
      </View>
      <View style={styles.container}>
      {saved.length === 0 ? (
        <Text style={styles.txtnoti}>
          Bạn chưa lưu tin rao nào. Hãy bấm vào nút ❤️ ở tin rao để lưu lại và
          xem sau.
        </Text>
       ) : (
        <FlatList
          //data={saved}
           data={saved.filter(item => item.postId.userid._id !== userId)}
          scrollEnabled={false}
          keyExtractor={item => item._id.toString()}
          renderItem={renderSaved}
          // horizontal
          numColumns={2}
          showsHorizontalScrollIndicator={false}
        />
        )}
      </View>
      {isLoading ? (
        <ActivityIndicator
          style={styles.loadingIcon}
          size="large"
          color="#3498db"
        />
      ) : (
        <>
          <View style={styles.contNew}>
            <Text style={styles.txtNew}>Tin đăng mới</Text>
            <FlatList
              //data={products}
              data={products.filter(item => item.userid._id !== userId)}
              scrollEnabled={false}
              keyExtractor={item => item._id.toString()}
              renderItem={renderItem}
              // horizontal
              numColumns={2}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default PostSaved;

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
    marginTop: 20,
    fontSize: 15,
    marginBottom: 20,
  },
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
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
    // borderColor: 'Silver',
    // borderWidth: 0.1,
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
