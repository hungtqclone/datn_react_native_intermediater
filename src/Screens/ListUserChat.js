import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AxiosInstance from '../components/helpers/Axiosintance';
import { UserContext } from '../components/users/UserContext';

const ListUserChat = (props) => {
    const { navigation } = props;
    const { user } = useContext(UserContext);
    const userId = user._id;
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await AxiosInstance().get('api/users');
        setData(response.users.filter(u => u._id !== userId));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('chat', { data: item })}>
            {/* <Image source={{ uri: item.avatar }} style={styles.avatar} /> */}
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.appbar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/icons/arrow-back.png')} styles={styles.leftArrow}/>
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
        marginLeft:10
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
