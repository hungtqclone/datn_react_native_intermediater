import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosInstance from '../components/helpers/Axiosintance'
import axios from 'axios'

const TestHelper = (props) => {
    const { navigation } = props
    const userId = "6587edd36c13142ab0adcd86"
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const fetchData = async () => {
        const userData = await AxiosInstance().get(`/user`)

        // const response = await axios.get(
        //     `https://datn-nodejs.onrender.com/api/products`,
        // );
        setUsers(JSON.stringify(userData.users));
        setData(userData.users)
    }

    useEffect(() => {

        fetchData();



    }, []);
    const renderItem = ({ item }) => (
        <View style={{ padding: 10, marginHorizontal: 10, marginVertical: 3, backgroundColor: "#CCCCCC", borderRadius: 10, display: userId == item._id ? "none" : "inline-block" }}>
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