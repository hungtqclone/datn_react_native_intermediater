import { View, Text, Image, TouchableOpacity, Button, TextInput, ActivityIndicator, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import AxiosInstance from '../components/helpers/Axiosintance'
import { UserContext } from '../components/users/UserContext';
import Modal from 'react-native-modal'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ItemPosts = (props) => {
    const { data } = props
    const { user, setuser } = useContext(UserContext)
    const urlApi = `https://datnapi-qelj.onrender.com/`
    const [isModalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [numberOfDays, setNumberOfDays] = useState(0);
    const [buy, setBuy] = useState(0)
    const toggleModal = () => {
        setNumberOfDays(0)
        setModalVisible(!isModalVisible);
    };
    const handleInputNumber = (text) => {
        setNumberOfDays(text)
        setBuy(text * 3000)
    }
    const buyVips = async (userId, postsId) => {
        try {
            if (numberOfDays == 0) return
            if (buy > user.balance) return
            setIsLoading(true)
            const buyVipUser = await AxiosInstance().post(`api/user/vip/${userId}/${numberOfDays * 3000}`)
            console.log("check buy vip user: ", buyVipUser)
            if (buyVipUser.result) {
                const vipPosts = await AxiosInstance().post(`api/postnews/create_vip_posts/${postsId}/${numberOfDays}`)
                console.log("check vip posts: ", vipPosts)
                if (vipPosts.result) {
                    const dataUser = await AxiosInstance().get(`/api/get-user-byId/${userId}`)
                    console.log("check data user: ", dataUser)

                    await AsyncStorage.setItem('user', JSON.stringify(dataUser.user));
                    setuser(dataUser.user);
                    Alert.alert('mua vip thành công');
                }
            } else {
                Alert.alert('mua vip thất bại');
            }
        } catch (error) {
            console.log('buy vip error: ', error)
        }
        setNumberOfDays(0)
        setModalVisible(!isModalVisible);
        setIsLoading(false)
    }
    // console.log("check data item: ", data)
    return (
        <View>
            <View style={{ flex: 1 }} >
                {/* <Button title="Show modal" onPress={toggleModal} /> */}

                <Modal isVisible={isModalVisible}>
                    {isLoading ? (
                        <ActivityIndicator
                            style={{ marginTop: 20 }}
                            size="large"
                            color="#3498db"
                        />
                    ) : (
                        <View style={{ backgroundColor: "white", padding: 12 }}>
                            <Text style={{ color: 'black', fontSize: 16 }}>Mua vip cho bài đăng {data.title}</Text>
                            <Text>Vip 3k 1 ngày</Text>
                            <TextInput keyboardType='number-pad' onChangeText={handleInputNumber} placeholder='số ngày bạn muốn vip' />
                            <Text>Số tiền bạn cần trả là: {buy} vnd</Text>
                            <Text style={{ color: "red", display: numberOfDays == 0 ? "flex" : "none" }}>Số ngày mua vip phải lớn hơn 0</Text>
                            <Text style={{ color: "red", display: buy > user.balance ? "flex" : "none" }}>Bạn không đủ đồng tốt</Text>

                            {/* <TouchableOpacity><Text>Mua vip</Text></TouchableOpacity> */}
                            <View style={{ flexDirection: "row", width: "100%" }}>

                                <TouchableOpacity style={{ backgroundColor: '#33CCFF', padding: 5, borderRadius: 5, flex: 1, paddingVertical: 10 }} title="Mua vip" onPress={() => buyVips(data.userid, data._id)} >
                                    <Text style={{ color: "white", textAlign: 'center' }}>Mua vip</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#33CCFF', padding: 5, borderRadius: 5, marginLeft: 10, flex: 1, paddingVertical: 10 }} onPress={toggleModal} >
                                    <Text style={{ color: "white", textAlign: "center" }}>Đóng</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                </Modal>
                <View style={{ backgroundColor: "white", flexDirection: 'row', marginVertical: 1 }}>
                    <View style={{ width: 120, height: 120, padding: 15 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={{ uri: urlApi + data.files[0] }} />
                    </View>
                    <View style={{ paddingVertical: 15, flex: 1, marginRight: 30, height: "100%" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "black", fontSize: 16 }} numberOfLines={2}>{data.title}</Text>
                            <Text style={{ color: "white", fontSize: 16, backgroundColor: 'gray', marginLeft: 4, paddingHorizontal: 2, display: data.isVip ? "flex" : "none" }} numberOfLines={2}>VIP</Text>

                        </View>

                        <Text style={{ color: "red", fontWeight: 600, fontSize: 15, position: 'absolute', bottom: 38 }}>{data.price} d</Text>
                        <Text style={{ position: "absolute", bottom: 15 }}>{data.location}</Text>
                    </View>
                    <TouchableOpacity style={{ position: "absolute", bottom: 15, right: 5, display: data.isVip ? "none" : "flex" }} onPress={toggleModal}><Text style={{ color: "blue", fontSize: 16 }}>Mua vip</Text></TouchableOpacity>
                </View>

            </View >
        </View>
    )
}

export default ItemPosts