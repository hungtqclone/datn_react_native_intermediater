import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  ToastAndroid,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useContext} from 'react';
import AxiosInstance from '../components/helpers/Axiosintance';
import {UserContext} from '../components/users/UserContext';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemPosts = props => {
  const {data} = props;
  const {user, setuser} = useContext(UserContext);
  const urlApi = `https://datnapi-qelj.onrender.com/`;
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [buy, setBuy] = useState(0);
  const showToast = () => {
    if (numberOfDays === 0 || buy >= user.balance) {
        ToastAndroid.show('Mua vip thất bại', ToastAndroid.SHORT);
    }
    ToastAndroid.show('Mua vip thành công', ToastAndroid.SHORT);
  };
  const toggleModal = () => {
    setNumberOfDays(0);
    setModalVisible(!isModalVisible);
  };
  const handleInputNumber = text => {
    setNumberOfDays(text);
    setBuy(text * 3000);
  };
  const buyVips = async (userId, postsId) => {
    try {
      if (numberOfDays == 0) return;
      if (buy > user.balance) return;
      setIsLoading(true);
      const buyVipUser = await AxiosInstance().post(
        `api/user/vip/${userId}/${numberOfDays * 3000}`,
      );
      console.log('check buy vip user: ', buyVipUser);
      if (buyVipUser.result) {
        const vipPosts = await AxiosInstance().post(
          `api/postnews/create_vip_posts/${postsId}/${numberOfDays}`,
        );
        console.log('check vip posts: ', vipPosts);
        if (vipPosts.result) {
          const dataUser = await AxiosInstance().get(
            `/api/get-user-byId/${userId}`,
          );
          console.log('check data user: ', dataUser);

          await AsyncStorage.setItem('user', JSON.stringify(dataUser.user));
          setuser(dataUser.user);
        }
      }
    } catch (error) {
      console.log('buy vip error: ', error);
    }
    setNumberOfDays(0);
    setModalVisible(!isModalVisible);
    setIsLoading(false);
  };
  // console.log("check data item: ", data)
  return (
    <View>
      <View style={{flex: 1}}>
        {/* <Button title="Show modal" onPress={toggleModal} /> */}

        <Modal isVisible={isModalVisible}>
          {isLoading ? (
            <ActivityIndicator
              style={{marginTop: 20}}
              size="large"
              color="#3498db"
            />
          ) : (
            <View
              style={{
                backgroundColor: '#F4F4F4',
                padding: 12,
                borderRadius: 20,
                flexDirection: 'column',
              }}>
              <Image
                style={{
                  width: 70,
                  height: 70,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                source={require('../../image/vipcoint.png')}
              />
              <Text
                style={{
                  fontWeight: 700,
                  color: 'black',
                  fontSize: 20,
                  padding: 5,
                  alignItems: 'flex-start',
                }}>
                Mua vip cho bài đăng
              </Text>
              <Text style={{fontWeight: 400, color: 'black', fontSize: 20,alignSelf:'center',padding:5}}>
                {data.title}
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  height: 50,
                  borderWidth: 0.5,
                  borderColor: '#E1E1E1',
                  paddingLeft: 10,
                  borderRadius: 8,
                  backgroundColor: 'white',
                }}
                keyboardType="number-pad"
                onChangeText={handleInputNumber}
                placeholder="số ngày bạn muốn vip"
                placeholderTextColor="#E1E1E1"
              />

          
              <Text
                    style={{
                      color: 'red',
                      fontSize:12,
                      padding:5,
                      display: numberOfDays == 0 ? 'flex' : 'none',
                    }}>
                    Cần điền số ngày mua
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      fontSize:12,
                      padding:5,
                      display: buy > user.balance ? 'flex' : 'none',
                    }}>
                    Bạn không đủ đồng tốt
                  </Text>
                <Text style={{alignItems:'flex-end',textAlign:'right',padding:5}}>Số tiền phải trả: {buy} vnd</Text>
              
                 
                

              {/* <TouchableOpacity><Text>Mua vip</Text></TouchableOpacity> */}
              <View style={{flexDirection: 'row', width: '100%'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFBA00',
                    padding: 5,
                    borderRadius: 5,
                    flex: 1,
                    paddingVertical: 10,
                  }}
                  title="Mua vip"
                  onPress={() => {buyVips(data.userid, data._id),showToast();}}>
                  <Text style={{color: 'white', textAlign: 'center',fontWeight:700,fontSize:15}}>
                    Mua vip
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFBA00',
                    padding: 5,
                    borderRadius: 5,
                    marginLeft: 10,
                    flex: 1,
                    paddingVertical: 10,
                  }}
                  onPress={toggleModal}>
                  <Text style={{fontSize:15,color: 'white', textAlign: 'center',fontWeight:700}}>
                    Đóng
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Modal>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            marginVertical: 1,
          }}>
          <View style={{width: 120, height: 120, padding: 15}}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: urlApi + data.files[0]}}
            />
          </View>
          <View
            style={{
              paddingVertical: 15,
              flex: 1,
              marginRight: 30,
              height: '100%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontSize: 16}} numberOfLines={2}>
                {data.title}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  backgroundColor: 'gray',
                  marginLeft: 4,
                  paddingHorizontal: 2,
                  display: data.isVip ? 'flex' : 'none',
                }}
                numberOfLines={2}>
                VIP
              </Text>
            </View>

            <Text
              style={{
                color: 'red',
                fontWeight: 600,
                fontSize: 15,
                position: 'absolute',
                bottom: 38,
              }}>
              {data.price} d
            </Text>
            <Text style={{position: 'absolute', bottom: 15}}>
              {data.location}
            </Text>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', bottom: 15, right: 5}}
            onPress={toggleModal}>
            <Text style={{color: 'blue', fontSize: 16}}>Mua vip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemPosts;
