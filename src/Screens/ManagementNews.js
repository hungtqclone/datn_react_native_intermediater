/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable, useWindowDimensions, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { MGNStyles } from '../styleSheets/ManagementNewsStyles'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AxiosInstance from '../components/helpers/Axiosintance'
import { UserContext } from '../components/users/UserContext'

const dataPackage = [
    { id: 1, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 2, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 3, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 4, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 5, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },

]



const data = {
    "_id": {
        "$oid": "6596a557f44c206091cbb025"
    },
    "title": "iPhone 13 Pro Max 256GB",
    "status": true,
    "detail": "IPhone 13 Pro Max 256Gb Pin 86 Zin full có Gl",
    "location": "Phan thiết",
    "price": 12500000,
    "created_AT": "2024-01-04",
    "files": "https://cdn.chotot.com/W_w72lyd9UNIP5VTJhFKn4vYQHlldPnIsOpIWCvGKvI/preset:listing/plain/21528fc6116d156ca3bf5f7b3bed1605-2858403316627653829.webp",
    "role": "mua",
    "userid": {
        "$oid": "6587edd36c13142ab0adcd86"
    },
    "activable": true,
    "brandid": "658fbffe082361fcec13f8ba",
    "__v": 0
}

const renderItemPosts = ({ item }) => {
    console.log("check data item render posts:", item);
    return (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} >
            <View style={{ backgroundColor: "white", flexDirection: 'row', marginVertical: 1 }}>
                <View style={{ width: 120, height: 120, padding: 15 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.files }} />
                </View>
                <View style={{ paddingVertical: 15, flex: 1, marginRight: 30, height: "100%" }}>
                    <Text style={{ color: "black", fontSize: 16 }} numberOfLines={2}>{item.title}</Text>
                    <Text style={{ color: "red", fontWeight: 600, fontSize: 15, position: 'absolute', bottom: 38 }}>{item.price} d</Text>
                    <Text style={{ position: "absolute", bottom: 15 }}>{item.location}</Text>
                </View>
            </View>

        </View >
    )
}

const FirstRoute = () => {
    const [dataPosts, setDataPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { user } = useContext(UserContext)
    const userId = user._id

    const fetchData = async () => {

        const resultPosts = await AxiosInstance().get(`/api/postnews/user/${userId}`)
        console.log("check dataPosts: ", resultPosts)
        setDataPosts(resultPosts)
        if (resultPosts.result) {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} >
            <FlatList
                data={dataPosts}
                renderItem={renderItemPosts}
                horizontal={false}
                keyExtractor={item => item._id}
                showsHorizontalScrollIndicator={false}
            />
        </View >
    )
}

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    second2: SecondRoute,
    second3: SecondRoute,
    second4: SecondRoute,
    second5: SecondRoute,
});

const ManagementNews = (props) => {
    const { navigation } = props;
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Đang hiển thị' },
        { key: 'second', title: 'Hết hạn' },
        { key: 'second2', title: 'Bị từ chối' },
        { key: 'second3', title: 'Cần thanh toán' },
        { key: 'second4', title: 'Tin nháp' },
        { key: 'second5', title: 'Chờ duyệt' },
    ]);

    // Package
    const renderItemPackage = ({ item, index }) => {
        return (
            <View style={MGNStyles.containerIemPackge}>
                <Image style={MGNStyles.imgPackage} source={item.image}></Image>
                <Text style={MGNStyles.txtPackage}>{item.title}</Text>
            </View>
        );
    }
    return (
        <View style={MGNStyles.body}>
            <View style={MGNStyles.containerse}>
                <Text style={MGNStyles.txtTitle}>Quản lý tin đăng</Text>
                <View style={MGNStyles.contaiimg}>
                    <Image style={MGNStyles.icon} source={require('../../image/searchtabar.png')} />
                    <Image style={MGNStyles.icon} source={require('../../image/notificaiton.png')} />
                    <TouchableOpacity onPress={() => navigation.navigate('ChatNavigation')} >
                        <Image style={MGNStyles.icon} source={require('../../image/chatting.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={MGNStyles.containerPackage}>
                <FlatList
                    data={dataPackage}
                    renderItem={renderItemPackage}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={MGNStyles.bodyNews}>
                <View style={MGNStyles.contaiProfile}>
                    <View style={MGNStyles.contaiJus}>
                        <Image source={require('../../image/Apple.png')} style={MGNStyles.imgProfile} ></Image>
                        <Text style={MGNStyles.txtProfile}>Võ Hoàng Thanh</Text>
                    </View>
                    <View style={MGNStyles.contaiPoint}>
                        <Image source={require('../../image/Apple.png')} style={MGNStyles.imgcoint}></Image>
                        <Text style={MGNStyles.txtPoint}>0</Text>
                        <TouchableOpacity style={MGNStyles.btnTouch}>
                            <Image style={MGNStyles.imgcoint} source={require('../../image/plus.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default ManagementNews