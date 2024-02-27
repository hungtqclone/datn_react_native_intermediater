import {View, Text, Button, FlatList} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import AxiosInstance from '../components/helpers/Axiosintance';
import {UserContext} from '../components/users/UserContext';

const ListUserChat = props => {
  const {navigation} = props;
  const {user} = useContext(UserContext);
  const userId = '659155ecf1e1d9ec8cfbcd93';
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const userData = await AxiosInstance().get(`api/users`);
    // const response = await axios.get(
    //     `https://datn-nodejs.onrender.com/api/products`,
    // );
    setUsers(JSON.stringify(userData.users));
    setData(userData.users);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderItem = ({item}) => (
    <View
      style={{
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 3,
        backgroundColor: '#CCCCCC',
        borderRadius: 10,
        display: userId == item._id ? 'none' : 'inline-block',
      }}>
      <Text
        style={{color: 'black'}}
        onPress={() => navigation.navigate('chat', {data: item})}>
        {item.name}
      </Text>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black', fontSize: 20}}>List user</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default ListUserChat;
