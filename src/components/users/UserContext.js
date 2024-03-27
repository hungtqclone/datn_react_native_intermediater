import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, createContext, useEffect } from 'react'
import { login } from './UserService';
import AxiosInstance from '../helpers/Axiosintance';

export const UserContext = createContext();




export const UserProvider = (props) => {
    const { children } = props;
    const [user, setuser] = useState(null);
    const dataUser = async () => {
        const receiverUser = await AsyncStorage.getItem('user');
        if (receiverUser != '') {


            const checkUser = await AxiosInstance().get(
                `/api/get-user-byId/${JSON.parse(receiverUser)._id}`,
            );
            console.log("check user: ", checkUser)
            if (checkUser.success) {
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
                console.log("check data user: ", result);
                setuser(result.user);
                await AsyncStorage.setItem('user', JSON.stringify(result.user));
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

