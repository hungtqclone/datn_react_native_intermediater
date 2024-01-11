import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CGDStyles } from '../styleSheets/CategoriesDetailstyles';
const data = [
    { id: 1, image: require('../../image/Sinhvien.png') },
    { id: 2, image: require('../../image/bannerchotot.png') }
];
const datatile = [
    { id: 1, title: 'Thu mua điện thoại', image: require('../../image/icon_banngay.jpg') },
    { id: 2, title: 'Nạp đồng tốt', image: require('../../image/icon_dongxu.jpg') },
    { id: 3, title: 'Chợ tốt ưu đãi', image: require('../../image/icon_uudai.jpg') },
    { id: 4, title: 'Thu mua ô tô', image: require('../../image/icon_car.jpg') },
    { id: 5, title: 'Gói pro', image: require('../../image/icon_pro.jpg') },
    { id: 6, title: 'Tin đã lưu', image: require('../../image/icon_hearth.jpg') },
    { id: 7, title: 'Đăng tin cho tặng', image: require('../../image/icon_qua.jpg') },
    { id: 8, title: 'Tiềm kiếm đã lưu', image: require('../../image/icon_savenew.jpg') },
    { id: 9, title: 'Tiềm kiếm đã lưu', image: require('../../image/icon_savenew.jpg') },
    { id: 10, title: 'Tiềm kiếm đã lưu', image: require('../../image/icon_savenew.jpg') },
    { id: 11, title: 'Tiềm kiếm đã lưu', image: require('../../image/icon_savenew.jpg') },
]
const CategoriesDetail = (props) => {
    const { navigation,route } = props;
    const {params} = route;
    console.log("Id của CategoryDetail",params._id);
    const widthCasual = Dimensions.get("window").width;
    // Banner slider
    const renderItem = ({ item, index }) => {
        return (
            <View style={CGDStyles.contaiBanner}>
                <Image style={{ width: widthCasual, }} source={item.image}></Image>
            </View>
        );
    }
    //Danh mục Dưới banner slider
    const renderItemTitle = ({ item, index }) => {
        return (
            <View style={CGDStyles.contaiTitle}>
                <Image style={CGDStyles.imgTitle} source={item.image}></Image>
                <Text style={CGDStyles.txtTitle}>{item.title}</Text>
            </View>
        );
    }
    return (
        <View style={CGDStyles.body}>
            <View style={CGDStyles.containerse}>
                <View style={CGDStyles.viewSearch}>
                    <TextInput style={CGDStyles.txpSearch} placeholder='Tìm kiếm trên chợ tốt' />
                    <Image style={CGDStyles.imgSearch} source={require('../../image/search.png')} />
                </View>
                <Image style={CGDStyles.icon} source={require('../../image/notificaiton.png')} />
                <Image style={CGDStyles.icon} source={require('../../image/chatting.png')} />
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={CGDStyles.contaiBannerFla}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        horizontal
                        pagingEnabled={true}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    <FlatList
                        data={datatile}
                        renderItem={renderItemTitle}
                        horizontal={true}
                        keyExtractor={item => item.id.toString()}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default CategoriesDetail