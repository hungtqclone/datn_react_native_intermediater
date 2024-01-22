import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

import { getProduct } from '../ScreenService';
import { VehicleStyle } from '../../styleSheets/VehiclesStyles';

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

const Vehicles = (props) => {
    const { navigation } = props;
    const widthCasual = Dimensions.get("window").width;
    const [products, setProducts] = useState([]);
    // Banner slider
    const renderItem = ({ item, index }) => {
        return (
            <View style={VehicleStyle.contaiBanner}>
                <Image style={{ width: widthCasual, height: '100%' }} source={item.image}></Image>
            </View>
        );
    }

    //Danh mục Dưới banner slider
    const renderItemTitle = ({ item, index }) => {
        return (
            <View style={VehicleStyle.contaiTitle}>
                <Image style={VehicleStyle.imgTitle} source={item.image}></Image>
                <Text style={VehicleStyle.txtTitle}>{item.title}</Text>
            </View>
        );
    }
    const renderItemProduct = ({ item }) => {

        return (
            <TouchableOpacity style={VehicleStyle.productBodyV}>
                <Image style={VehicleStyle.imgproductV} source={{ uri: `${item.files}` }} />
                <Text style={VehicleStyle.txtnameproductV} >{item.title}</Text>
                <Text style={VehicleStyle.txtdetailV} numberOfLines={1}>{item.detail}</Text>

                <View style={VehicleStyle.contaiiPriceV}>
                <Text style={VehicleStyle.txtnamePriceV} >Giá xe mới</Text>
                    <Text style={VehicleStyle.txtpriceV} >{item.price}</Text>
                </View>

            </TouchableOpacity>
        );
    }
    const renderItemPostnew = ({ item }) => {
        return (
            <TouchableOpacity style={VehicleStyle.productBody}>
                <Image style={VehicleStyle.imgproduct} source={{ uri: `${item.files}` }} />
                <Text style={VehicleStyle.txtnameproduct} >{item.title}</Text>
                <Text style={VehicleStyle.txtdetail} numberOfLines={1}>{item.detail}</Text>
                <Text style={VehicleStyle.txtprice} >{item.price}</Text>

                <View style={VehicleStyle.contaiicontimeaddress}>
                    <Image style={VehicleStyle.imgiconprofile} source={require('../../../image/Phone.png')} />
                    <Text style={VehicleStyle.txtTime} > - {item.created_AT} - </Text>
                    <Text style={VehicleStyle.txtAdress} >{item.location}</Text>
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
        <View style={VehicleStyle.body}>
            <View style={VehicleStyle.containerse}>
                <View style={VehicleStyle.viewSearch}>
                    <TextInput style={VehicleStyle.txpSearch} placeholder='Tìm kiếm trên chợ tốt' />
                    <Image style={VehicleStyle.imgSearch} source={require('../../../image/search.png')} />
                </View>
                <Image style={VehicleStyle.icon} source={require('../../../image/notificaiton.png')} />
                <Image style={VehicleStyle.icon} source={require('../../../image/chatting.png')} />
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
                <View style={VehicleStyle.contaiBannertong} >
                    <Text style={VehicleStyle.txttitleKP} >Khám phá danh mục xe cộ</Text>
                    <FlatList
                        data={datatile}
                        renderItem={renderItemTitle}
                        horizontal={true}
                        keyExtractor={item => item.id.toString()}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Image style={{ width: '100%', height: 80 }} source={require('../../../image/bannercar3.jpg')}></Image>
                <View style={VehicleStyle.contaiProduct}>
                    <Text style={VehicleStyle.txtTitleProduct}>Danh mục  </Text>
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
                    <Text style={VehicleStyle.txtViewAll}>Xem thêm</Text>
                </View>
                <View style={VehicleStyle.containerHotV}>
                    <View style={VehicleStyle.contaiProductV}>
                        <Text style={VehicleStyle.txtTitleProductV}>Thông tin các dòng xe</Text>
                        <FlatList
                            data={products}
                            renderItem={renderItemProduct}

                            keyExtractor={item => item._id}
                            horizontal={true}
                        />
                        <Pressable style={VehicleStyle.presableAllV}>
                            <Text style={VehicleStyle.txtPreessV}>Xem thông tin các dòng xe khác</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={VehicleStyle.contaiProduct}>
                    <Text style={VehicleStyle.txtTitleProduct}>Cửa hàng xe nỗi bật  </Text>
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
                    <Text style={VehicleStyle.txtViewAll}>Xem thêm</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Vehicles
