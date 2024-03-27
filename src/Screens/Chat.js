import { View, Text, FlatList, TextInput, Button, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef, useContext } from 'react'
import AxiosInstance from '../components/helpers/Axiosintance';
import { UserContext } from '../components/users/UserContext';
import io from 'socket.io-client';
import { urlAPI } from '../components/helpers/urlAPI';

const moment = require('moment-timezone');
const Chat = ({ navigation, route }) => {
    const { data } = route.params;
    const { user } = useContext(UserContext)
    const flatListRef = useRef();
    const userId = user._id
    const [allMessage, setallMessage] = useState(undefined)
    const [inputMessage, setInputMessage] = useState(undefined);
    const [isSending, setIsSending] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [socket, setSocket] = useState(null);

    const fetchDataAllMessage = async () => {
        try {
            const messageData = await AxiosInstance().get(`api/message/get-messages?senderId=${userId}&receiverId=${data._id}`)
            setallMessage(messageData.messages)
        } catch (error) {
            console.log(error)
        }
    }
    const renderItem = ({ item }) => {
        if (userId !== item.senderId) {
            return (
                <View style={{ width: "100%", alignItems: 'flex-start', marginBottom: 5 }}>
                    <View style={{
                        maxWidth: '80%',
                        alignSelf: 'flex-start',
                        backgroundColor: "#AAAAAA",
                        borderRadius: 20,
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                        marginLeft: 10,
                        marginTop: 3,
                        marginBottom: 3,
                    }}>
                        <Text style={{ color: 'white', fontSize: 17, lineHeight: 22 }}>{item.content}</Text>
                        <Text style={{ alignSelf: 'flex-start', color: 'white', fontSize: 12, marginTop: 4 }}>
                            {moment.utc(item.createAt).tz('Asia/Ho_Chi_Minh').format().slice(11, 16)}
                        </Text>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{ width: "100%", alignItems: 'flex-end', marginBottom: 5 }}>
                    <View style={{
                        maxWidth: '80%',
                        alignSelf: 'flex-end',
                        backgroundColor: "#3333FF",
                        borderRadius: 20,
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                        marginRight: 10,
                        marginTop: 3,
                        marginBottom: 3,
                    }}>
                        <Text style={{ color: 'white', fontSize: 17, lineHeight: 22 }}>{item.content}</Text>
                        <Text style={{ alignSelf: 'flex-end', color: 'white', fontSize: 12, marginTop: 4 }}>
                            {moment.utc(item.createAt).tz('Asia/Ho_Chi_Minh').format().slice(11, 16)}
                        </Text>
                    </View>
                </View>
            );
        }
    };
    const newSocket = io(urlAPI);
    useEffect(() => {

        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Connected to server');
        });
        newSocket.emit('set-socketId', userId);

    }, []);
    useEffect(() => {
        fetchDataAllMessage();
    }, []);
    newSocket.on('receive-message', (message) => {
        console.log("check message receiver: ", message);
        fetchDataAllMessage()
    });

    const sendMessage = async () => {
        if (inputMessage.trim() !== '') {
            setIsSending(true);
            try {
                socket.emit('send-message', {
                    "senderId": userId,
                    "receiverId": data._id,
                    "content": inputMessage

                });
                // const sendMessageResponse = await AxiosInstance().post(`api/message/new-message?senderId=${userId}&receiverId=${data._id}&content=${inputMessage}`);
                // console.log(sendMessageResponse);
                // if (sendMessageResponse.result === true) {
                //     fetchDataAllMessage();
                // }
                setInputMessage('');
                fetchDataAllMessage();
            } catch (error) {
                console.error(error);
            } finally {
                setIsSending(false);
            }
        }
    };

    return (
        <View style={{ position: "relative", flex: 1, backgroundColor: "#DDDDDD" }}>
            <View style={{ padding: 10, backgroundColor: "#FFCC00", marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/icons/arrow-back.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: "black", fontWeight: 'bold' }}>{data.name}</Text>
            </View>
            {allMessage && allMessage.length > 0 ? (
                <FlatList
                    ref={flatListRef}
                    style={{ marginBottom: 80 }}
                    data={allMessage}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    onContentSizeChange={() => {
                        flatListRef.current.scrollToEnd({ animated: true });
                    }}
                />
            ) : (
                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 20 }}>New message</Text>
            )}

            <View style={{ position: "absolute", width: "100%", bottom: 10, flexDirection: "row", alignItems: "center", padding: 10 }}>
                <View style={{ flexDirection: "row", flex: 1, borderRadius: 10, backgroundColor: "white", alignItems: "center", marginRight: 10 }}>
                    <TextInput
                        style={{ flex: 1, fontSize: 16, paddingHorizontal: 10 }}
                        placeholder='Type a message'
                        value={inputMessage}
                        onChangeText={setInputMessage}
                    />
                    <TouchableOpacity onPress={() => sendMessage()} style={{ padding: 10 }}>
                        {isSending ? (
                            <ActivityIndicator size="small" color="#0000ff" />
                        ) : (
                            <Image source={require('../assets/images/send-message.png')} style={{ width: 25, height: 25 }} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}

export default Chat