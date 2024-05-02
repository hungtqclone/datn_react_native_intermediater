import React, { createContext, useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { urlAPI } from '../helpers/urlAPI';
import AxiosInstance from '../helpers/Axiosintance'
import AsyncStorage from '@react-native-async-storage/async-storage';

const socket = io(urlAPI);

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([])
    const [newMessage, setNewMessage] = useState(false)
    const [userId, setUserId] = useState(null)
    const fetchDataMessages = async () => {
        try {
            const messagesData = await AxiosInstance().get(`/api/message/get-messages-receiver/${userId}`)
            await AsyncStorage.setItem(userId, JSON.stringify(messagesData.messages));
            for (let i = 0; i < messagesData.messages.length; i++) {
                if (messagesData.messages[i].seen == false && messagesData.messages[i].senderId != userId) {
                    setNewMessage(true)
                    return
                }

            }
            // setAllMessages(messagesData.messages)
            // console.log(messagesData.messages.length)
        } catch (error) {
            console.log(error)
            return
        }
    }
    useEffect(() => {
        if (userId != null && userId != 1) {
            handleConnect()


        }
    }, [userId]);
    // useEffect(() => {
    //     if (newMessage != null) {
    //         setAllMessages([...allMessages, newMessage])
    //         console.log(allMessages.length)
    //     }
    // }, [newMessage]);

    const handleConnect = () => {
        if (socket) {
            socket.connect();
            socket.emit('set-socketId', userId);
            fetchDataMessages()
            socket.on('receive-message', (message) => {
                // setAllMessages(prevMessages => [...prevMessages, message]);
                fetchDataMessages()
            });
            socket.on('sender-message', (message) => {
                // setAllMessages(prevMessages => [...prevMessages, message]);
                fetchDataMessages()
            });
            socket.on('seen-message', () => {
                fetchDataMessages()

            });
            console.log("connection socket")
        }
    };

    const handleDisconnect = () => {
        if (socket) {
            socket.off('receive-message', (message) => {
                // setAllMessages(prevMessages => [...prevMessages, message]);
                fetchDataMessages()
            });
            socket.off('sender-message', (message) => {
                // setAllMessages(prevMessages => [...prevMessages, message]);
                fetchDataMessages()
            });
            socket.off('seen-message', () => {
                fetchDataMessages()

            });
            socket.disconnect(); // Ngắt kết nối socket
        }
    };


    return (
        <MessageContext.Provider value={{ socket, setUserId, newMessage, setNewMessage, handleDisconnect, handleConnect }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessage = () => React.useContext(MessageContext);