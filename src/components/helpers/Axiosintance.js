/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'https://datn-nodejs.onrender.com'
        //  baseURL: 'http://192.168.1.3:8080/api/'
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            const user = await AsyncStorage.getItem('user');
            config.headers = {
                'Authorization': `Bearer ${user}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;