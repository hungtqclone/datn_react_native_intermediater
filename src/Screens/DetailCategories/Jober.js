import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

import { getProduct } from '../ScreenService';
import { JobStyles } from '../../styleSheets/JoberStyles';
import { Divider } from 'react-native-paper';
import styles from 'rn-range-slider/styles';

const datatile = [
    { id: 1, title: 'Bán hàng', image: 'https://cdn.chotot.com/admincentre/hNaOr70kP-DZsamwTk-F5xLNY55LleF4aG6W_GSRWtQ/preset:raw/plain/762e39389a9ad43be12d20a3ea96d371-2787152571195383189.jpg' },
    { id: 2, title: 'Nhân viên phục vụ', image: 'https://cdn.chotot.com/admincentre/550r-_J6HSjS9TFF-YswV_eNURa9VqIa8NzJ7FpDeKg/preset:raw/plain/7571f23bbb0290870f94a4a8207fce3f-2787152427833590447.jpg' },
    { id: 3, title: 'Tài xế giao hàng xe máy', image: 'https://cdn.chotot.com/admincentre/RzZRx3CxIPHzccrzEJkeUzTa3BVKgVSYg7asIrHmtp0/preset:raw/plain/76c9d9ea9e111090138ef6b972323dc8-2745358638816092486.jpg' },
    { id: 4, title: 'Tạp vụ', image: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg' },
    { id: 5, title: 'Pha chế', image: 'https://cdn.chotot.com/admincentre/BJJVsIwPfmVJpxSp53dY66w_F7DrtLYAQidw98AVlJ4/preset:raw/plain/7e49868ab9e8d8c97d1004c5cc291da7-2809865252018599952.jpg' },
    { id: 6, title: 'Phụ bếp', image: 'https://cdn.chotot.com/admincentre/XESTmhycA_O-JemkKht-N_Ij2T5YXEgWzu65LKq8Wjg/preset:raw/plain/1177b339e4742e186ce803430356063b-2809865576440067787.jpg' },
    { id: 7, title: 'Nhân viên kinh doanh', image: 'https://cdn.chotot.com/admincentre/YXn-_z7XhrB9XWo46qaCtB_5ZYoSMvMBdQa0K51AzU4/preset:raw/plain/8b444641af7d8b936ef826af6a316ecf-2787153279100879535.jpg' },

];

const dataSlider = [
    { id: 1, image: require('../../../image/banner_job.png') },
    { id: 2, image: require('../../../image/banner_job2.jpg') }
];

const dataVIP = [
    { id: 1, image: require('../../../image/img_tindang.png') },
    { id: 2, image: require('../../../image/img_vipro.jpg') },
    { id: 3, image: require('../../../image/img_viptkdn.jpg') },
    { id: 4, image: require('../../../image/img_vipmoigioi.jpg') },

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
                <Image style={JobStyles.imgTitle} source={{ uri: item.image }}></Image>
                <Text style={JobStyles.txtTitle}>{item.title}</Text>
            </View>
        );
    }

    // Gói packet VIP
    const renderItemVIP = ({ item, index }) => {
        return (
            <Pressable style={JobStyles.contaiTitleVIP}>
                <Image style={JobStyles.imgTitleVIP} source={item.image}></Image>
            </Pressable>
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
                    <Divider />
                    <Pressable>
                        <Text style={JobStyles.txtViewAll}>Xem tất cả nghành nghề</Text>
                    </Pressable>
                </View>
                <View style={JobStyles.contaiPaket}>
                    <View style={JobStyles.bodytop}>
                        <Image style={JobStyles.img} source={require('../../../image/img_job.jpg')}></Image>
                        <Pressable style={JobStyles.PresBody}>
                            <Text style={JobStyles.txthomejob}>Dành cho nhà tuyển dụng</Text>
                            <Text style={JobStyles.txttitlejob}>Trải nghiệm các công cụ đắc lực: Ưu đãi NTD, Quản lý ứng viên, Tìm ứng viên mới, Gói Tuyển Dụng,...</Text>
                        </Pressable>
                        <Image style={JobStyles.imgJob} source={require('../../../image/show-right.png')}></Image>
                    </View>
                    <Pressable style={JobStyles.bodybottom}>
                        <Image source={require('../../../image/loudspeaker.png')}></Image>
                        <Text >Gói tuyển dụng giảm đến 50% cho người mới</Text>
                        <Image style={JobStyles.imgJob} source={require('../../../image/show-right.png')}></Image>
                    </Pressable>

                    <FlatList
                        data={dataVIP}
                        renderItem={renderItemVIP}
                        horizontal={true}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Jobber
