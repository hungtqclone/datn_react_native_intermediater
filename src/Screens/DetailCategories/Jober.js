import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

import { getProduct } from '../ScreenService';
import { JobStyles } from '../../styleSheets/JoberStyles';

const datatile = [
    { id: 1, title: 'Ô tô', image: require('../../../image/icon_carV.jpg') },
    { id: 2, title: 'Xe máy', image: require('../../../image/icon_motobikeV.jpg') },
    { id: 3, title: 'Xe tải, xe ben', image: require('../../../image/icon_trunk.jpg') },
    { id: 4, title: 'Xe điện', image: require('../../../image/icon_motobikeVin.jpg') },
    { id: 5, title: 'Xe đạp', image: require('../../../image/icon_bycikel.jpg') },
    { id: 6, title: 'Phương tiện khác', image: require('../../../image/icon_carK.jpg') },
    { id: 7, title: 'Phụ tùng xe', image: require('../../../image/icon_setttingk.jpg') },

];

const dataSlider = [
    { id: 1, image: require('../../../image/bannercar.jpg') },
    { id: 2, image: require('../../../image/bannercar2.jpg') }
];

const dataVIP = [
    { id: 1, image: require('../../../image/img_vipro.jpg') },
    { id: 2, image: require('../../../image/img_viptkdn.jpg') },
    { id: 3, image: require('../../../image/img_vipmoigioi.jpg') },

];

const Jobber = (props) => {
    const { navigation } = props;
    const widthCasual = Dimensions.get("window").width;
    const [products, setProducts] = useState([]);
    // Banner slider
    const renderItem = ({ item, index }) => {
        return (
            <View style={JobStyles.contaiBanner}>
                <Image style={{ width: widthCasual, height: '100%' }} source={item.image}></Image>
            </View>
        );
    }

    //Danh mục Dưới banner slider
    const renderItemTitle = ({ item, index }) => {
        return (
            <View style={JobStyles.contaiTitle}>
                <Image style={JobStyles.imgTitle} source={item.image}></Image>
                <Text style={JobStyles.txtTitle}>{item.title}</Text>
            </View>
        );
    }
    


    return (
        <View style={JobStyles.body}>
            <View style={JobStyles.containerse}>
                <View style={JobStyles.viewSearch}>
                    <TextInput style={JobStyles.txpSearch} placeholder='Tìm kiếm trên chợ tốt' />
                    <Image style={JobStyles.imgSearch} source={require('../../../image/search.png')} />
                </View>
                <Image style={JobStyles.icon} source={require('../../../image/notificaiton.png')} />
                <Image style={JobStyles.icon} source={require('../../../image/chatting.png')} />
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <FlatList
                        data={dataSlider}
                        renderItem={renderItem}
                        horizontal
                        pagingEnabled={true}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={JobStyles.contaiBannertong} >
                    <Text style={JobStyles.txttitleKP} >Việc làm theo nghành nghề</Text>
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

export default Jobber
