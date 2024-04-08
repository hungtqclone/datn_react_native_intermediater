import React, { createContext, useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { urlAPI } from '../helpers/urlAPI';
import AxiosInstance from '../helpers/Axiosintance';

const socket = io(urlAPI);

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([])
    const [newMessage, setNewMessage] = useState(null)
    const [userId, setUserId] = useState(null)
    // useEffect(() => {
    //     socket.on('newMessage', (message) => {
    //         setMessages((prevMessages) => [...prevMessages, message]);
    //     });

    //     return () => {
    //         socket.off('newMessage');
    //     };
    // }, []);
    const fetchDataMessages = async () => {
        try {
            const messagesData = await AxiosInstance().get(`/api/message/get-messages-receiver/${userId}`)
            setAllMessages(messagesData.messages)
            console.log(messagesData.messages.length)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (userId != null) {
            console.log("connect socket")
            socket.emit('set-socketId', userId);
            fetchDataMessages()
            socket.on('receive-message', (message) => {
                setAllMessages(prevMessages => [...prevMessages, message]);

            });
            socket.on('sender-message', (message) => {
                setAllMessages(prevMessages => [...prevMessages, message]);

            });
            socket.on('seen-message', () => {
                fetchDataMessages()

            });


        }
    }, [userId]);
    // useEffect(() => {
    //     if (newMessage != null) {
    //         setAllMessages([...allMessages, newMessage])
    //         console.log(allMessages.length)
    //     }
    // }, [newMessage]);


    return (
        <MessageContext.Provider value={{ allMessages, socket, setUserId }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessage = () => React.useContext(MessageContext);