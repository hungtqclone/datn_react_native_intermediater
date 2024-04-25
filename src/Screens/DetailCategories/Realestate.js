import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

import { RLSTtyles } from '../../styleSheets/RealestateStytles'
import { getProduct } from '../ScreenService';

const datatile = [
    { id: 1, title: 'Mua bán', image: require('../../../image/icon_muaban.jpg') },
    { id: 2, title: 'Cho thuê', image: require('../../../image/icon_chothue.jpg') },
    { id: 3, title: 'Dự án', image: require('../../../image/icon_duan.jpg') },
    { id: 4, title: 'Mua giới', image: require('../../../image/icon_muagioi.jpg') },
];

const dataSlider = [
    { id: 1, image: require('../../../image/Sinhvien.png') },
    { id: 2, image: require('../../../image/bannerchotot.png') }
];

const dataVIP = [
    { id: 1, image: require('../../../image/img_vipro.jpg') },
    { id: 2, image: require('../../../image/img_viptkdn.jpg') },
    { id: 3, image: require('../../../image/img_vipmoigioi.jpg') },

];

const Realestate = (props) => {
    const { navigation } = props;
    const widthCasual = Dimensions.get("window").width;
    const [products, setProducts] = useState([]);
    // Banner slider
    const renderItem = ({ item, index }) => {
        return (
            <View style={RLSTtyles.contaiBanner}>
                <Image style={{ width: widthCasual, height: '100%' }} source={item.image}></Image>
            </View>
        );
    }

    //Danh mục Dưới banner slider
    const renderItemTitle = ({ item, index }) => {
        return (
            <View style={RLSTtyles.contaiTitle}>
                <Image style={RLSTtyles.imgTitle} source={item.image}></Image>
                <Text style={RLSTtyles.txtTitle}>{item.title}</Text>
            </View>
        );
    }

    const renderItemVIP = ({ item, index }) => {
        return (
            <Pressable style={RLSTtyles.contaiTitleVIP}>
                <Image style={RLSTtyles.imgTitleVIP} source={item.image}></Image>
            </Pressable>
        );
    }
    const renderItemPostnew = ({ item }) => {
        return (
            <TouchableOpacity style={RLSTtyles.productBody}>
                <Image style={RLSTtyles.imgproduct} source={{ uri: `${item.files}` }} />
                <Text style={RLSTtyles.txtnameproduct} >{item.title}</Text>
                <Text style={RLSTtyles.txtdetail} numberOfLines={1}>{item.detail}</Text>
                <Text style={RLSTtyles.txtprice} >{item.price} đ</Text>

                <View style={RLSTtyles.contaiicontimeaddress}>
                    <Image style={RLSTtyles.imgiconprofile} source={require('../../../image/Phone.png')} />
                    <Text style={RLSTtyles.txtTime} > - {item.created_AT} - </Text>
                    <Text style={RLSTtyles.txtAdress} >{item.location}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    const ongetProducts = async () => {
        const products = await getProduct();
        setProducts(products);
        // console.log("Sản Phẩm :83 >" + JSON.stringify(products));
    }
    useEffect(() => {
        ongetProducts();
    }, []);
    return (
        <View style={RLSTtyles.body}>
            <View style={RLSTtyles.containerse}>
                <View style={RLSTtyles.viewSearch}>
                    <TextInput style={RLSTtyles.txpSearch} placeholder='Tìm kiếm trên chợ tốt' />
                    <Image style={RLSTtyles.imgSearch} source={require('../../../image/search.png')} />
                </View>
                <Image style={RLSTtyles.icon} source={require('../../../image/notificaiton.png')} />
                <Image style={RLSTtyles.icon} source={require('../../../image/chatting.png')} />
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
                <View style={RLSTtyles.contaiBannertong} >
                    <Text style={RLSTtyles.txttitleKP} >Khám phá nhà tốt</Text>
                    <FlatList
                        data={datatile}
                        renderItem={renderItemTitle}
                        horizontal={true}
                        keyExtractor={item => item.id.toString()}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={RLSTtyles.contaiBannertongPK} >
                    <View style={RLSTtyles.titlePacket}>
                        <Text style={RLSTtyles.txttitlePK} >Dịch vụ dành cho mua giới</Text>
                        <Pressable style={RLSTtyles.pressables} ><Text style={RLSTtyles.txtAll}>Xem tất cả</Text></Pressable>
                    </View>
                    <FlatList
                        data={dataVIP}
                        renderItem={renderItemVIP}
                        horizontal={true}
                        keyExtractor={item => item.id.toString()}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={RLSTtyles.contaiProduct}>
                    <Text style={RLSTtyles.txtTitleProduct}>Mua bán bất động sản</Text>
                    <ScrollView
                        horizontal={true}
                    >
                        <FlatList
                            data={products}
                            renderItem={renderItemPostnew}
                            horizontal={true}
                            keyExtractor={item => item._id}
                            scrollEnabled={false}
                        />
                    </ScrollView>
                    <Pressable><Text style={RLSTtyles.txtViewAll}>Xem thêm</Text></Pressable>
                </View>

                <View style={RLSTtyles.contaiProduct}>
                    <Text style={RLSTtyles.txtTitleProduct}>Cho thuê bất động sản</Text>
                    <ScrollView
                        horizontal={true}
                    >
                        <FlatList
                            data={products}
                            renderItem={renderItemPostnew}
                            horizontal={true}
                            keyExtractor={item => item._id}
                            scrollEnabled={false}
                        />
                    </ScrollView>
                    <Text style={RLSTtyles.txtViewAll}>Xem thêm</Text>
                </View>
                <Image style={{ width: widthCasual, height: 110 }} source={require('../../../image/img_doitac.jpg')}></Image>
                <View style={RLSTtyles.contaiProduct}>
                    <Text style={RLSTtyles.txtTitleProduct}>Dự án được quan tâm </Text>
                    <ScrollView
                        horizontal={true}
                    >
                        <FlatList
                            data={products}
                            renderItem={renderItemPostnew}
                            horizontal={true}
                            keyExtractor={item => item._id}
                            scrollEnabled={false}
                        />
                    </ScrollView>
                    <Text style={RLSTtyles.txtViewAll}>Xem thêm</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Realestate
