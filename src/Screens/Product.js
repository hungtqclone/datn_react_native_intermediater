import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getBrands, getProductByidCate } from './ScreenService'
import { productStyles } from '../styleSheets/ProductStyles'
import PostnewsStack from '../components/navigation/PostnewsTabnavigation'
const data = [
    { id: 1, title: 'Điện thoại' },
    { id: 2, title: 'Giá' },
    { id: 3, title: 'Hãng' },
    { id: 4, title: 'Dung lượng' },
    { id: 5, title: 'Màu sắc' },
    { id: 6, title: 'Tình trạng' },
    { id: 7, title: 'Ship COD' }
];

const dataFindkey = [
    { id: 1, title: 'Điện thoại rẻ' },
    { id: 2, title: 'IPhone 14' },
    { id: 3, title: 'SamSung Galaxy S22' },
    { id: 4, title: 'Điện thoại cũ' },
    { id: 5, title: 'Điện thoại dưới 2 triệu' },
    { id: 6, title: 'Điện thoại dưới 5 triệu' },
    { id: 7, title: 'Điện thoại dưới 7 triệu' }
];

const dataAddress = [
    { id: 1, title: 'Khu vực gần tôi' },
    { id: 2, title: 'Tp Hồ Chí Minh' },
    { id: 3, title: 'Hà nội' },
    { id: 4, title: 'Đà nẵng' },
    { id: 5, title: 'Phan thiết' },
];
const Product = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    const { idCategory } = params;
    const [idCate, setIdCate] = useState(idCategory);
    const [post, setPostNews] = useState([]);
    const [brand, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    urlApi = 'http://datnapi.vercel.app/'
    const ongetBrands = async () => {
        const brands = await getBrands(idCate);
        setBrands(brands);
        // console.log("Sản Phẩm :83 >" + JSON.stringify(products));
    }
    const ongetPosst = async () => {
        const posst = await getProductByidCate(idCate);
        setPostNews(posst);
        if (posst.length > 0) {
            setIsLoading(false);
        }
        // console.log("Sản Phẩm :83 >" + JSON.stringify(products));
    }
    useEffect(() => {
        ongetBrands(), ongetPosst();
        console.log('id', idCate);
    }, [idCate]);
    const numColumns = Math.ceil(dataAddress.length / 2);
    const renderFill = ({ item, index }) => {
        return (
            <Pressable style={productStyles.contaifillScroll}>
                <Text style={productStyles.txtTQ}>{item.title} </Text>
                <Image style={productStyles.icondown} source={require('../../image/down.png')} />
            </Pressable>
        );
    }

    const renderAdress = ({ item, index }) => {
        return (
            <Pressable style={productStyles.contaifillScrollAdress}>
                <Text style={productStyles.txtTQ}>{item.title} </Text>
            </Pressable>
        );
    }

    // danh mục hãng
    const renderItemBrands = ({ item, index }) => {
        return (
            <View style={productStyles.contaiTitle}>
                <Image style={productStyles.imgTitle} source={{ uri: `${urlApi}${item.files}` }}></Image>
                <Text style={productStyles.txtTitle}>{item.nameBrand}</Text>
            </View>
        );
    }

    // Từ khóa tìm kím
    const renderFindkey = ({ item, index }) => {
        return (
            <Pressable style={productStyles.contaifinkey}>
                <Text style={productStyles.txtfindkey}>{item.title} </Text>
            </Pressable>
        );
    }

    // postnews
    const renderPostNews = ({ item, index }) => {
        return (
            <Pressable style={productStyles.productBody2}>
                <Image style={productStyles.imgproduct} source={{ uri: `${urlApi}${item.files}` }} />
                <View style={productStyles.contaiColum}>
                    <Text style={productStyles.txtTitle} numberOfLines={1}>{item.title}</Text>
                    <Text style={productStyles.txtDetail} numberOfLines={2}>{item.detail}</Text>
                    <Text style={productStyles.txtprice} >{item.price} d</Text>

                    <View style={productStyles.contaiicontimeaddress}>
                        <Image style={productStyles.imgiconprofile} source={require('../../image/Phone.png')} />
                        <Text style={productStyles.txtTime} > - {item.created_AT} - </Text>
                        <Text style={productStyles.txtAdress} >{item.location}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }
    return (
        <View style={productStyles.body}>

            <View style={productStyles.containerse}>
                <View style={productStyles.viewSearch}>
                    <TextInput style={productStyles.txpSearch} placeholder='Tìm kiếm trên chợ tốt' />
                    <Image style={productStyles.imgSearch} source={require('../../image/search.png')} />
                </View>
                <Image style={productStyles.icon} source={require('../../image/notificaiton.png')} />
                <Image style={productStyles.icon} source={require('../../image/chatting.png')} />
            </View>
            <ScrollView>
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
                        <Pressable style={productStyles.contaifill}>
                            <Image style={productStyles.iconfilter} source={require('../../image/icon_filter.png')} />
                            <Text style={productStyles.txtTQ}>Lọc </Text>
                        </Pressable>
                        <FlatList
                            data={data}
                            renderItem={renderFill}
                            horizontal={true}
                            pagingEnabled={true}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View style={productStyles.contaiAdresss}>
                    <Text style={productStyles.txtGY}>Gợi ý khu vực </Text>
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
                    />
                </View>
                <View>
                    <FlatList
                        data={brand}
                        renderItem={renderItemBrands}
                        horizontal={true}
                        keyExtractor={item => item._id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    <FlatList
                        data={dataFindkey}
                        renderItem={renderFindkey}
                        horizontal={true}
                        pagingEnabled={true}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    {isLoading ? (
                        <ActivityIndicator
                            style={{ marginTop: 20 }}
                            size="large"
                            color="#3498db"
                        />
                    ) : (
                        <FlatList
                            data={post}
                            renderItem={renderPostNews}
                            horizontal={false}
                            keyExtractor={item => item._id.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    )}

                </View>
            </ScrollView>
        </View>
    )
}

export default Product