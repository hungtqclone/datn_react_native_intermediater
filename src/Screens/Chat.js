import { View, Text, FlatList, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosInstance from '../components/helpers/Axiosintance';

const Chat = ({ route }) => {
    const { data } = route.params;
    const userId = "6587edd36c13142ab0adcd86"
    const [allMessage, setallMessage] = useState(undefined)
    const [inputMessage, setInputMessage] = useState(undefined);
    const [conversationId, setConversationId] = useState(undefined)

    const fetchData = async () => {
        const members = [
            `%20%22${userId}%22`,
            `%20%22${data._id}%22%20`

        ]
        // console.log(members);

        const conversationId = await AxiosInstance().get(`/chat/get-conversation-by-members/[${members}]`)
        const messageData = await AxiosInstance().get(`/chat/get-message/"${conversationId.conversation[0]._id}"`)
        setConversationId(conversationId.conversation[0]._id)
        setallMessage(messageData.messages)
    }
    const renderItem = ({ item }) => {

        if (userId === item.senderId) {
            return (
                <View style={{ width: "100%", alignItems: 'flex-start' }}>
                    <View style={{ padding: 10, marginHorizontal: 10, marginVertical: 3, backgroundColor: "#AAAAAA", borderRadius: 10, marginRight: 50, alignItems: "flex-start" }}>
                        <Text style={{ color: 'black', fontSize: 17 }}>{item.content}</Text>
                        <Text style={{ fontSize: 12 }}>{item.timeStamp}</Text>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{ width: "100%", alignItems: 'flex-end' }}>
                    <View style={{ padding: 10, marginHorizontal: 10, marginVertical: 3, backgroundColor: "#3333FF", borderRadius: 10, marginLeft: 50, alignItems: "flex-end" }}>
                        <Text style={{ color: 'black', fontSize: 17 }}>{item.content}</Text>
                        <Text style={{ fontSize: 12 }}>{item.timeStamp}</Text>
                    </View>
                </View>
            );
        }
    };
    useEffect(() => {
        fetchData();

    }, []);

    const sendMessage = async () => {
        console.log(inputMessage);
        // if (inputMessage != '') {
        //     const sendMessgaes = await AxiosInstance().post(`/chat/add-message/${conversationId}/${userId}/${inputMessage}`)
        // }

    }

    return (
        <View style={{ position: "relative", flex: 1, backgroundColor: "#DDDDDD" }}>
            <View style={{ padding: 10, backgroundColor: "#FF99CC", marginBottom: 10 }}>
                <Text style={{ fontSize: 20, color: "white" }}>{data.name}</Text>
            </View>



            {allMessage && allMessage.length > 0 ? (
                <FlatList
                    data={allMessage}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            ) : (
                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 20 }}>New message</Text>
            )}
            <View style={{ position: "absolute", width: "100%", bottom: 10, flexDirection: "row", padding: 10 }}>
                <TextInput style={{ backgroundColor: "white", borderRadius: 10, fontSize: 16, width: '85%', marginRight: 10 }} placeholder='text message' onChangeText={(e) => setInputMessage(e)} />
                <Button
                    onPress={() => sendMessage()}
                    title="Gửi"
                />
            </View>

        </View >
    )
}

export default Chat