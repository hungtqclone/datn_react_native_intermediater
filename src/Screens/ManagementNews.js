import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MGNStyles } from '../styleSheets/ManagementNewsStyles'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const dataPackage = [
    { id: 1, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 2, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 3, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 4, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 5, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },

]

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

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

const ManagementNews = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = useState([
        { key: 'first', title: 'ĐANG HIỂN THỊ' },
        { key: 'second', title: 'HẾT HẠN' },
        { key: 'second2', title: 'BỊ TỪ CHỐI' },
        { key: 'second3', title: 'CẦN THANH TOÁN' },
        { key: 'second4', title: 'TIN NHÁP' },
        { key: 'second5', title: 'CHỜ DUYỆT' },
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
                    <Image style={MGNStyles.icon} source={require('../../image/chatting.png')} />
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

                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                >
                </TabView>

            </View>

        </View>



    );
}
export default ManagementNews