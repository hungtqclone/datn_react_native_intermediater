import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AxiosInstance from '../components/helpers/Axiosintance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../components/users/UserContext';
import { useMessage } from '../components/messages/MessageContext';
import moment_timezone from 'moment-timezone';
import { useFocusEffect } from '@react-navigation/native'
const ListUserChat = (props) => {
    const { navigation } = props;
    const { user, checkLogIn } = useContext(UserContext);
    const { socket, setNewMessage } = useMessage()
    const userId = user._id;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const avatarDefault = 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg';
    const fetchData = async () => {
        try {
            const response = await AxiosInstance().get(`api/message/message-communicate-user?userId=${userId}`);
            setData(response.messages);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            return
        }
    }
    useFocusEffect(
        React.useCallback(() => {
            fetchData()
            return () => {
            }
        }, [])
    )
    useEffect(() => {
        checkLogIn();
        setNewMessage(false)
        socket.on('receive-message', async (message) => {
            fetchData()
        });

    }, []);

    const renderItem = ({ item }) => {
        let dataUser = item.senderId._id == userId ? item.receiverId : item.senderId;
        let checkNewMessage = item?.senderId._id == dataUser?._id && item?.seen == false ? true : false

        let message = item?.content.length > 20 ? item?.content.slice(0, 19) + "..." : item?.content
        return (
            <TouchableOpacity style={[styles.itemContainer, { borderColor: checkNewMessage ? "black" : "#e0e0e0" }]} onPress={() => navigation.navigate('chat', { data: dataUser })}>
                <Image source={{ uri: dataUser?.avatar || avatarDefault }} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{dataUser?.name}</Text>
                    <Text style={[styles.lastMessage, { color: checkNewMessage ? 'black' : 'gray' }]} numberOfLines={1} ellipsizeMode='tail'>
                        {message}    {moment_timezone.utc(item.createAt).tz('Asia/Ho_Chi_Minh').format().slice(11, 16)}
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
            {isLoading ? <ActivityIndicator
                style={{ marginTop: 20 }}
                size="large"
                color="#3498db"
            /> : (
                data.length == 0 ?
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>Bạn chưa nhắn tin với ai</Text>
                    :
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item._id.toString()}

                    />
            )}
            {/* {data.length == 0 ?
                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>Bạn chưa nhắn tin với ai</Text>
                :
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item._id.toString()}

                />} */}

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
        borderWidth: 1,
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
