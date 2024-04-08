import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import AxiosInstance from '../components/helpers/Axiosintance'
import { UserContext } from '../components/users/UserContext'
import moment_timezone from 'moment-timezone';

const TransactionHistory = (props) => {
    const [data, setData] = useState([])
    const { user } = useContext(UserContext)
    const { navigation } = props

    const fetchData = async () => {
        try {
            const response = await AxiosInstance().get(`/api/transaction/get_by_id/${user._id}`)
            if (response.result) {
                setData(response.data)
            }

        } catch (error) {
            console.log("error fetch data transaction history: ", error)
            return
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: item.paid ? "#33CCFF" : "#FF6633", marginVertical: 3, paddingVertical: 10, paddingLeft: 5 }}>
                <Text style={{ fontSize: 17, color: "white" }}>{item.description.content} {item.paid ? "thành công" : "Thất bại"}</Text>
                <Text>{moment_timezone.utc(item.createAt).tz('Asia/Ho_Chi_Minh').format('H:m DD-MM-YYYY')}</Text>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.appbar}>
                <View style={styles.appbarRight}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={styles.appbarRightIcon}
                            source={require('../assets/images/icons/icon_back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.appbarLeft}>
                    <Text style={styles.appbarLeftText}>
                        Lịch sử giao dịch
                    </Text>
                </View>
            </View>
            <FlatList
                // style={{ marginBottom: 80 }}
                data={data}
                inverted
                renderItem={renderItem}
                keyExtractor={(item, index) => item._id.toString()}
            />
        </View>
    )
}

export default TransactionHistory

const styles = StyleSheet.create({
    appbar: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#FFCC00',
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
    },
    appbarRight: {
        justifyContent: 'center',
        marginLeft: 5

    },
    appbarRightIcon: {
        width: 20,
        height: 20,
    },
    appbarLeft: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appbarLeftText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

});