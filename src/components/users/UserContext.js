import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, createContext, useEffect } from 'react'
import { PushNotificationAndroid } from 'react-native';
import { login } from './UserService';
import AxiosInstance from '../helpers/Axiosintance';
import { handleUserId } from '../helpers/socketIO';
import { useMessage } from '../messages/MessageContext';
export const UserContext = createContext();



export const UserProvider = (props) => {
    const { children } = props;
    const { setUserId } = useMessage();
    const [user, setuser] = useState(null);
    const dataUser = async () => {
        const receiverUser = await AsyncStorage.getItem('user');
        if (receiverUser != null) {


            const checkUser = await AxiosInstance().get(`/api/get-user-byId/${JSON.parse(receiverUser)._id}`);
            if (checkUser.success) {
                // handleUserId(checkUser.user._id)
                setUserId(checkUser.user._id)
                setuser(checkUser.user);
                return;
            } else {
                setuser(null);
                return;
            }
        }

    }

    useEffect(() => {
        dataUser()

    }, []);

    // if (user != 1) {
    //     dataUser();
    // }

    const onLogin = async (email, password) => {
        try {
            const result = await login(email, password);
            if (result.success == true) {
                await AsyncStorage.setItem('user', JSON.stringify(result.user));
                setUserId(result.user._id)
                setuser(result.user);
                return true;
            }
        } catch (error) {
            console.log('login error', error)
        }
        return false;
    }
    return (
        <UserContext.Provider value={{ user, setuser, onLogin }}>

            {children}
        </UserContext.Provider>
    )

}


