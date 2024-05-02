/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable, useWindowDimensions, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { MGNStyles } from '../styleSheets/ManagementNewsStyles'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AxiosInstance from '../components/helpers/Axiosintance'
import { UserContext } from '../components/users/UserContext'
import PostsHidden from './managementPosts/PostsHidden'
import PostsPresently from './managementPosts/PostsPresently'
import TopTabManagementPosts from './managementPosts/TopTabManagementPosts'
import { styleNumber, formatDate } from '../styleSheets/styleJS'

const Tab = createMaterialTopTabNavigator();

const avatarDefault = 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg';

// const dataPackage = [
//     { id: 1, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
//     { id: 2, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
//     { id: 3, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
//     { id: 4, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
//     { id: 5, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
// ]

const FirstRoute = () => {
    const [dataPosts, setDataPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { user, checkLogIn } = useContext(UserContext)
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
        checkLogIn()
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} >

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
    const { user } = useContext(UserContext)
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
    const renderTabBar = props => (

        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'yellow' }}
            style={{ backgroundColor: 'transparent' }}
            activeColor='black'
            inactiveColor='gray'
            renderLabel={({ route, focused, color }) => (
                <View
                    style={{
                        width: '100%',
                    }}
                >
                    <Text style={{ color }}>{route.title}</Text>
                </View>
            )}
        />
    );
    // Package
    // const renderItemPackage = ({ item, index }) => {
    //     return (
    //         <View style={MGNStyles.containerIemPackge}>
    //             <Image style={MGNStyles.imgPackage} source={item.image}></Image>
    //             <Text style={MGNStyles.txtPackage}>{item.title}</Text>
    //         </View>
    //     );
    // }

    return (
        <View style={MGNStyles.body}>
            <View style={MGNStyles.containerse}>
                <Text style={MGNStyles.txtTitle}>Quản lý tin đăng</Text>
                <View style={MGNStyles.contaiimg}>
                    {/* <Image style={MGNStyles.icon} source={require('../assets/images/icons/icon_search.png')} /> */}
                    <Image style={MGNStyles.icon} source={require('../assets/images/icons/icon_notification.png')} />
                    <TouchableOpacity onPress={() => navigation.navigate('ChatNavigation')} >
                        <Image style={MGNStyles.icon} source={require('../assets/images/icons/icon_chat.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={MGNStyles.containerPackage}>
                <FlatList
                    data={dataPackage}
                    renderItem={renderItemPackage}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View> */}
            <View style={MGNStyles.bodyNews}>
                <View style={MGNStyles.contaiProfile}>
                    <View style={MGNStyles.contaiJus}>
                        <Image
                            source={
                                user && user.avatar
                                    ? { uri: user.avatar }
                                    : { uri: avatarDefault }
                            }
                            style={MGNStyles.imgProfile}
                        />
                        <Text style={MGNStyles.txtProfile}>{user.name}</Text>
                    </View>
                    <View style={MGNStyles.contaiPoint}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginRight: 5,
                            color: 'black'
                        }}>
                            {styleNumber(user.balance)}
                        </Text>
                        <Image
                            source={require('../assets/images/icons/icon_coin.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </View>
                </View>

                <TopTabManagementPosts />
                {/* <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                >
                </TabView> */}

            </View>

        </View>



    );
}
export default ManagementNews