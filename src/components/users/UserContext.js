import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, createContext, useEffect } from 'react'
import { login } from './UserService';
import AxiosInstance from '../helpers/Axiosintance';
import { handleUserId } from '../helpers/socketIO';
import socket from '../helpers/socketIO';

export const UserContext = createContext();




export const UserProvider = (props) => {
    const { children } = props;
    const [user, setuser] = useState(null);
    const [messageNew, setMessageNew] = useState(null)
    const [messages, setMessages] = useState([])
    const dataUser = async () => {
        const receiverUser = await AsyncStorage.getItem('user');
        if (receiverUser != null) {


            const checkUser = await AxiosInstance().get(`/api/get-user-byId/${JSON.parse(receiverUser)._id}`);
            if (checkUser.success) {
                handleUserId(checkUser.user._id)
                setuser(checkUser.user);
                const messagesData = await AxiosInstance().get(`/api/message/get-messages-receiver/${checkUser.user._id}`)
                setMessages(messagesData.messages)
                return;
            } else {
                setuser(null);
                return;
            }
        }

    }
    socket.on('receive-message', (message) => {

        if (messages[messages.length - 1]._id == message._id) {
            setMessageNew(message)
        } else {
            setMessages([...messages, message])
        }

    });
    // useEffect(() => {
    //     if(messageNew != null){
    //         setMessages([...messages,messageNew])
    //     }
    // }, [messageNew]);
    // // const saveDataMessage = async () => {
    //     await AsyncStorage.setItem(`messages`, JSON.stringify(messages));
    // }

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
                handleUserId(result.user._id)
                setuser(result.user);
                return true;
            }
        } catch (error) {
            console.log('login error', error)
        }
        return false;
    }
    return (
        <UserContext.Provider value={{ user, setuser, onLogin, messages, setMessages }}>
            {children}
        </UserContext.Provider>
    )

}


