import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosInstance from '../components/helpers/Axiosintance'
import axios from 'axios'

const TestHelper = (props) => {
    const { navigation } = props

    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const fetchData = async () => {
        const userData = await AxiosInstance().get(`/user`)

        // const response = await axios.get(
        //     `https://datn-nodejs.onrender.com/api/products`,
        // );
        setUsers(JSON.stringify(userData.users));
    }

    useEffect(() => {

        fetchData();
        setData([{ "_id": "6587edd36c13142ab0adcd86", "password": "111", "email": "admin1@gmail.com", "phone": 123, "name": "ThanhND", "uytin": "100%", "__v": 0 }, { "_id": "6587edf26c13142ab0adcd88", "password": "222", "email": "admin123@gmail.com", "phone": 222, "name": "ThanhND2", "uytin": "99%", "__v": 0 }, { "_id": "6587ee006c13142ab0adcd8a", "password": "666", "email": "admin666@gmail.com", "phone": 666, "name": "ThanhND2", "uytin": "59%", "__v": 0 }, { "_id": "6587eeda6c13142ab0adcd96", "password": "thanh1", "email": "user101@gmail.com", "phone": 9991223312, "name": "test1", "uytin": "9%", "__v": 0 }, { "_id": "6587eef66c13142ab0adcd98", "password": "1", "email": "test123@gmail.com", "phone": 99887766, "name": "betaTest1", "uytin": "39%", "__v": 0 }])


    }, []);
    const renderItem = ({ item }) => (
        <View style={{ padding: 10, marginHorizontal: 10, marginVertical: 3, backgroundColor: "#CCCCCC", borderRadius: 10 }}>
            <Text style={{ color: 'black' }} onPress={() => navigation.navigate('chat', { data: item })}>{item.name}</Text>
        </View >
    );
    return (
        <View style={{ flex: 1, }}>
            <Text style={{ color: "black", fontSize: 20 }}>List user</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </View>
    )
}

export default TestHelper