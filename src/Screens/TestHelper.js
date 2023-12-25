import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosInstance from '../components/helpers/Axiosintance'
import axios from 'axios'

const TestHelper = () => {
    const [data, setData] = useState(undefined)

    const init = async () => {
        console.log("userData",);
        const userData = await AxiosInstance().get(`/api/products/get-all`)
        setData(userData.data);
        // const response = await axios.get(
        //     `https://datn-nodejs.onrender.com/api/products`,
        // );
        console.log("userData", userData.data);

    }
    useEffect(() => {
        init()

    }, []);
    return (
        <View>
            <Text >testHelper</Text>
            <Text>data :{JSON.stringify(data[0].price)}</Text>
        </View>
    )
}

export default TestHelper