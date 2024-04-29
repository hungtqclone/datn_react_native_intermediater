/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { foryouStyles } from '../../styleSheets/ForyouStyles'
import { getProduct } from '../ScreenService'
import { urlAPI } from '../../components/helpers/urlAPI'
import { styleNumber, formatDate } from '../../styleSheets/styleJS';

const News = () => {
    const [products, setProducts] = useState([]);
    const renderItemPostnew = ({ item }) => {
        return (
            <TouchableOpacity style={foryouStyles.productBody}>
                <Image style={foryouStyles.imgproduct} source={{ uri: `${urlAPI}${item.files}` }} />
                <Text style={foryouStyles.txtnameproduct} >{item.title}</Text>
                <Text style={foryouStyles.txtdetail} numberOfLines={1}>{item.detail}</Text>
                <Text style={foryouStyles.txtprice} >{styleNumber(item.price)}đ</Text>

                <View style={foryouStyles.contaiicontimeaddress}>
                    <Image style={foryouStyles.imgiconprofile} source={require('../../../image/Phone.png')} />
                    <Text style={foryouStyles.txtTime} > - {formatDate(item.created_AT)} - </Text>
                    <Text style={foryouStyles.txtAdress} >{item.location}</Text>
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
        <View style={foryouStyles.contaiProduct}>
            <FlatList
                data={products}
                renderItem={renderItemPostnew}
                numColumns={2}
                keyExtractor={item => item._id}
                scrollEnabled={false}
            />
        </View>
    )
}

export default News