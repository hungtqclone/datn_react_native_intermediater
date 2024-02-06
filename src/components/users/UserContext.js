import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, createContext, useEffect } from 'react'
import { login } from './UserService';


export const UserContext = createContext();




export const UserProvider = (props) => {
    const { children } = props;
    const [user, setuser] = useState(null);
    const dataUser = async () => {
        const checkUser = await AsyncStorage.getItem('user');
        setuser(JSON.parse(checkUser));
        return;
    }
    if (user != 1) {
        dataUser();
    }

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

