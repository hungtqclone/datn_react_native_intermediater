import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CGDStyles } from '../styleSheets/CategoriesDetailstyles';
import { getDetailCategory, getProduct } from './ScreenService';
import PostnewsStack from '../components/navigation/PostnewsTabnavigation';
import { TabView } from 'react-native-tab-view';
import Foryou from './News/Foryou';
import Shopstores from './DetailCategories/shopstores';
const data = [
    { id: 1, image: require('../../image/bannertet.jpg') },
    { id: 2, image: require('../../image/laptopbanner.jpg') }
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
    const [products, setProducts] = useState([]);
    const [categoriesDetail, setCategoriesDetail] = useState([]);
    const [idCategory, setIdCategory] = useState("658fb995b41f1dd5128fa9cf")
    const numColumns = Math.ceil(datatile.length / 2);
    urlApi = 'https://datn-nodejs.onrender.com/'
    const { navigation, route } = props;

    //id của category truyền qua
    // const { params } = route;
    // console.log("id", params._id);
    const widthCasual = Dimensions.get("window").width;
    // Banner slider
    const renderItem = ({ item, index }) => {
        return (
            <View style={CGDStyles.contaiBanner}>
                <Image style={{ width: widthCasual, height: '100%' }} source={item.image}></Image>
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

    const nextScreenListProducts = (idCategory) => {

        navigation.navigate('product', { idCategory });
    }

    // CategoryDetail
    const renderItemCategoryDetail = (value) => {
        const { item } = value;
        return (
            <TouchableOpacity style={CGDStyles.categoryBody} onPress={() => nextScreenListProducts(item._id)}>
                <Image style={CGDStyles.imgcategoy} source={{ uri: `${item.img}` }} />
                <Text style={CGDStyles.txtCategoty} numberOfLines={2}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    const ongetCategoryDetail = async () => {
        const detailCate = await getDetailCategory(idCategory);
        setCategoriesDetail(detailCate);
        // console.log("Danh muc nổi bật 60: >" + JSON.stringify(detailCate));
    }

    const nextScreenProductDetail = (idPostNews) => {
        console.log("next screen product detail with idPostNews = ", idPostNews)
    }
    const renderItemProduct = ({ item }) => {
        return (
            <TouchableOpacity style={CGDStyles.productBody} onPress={() => nextScreenProductDetail(item._id)}>
                <Image style={CGDStyles.imgproduct} source={{ uri: `${urlApi}${item.files}` }} />
                <Text style={CGDStyles.txtnameproduct} >{item.title}</Text>
                <Text style={CGDStyles.txtdetail} numberOfLines={1}>{item.detail}</Text>
                <Text style={CGDStyles.txtprice} >{item.price}</Text>

                <View style={CGDStyles.contaiicontimeaddress}>
                    <Image style={CGDStyles.imgiconprofile} source={require('../../image/Phone.png')} />
                    {/* <Text style={CGDStyles.txtTime} > - {item.created_AT} - </Text> */}
                    <Text style={CGDStyles.txtAdress} >{item.location}</Text>
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
        ongetCategoryDetail(), ongetProducts();
    }, [idCategory]);
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

                <View style={CGDStyles.contaiCategory}>
                    <Text style={CGDStyles.txtTitleCategory}>
                        Danh mục nổi bật
                    </Text>
                    <ScrollView
                        horizontal={true}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: 20 }}>
                        {categoriesDetail.length == 0 ? (
                            <ActivityIndicator
                                style={{ marginTop: 10, marginLeft: 170 }}
                                size="large"
                                color="#3498db"
                            />
                        ) : (<FlatList
                            contentContainerStyle={{
                                alignSelf: 'flex-start',
                            }}
                            numColumns={numColumns}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={categoriesDetail}
                            renderItem={renderItemCategoryDetail}
                            scrollEnabled={false}
                        />)}

                    </ScrollView>
                    <View style={CGDStyles.containerHot}>
                        <View style={CGDStyles.contaiProduct}>
                            <Text style={CGDStyles.txtTitleProduct}>Có gì hot hôm nay</Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={products}
                                renderItem={renderItemProduct}
                                keyExtractor={item => item._id}
                                horizontal={true}
                            />
                            <Pressable style={CGDStyles.presableAll}>
                                <Text style={CGDStyles.txtPreess}>Xem tất cả sản phẩm</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <Shopstores />
                <Foryou />
            </ScrollView>



        </View>
    )
}


export default CategoriesDetail