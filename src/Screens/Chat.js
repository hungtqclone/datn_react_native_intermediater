import { View, Text, FlatList, TextInput, Button, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef, useContext } from 'react'
import AxiosInstance from '../components/helpers/Axiosintance';
import { UserContext } from '../components/users/UserContext';
import { useMessage } from '../components/messages/MessageContext';
import moment_timezone from 'moment-timezone';


// const moment = require('moment-timezone');
const Chat = ({ navigation, route }) => {
    const { data } = route.params;
    const { user } = useContext(UserContext)
    const { allMessages, socket } = useMessage()
    const flatListRef = useRef();
    const userId = user._id
    const [inputMessage, setInputMessage] = useState(undefined);
    const [isSending, setIsSending] = useState(false);
    const filteredData = [];
    for (let i = allMessages.length - 1; i >= 0; i--) {
        if (allMessages[i].senderId == data._id || allMessages[i].receiverId == data._id) {
            filteredData.push(allMessages[i])

        }
    }
    // useEffect(() => {
    //     if (newMessage != null) {
    //         filteredData.unshift(...[newMessage]);

    //     }
    // }, [newMessage]);
    const renderItem = ({ item }) => {
        let checkLeft = userId !== item.senderId
        return (
            <View>

                <View style={{ width: "100%", alignItems: checkLeft ? 'flex-start' : 'flex-end', marginBottom: 5 }}>
                    <View style={{
                        maxWidth: '80%',
                        alignSelf: checkLeft ? 'flex-start' : 'flex-end',
                        backgroundColor: checkLeft ? "#AAAAAA" : "#3333FF",
                        borderRadius: 20,
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                        marginLeft: 10,
                        marginTop: 3,
                        marginBottom: 3,
                    }}>
                        <Text style={{ color: 'white', fontSize: 17, lineHeight: 22 }}>{item.content}</Text>
                        <Text style={{ alignSelf: checkLeft ? 'flex-start' : 'flex-end', color: 'white', fontSize: 12, marginTop: 4 }}>
                            {moment_timezone.utc(item.createAt).tz('Asia/Ho_Chi_Minh').format().slice(11, 16)}
                        </Text>
                    </View>
                </View>
            </View>
        );

    };

    const sendMessage = async () => {
        if (inputMessage.trim() !== '') {
            setIsSending(true);

            try {
                const body = {
                    "senderId": userId,
                    "receiverId": data._id,
                    "content": inputMessage

                }
                socket.emit('send-message', body);
                setInputMessage('');

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
            {filteredData && filteredData.length > 0 ? (
                <FlatList
                    ref={flatListRef}
                    style={{ marginBottom: 80 }}
                    data={filteredData}
                    inverted
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    initialNumToRender={5}
                    maxToRenderPerBatch={5}
                    windowSize={10}
                    updateCellsBatchingPeriod={30}
                    removeClippedSubviews={true}
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