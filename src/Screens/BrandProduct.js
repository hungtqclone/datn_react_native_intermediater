import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { getBrands, getProductByBrandid, getProductByidCate } from './ScreenService'
import { productStyles } from '../styleSheets/ProductStyles'
import PostnewsStack from '../components/navigation/PostnewsTabnavigation'
import { urlAPI } from '../components/helpers/urlAPI'
import { styleNumber } from '../styleSheets/styleJS'
import AxiosInstance from '../components/helpers/Axiosintance'
const data = [
    { id: 1, title: 'Điện thoại' },
    { id: 2, title: 'Sam Sung' },
];


const dataAddress = [
    { id: 1, title: 'Khu vực gần tôi' },
    { id: 2, title: 'Tp Hồ Chí Minh' },
    { id: 3, title: 'Hà nội' },
    { id: 4, title: 'Đà nẵng' },
    { id: 5, title: 'Phan thiết' },
];
const BrandProduct = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    const { idBrand } = params;
    const [idBrandST, setIdBrand] = useState(idBrand);
    const { idCategory } = params;
    const [idCate, setIdCate] = useState(idCategory);
    const [post, setPostNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingPage, setIsLoadingPage] = useState(false)
    const [dataSearch, setDataSearch] = useState(undefined)
    const [page, setPage] = useState(1)
    const [seeMore, setSeeMore] = useState(true)
    // const ongetBrands = async () => {
    //     const brands = await getBrands(idCate);
    //     setBrands(brands);
    //     // console.log("Sản Phẩm :83 >" + JSON.stringify(products));
    // }
    const ongetPosst = async () => {
        const posst = await getProductByBrandid(idCategory,idBrandST, page);
        console.log('next screen product with idBrand = ', idBrandST + "idCate =" + idCate);
        console.log('post data = ', post);
        
        // console.log('next screen product with idBrand = ', idBrandST + "idCate =" + idCate);
        // console.log('post data = ', post);

        if (posst.length != 10) {
            setSeeMore(false)
        }
        if (page == 1) {    
            setPostNews(posst);
        } else {
            setPostNews([...post, ...posst])
        }
        if (posst.length > 0) {
            setIsLoading(false);
        }
        if (posst.length == 10) {
            setPage(page + 1)
        }
        // console.log("Sản Phẩm :83 >" + JSON.stringify(products));
    }
    useEffect(() => {
        ongetPosst();
    }, []);
    // useEffect(() => {
    //     fetchData()
    // }, []);

    const fetchData = () => {
        setIsLoadingPage(true)
        setTimeout(() => {
            ongetPosst();
            setIsLoadingPage(false);
        }, 2000);
    }
    // const numColumns = Math.ceil(dataAddress.length / 2);
    const renderFill = ({ item, index }) => {
        return (
            <Pressable style={productStyles.contaifillScroll}>
                <Text style={productStyles.txtTQ2}>{item.title} </Text>
                <Image style={productStyles.icondown} source={require('../../image/down.png')} />
            </Pressable>
        );
    }

    // const renderAdress = ({ item, index }) => {
    //     return (
    //         <Pressable style={productStyles.contaifillScrollAdress}>
    //             <Text style={productStyles.txtTQ}>{item.title} </Text>
    //         </Pressable>
    //     );
    // }

    const formatDate = (datetime) => {
        const date = new Date(datetime);
        const day = date.toLocaleDateString('en-GB');
        return `${day}`;
    };

    const truncate = (input, length) => input.length > length ? `${input.substring(0, length)}...` : input;

    // danh mục hãng
    // const renderItemBrands = ({ item, index }) => {
    //     return (
    //         <View style={productStyles.contaiTitle}>
    //             <Image style={productStyles.imgTitle} source={{ uri: `${item.files}` }}></Image>
    //             <Text style={productStyles.txtTitle2}>{item.nameBrand}</Text>
    //         </View>
    //     );
    // }

    // postnews
    const renderPostNews = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('DetailProduct', { id_product: item._id })} style={productStyles.productBody2}>
                <Image style={productStyles.imgproduct} source={{ uri: `${item.files[0]}` }} />
                <View style={productStyles.contaiColum}>
                    <Text style={productStyles.txtTitle} numberOfLines={1}>{item.title}</Text>
                    <Text style={productStyles.txtDetail} numberOfLines={2}>{item.detail}</Text>
                    <Text style={productStyles.txtprice} >{styleNumber(item.price)} đ</Text>

                    <View style={productStyles.contaiicontimeaddress}>
                        <Image style={productStyles.imgiconprofile} source={require('../../image/Phone.png')} />
                        <Text style={productStyles.txtTime} > - {formatDate(item.created_AT)} - </Text>
                        <Text style={productStyles.txtAdress} numberOfLines={1}>{truncate(item.location, 25)}</Text>
                    </View>

                </View>
                <Image style={[productStyles.iconVip, { display: item.isVip ? 'flex' : 'none' }]} source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/14/10/star-147919_1280.png' }} />

            </TouchableOpacity>
        );
    }
    const renderFooter = () => {
        return isLoadingPage ? (
            <View style={{ paddingVertical: 15 }}>
                <ActivityIndicator size="large" color="#3498db" />
            </View>
        ) : (
            <TouchableOpacity onPress={fetchData} style={{ paddingVertical: 15, backgroundColor: "white", alignItems: 'center', display: seeMore ? 'flex' : 'none' }}>
                <Text style={{ color: "green", fontWeight: 500 }}>Xem thêm</Text>
            </TouchableOpacity>
        );
    };

    const handleLoadMore = () => {
    };

    const handleInputSearch = async (text) => {
        try {
            if (text) {
                const dataPostsSearch = await AxiosInstance().get(`/api/postnews/search/${text}`)
                setDataSearch(dataPostsSearch.data)
            } else {
                setDataSearch(undefined)
            }

        } catch (error) {
            console.log("error handle input search product.js: ", error)
        }
    }
    return (
        <View style={productStyles.body}>

            <View style={productStyles.containerse}>
                <View style={productStyles.viewSearch}>
                    <TextInput onChangeText={handleInputSearch} style={productStyles.txpSearch} placeholder='Tìm kiếm' />
                    <Image style={productStyles.imgSearch} source={require('../../image/search.png')} />
                </View>
                <Image style={productStyles.icon} source={require('../assets/images/icons/icon_notification.png')} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('ChatNavigation')}
                >
                    <Image style={productStyles.icon} source={require('../assets/images/icons/icon_chat.png')} />
                </TouchableOpacity>
            </View>

            <ScrollView
                scrollEnabled={true}
            >
                <View style={productStyles.contaicity}>
                    <View style={productStyles.viewrow}>
                        <Image style={productStyles.iconadd} source={require('../../image/icon_address.png')} />
                        <Text> Khu vực: </Text>
                        <Pressable style={productStyles.viewrow}>
                            <Text style={productStyles.txtTQ}>Toàn quốc </Text>
                            <Image style={productStyles.icondown} source={require('../../image/down.png')} />
                        </Pressable>
                    </View>
                    <View style={productStyles.contaifilter}>
                        {/* <Pressable style={productStyles.contaifill}>
                            <Image style={productStyles.iconfilter} source={require('../../image/icon_filter.png')} />
                            <Text style={productStyles.txtTQ}>Lọc </Text>
                        </Pressable> */}
                        {/* <FlatList
                            data={data}
                            renderItem={renderFill}
                            horizontal={true}
                            pagingEnabled={true}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        /> */}
                    </View>
                </View>
{/* 
                <View style={productStyles.contaiAdresss}> */}
                    {/* <Text style={productStyles.txtGY}>Gợi ý khu vực </Text>
                    <FlatList
                        contentContainerStyle={{
                            alignSelf: 'flex-start',
                        }}
                        numColumns={numColumns}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={dataAddress}
                        renderItem={renderAdress}
                        scrollEnabled={false}
                    /> */}
                {/* </View> */}
                {/* <View>
                    <FlatList
                        data={brand}
                        renderItem={renderItemBrands}
                        horizontal={true}
                        keyExtractor={item => item._id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View> */}

                <View>
                    {isLoading ? (
                        <ActivityIndicator
                            style={{ marginTop: 20 }}
                            size="large"
                            color="#3498db"
                        />
                    ) : (
                        <FlatList
                            scrollEnabled={false}
                            data={dataSearch ? dataSearch : post}
                            renderItem={renderPostNews}
                            horizontal={false}
                            keyExtractor={item => item._id.toString()}
                            showsHorizontalScrollIndicator={false}
                            ListFooterComponent={renderFooter}
                            onEndReached={handleLoadMore}
                            onEndReachedThreshold={0.1}
                        />
                    )}

                </View>
            </ScrollView>
        </View>
    )
}

export default BrandProduct