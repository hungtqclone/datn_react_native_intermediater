/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { foryouStyles } from '../../styleSheets/ForyouStyles'
import { getProduct } from '../ScreenService'
import { useNavigation } from '@react-navigation/native';
import { styleNumber } from '../../styleSheets/styleJS';
import { urlAPI } from '../../components/helpers/urlAPI';

const Foryou = (props) => {
    const [products, setProducts] = useState([]);
    // const { navigation } = props
    const navigation = useNavigation();
    const formatDate = (datetime) => {
        const date = new Date(datetime);
        const day = date.toLocaleDateString('en-GB');
        return `${day}`;
    };
    const truncate = (input, length) => input.length > length ? `${input.substring(0, length)}...` : input;
    const renderItemPostnew = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('DetailProduct', { id_product: item._id })} style={foryouStyles.productBody}>
                <Image style={foryouStyles.imgproduct} source={{ uri: `${item.files[0]}` }} />
                <Text style={foryouStyles.txtnameproduct} >{item.title}</Text>
                <Text style={foryouStyles.txtdetail} numberOfLines={1}>{item.detail}</Text>
                <Text style={foryouStyles.txtprice} >{styleNumber(item.price)} đ</Text>

                <View style={foryouStyles.contaiicontimeaddress}>
                    <Image style={foryouStyles.imgiconprofile} source={require('../../../image/Phone.png')} />
                    <Text style={foryouStyles.txtTime} > - {formatDate(item.created_AT)} - </Text>
                    <Text style={foryouStyles.txtAdress} numberOfLines={1}>{truncate(item.location, 10)}</Text>
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
            <Text style={foryouStyles.txtOffical}>Gợi ý hôm nay</Text>
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

export default Foryou