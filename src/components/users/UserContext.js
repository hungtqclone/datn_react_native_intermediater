import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, createContext } from 'react'
import { login } from './UserService';


export const UserContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [user, setuser] = useState({
        "_id": "659155ecf1e1d9ec8cfbcd93",
        "password": "$2a$12$q6GBQwrhDYAO.53ghJxNOuMHr5pDlEINU2wer63BGMGumDeDQAxEC",
        "email": "thanhdev1@gmail.com",
        "phone": 9912312329,
        "name": "alo 101101",
        "uytin": "0",
    });
    const onLogin = async (email, password) => {
        try {
            const result = await login(email, password);
            console.log('login result:', result);
            if (result.statusCode == 200) {
                setuser(result.data.user);
                await AsyncStorage.setItem('token', result.data.token);
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

