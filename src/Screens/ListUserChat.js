import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AxiosInstance from '../components/helpers/Axiosintance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../components/users/UserContext';
import { useMessage } from '../components/messages/MessageContext';
import moment_timezone from 'moment-timezone';
import { useFocusEffect } from '@react-navigation/native'
const ListUserChat = (props) => {
    const { navigation } = props;
    const { user } = useContext(UserContext);
    const { socket, setNewMessage } = useMessage()
    const [allMessages, setAllMessages] = useState([])
    const userId = user._id;
    const [data, setData] = useState([]);
    const avatarDefault = 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg';
    let latestMessages = [];
    const fetchData = async () => {
        const response = await AxiosInstance().get('api/users');
        setData(response.users.filter(u => u._id !== userId));
    }
    const lastMessages = async () => {
        try {
            const dataMessagesFetch = await AsyncStorage.getItem(userId)
            setAllMessages(JSON.parse(dataMessagesFetch))
        } catch (error) {
            console.log("last messages error: ", error)
            return
        }
    }
    if (allMessages.length != 0) {
        allMessages.forEach(message => {
            const index = latestMessages.findIndex(existingMessage =>
                (existingMessage.senderId === message.senderId && existingMessage.receiverId === message.receiverId) ||
                (existingMessage.senderId === message.receiverId && existingMessage.receiverId === message.senderId)
            );
            if (index === -1) {
                latestMessages.push(message);
            } else if (message.createAt > latestMessages[index].createAt) {
                latestMessages[index] = message;
            }
        });
    }
    useFocusEffect(
        React.useCallback(() => {
            lastMessages()
            return () => {
            }
        }, [])
    )
    useEffect(() => {
        setNewMessage(false)
        socket.on('receive-message', async (message) => {
            const messagesData = await AxiosInstance().get(`/api/message/get-messages-receiver/${userId}`)
            setAllMessages(messagesData.messages)
        });
        fetchData();
    }, []);
    const getRandomTime = () => {
        const hours = Math.floor(Math.random() * 24);
        const minutes = Math.floor(Math.random() * 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        socket.on('receive-message', (message) => {
            lastMessages()
        });
    }, [])

    const renderItem = ({ item }) => {
        let newMessage = latestMessages.filter(message => message.senderId === item._id || message.receiverId === item._id)
        let shortenedLastMessage = '...'
        if (newMessage[0]) {
            shortenedLastMessage = newMessage[0].content && newMessage[0].content.length > 20
                ? newMessage[0].content.substring(0, 20) + '...'
                : newMessage[0].content;
        }

        const lastMessageWithTime = `${shortenedLastMessage || '...'} · ${newMessage[0] ? moment_timezone.utc(newMessage[0].createAt).tz('Asia/Ho_Chi_Minh').format().slice(11, 16) : ''}`;

        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('chat', { data: item })}>
                <Image source={{ uri: item.avatar || avatarDefault }} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.lastMessage} numberOfLines={1} ellipsizeMode='tail'>
                        {lastMessageWithTime.trim()}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.appbar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/icons/arrow-back.png')} styles={styles.leftArrow} />
                </TouchableOpacity>
                <Text style={styles.appbarTitle}>Danh sách tin nhắn</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id.toString()}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    name: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        color: 'grey',
        fontSize: 14,
    },
    appbarTitle: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    appbar: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFCC00',
        height: 50,
        // padding: 5,
        paddingHorizontal: 10,
        // borderBottomColor: '#ccc',
        // borderBottomWidth: 1,
    },
    leftArrow: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default ListUserChat;
