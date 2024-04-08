/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { foryouStyles } from '../../styleSheets/ForyouStyles'
import { getProduct } from '../ScreenService'


const Foryou = (props) => {
    const { navigation } = props;
    const [products, setProducts] = useState([]);
    urlApi = 'https://datnapi-qelj.onrender.com/'
    const renderItemPostnew = ({ item }) => {
        return (
            <TouchableOpacity style={foryouStyles.productBody}
            onPress={() => navigation.navigate('DetailProduct', { id: item._id })}
         //     onPress={() => navigation.navigate('SalesOrderScreen')}
            >
                <Image style={foryouStyles.imgproduct} source={{ uri: `${urlApi}${item.files}` }} />
                <Text style={foryouStyles.txtnameproduct} >{item.title}</Text>
                <Text style={foryouStyles.txtdetail} numberOfLines={1}>{item.detail}</Text>
                <Text style={foryouStyles.txtprice} >{item.price}</Text>

                <View style={foryouStyles.contaiicontimeaddress}>
                    <Image style={foryouStyles.imgiconprofile} source={require('../../../image/Phone.png')} />
                    <Text style={foryouStyles.txtTime} > - {item.created_AT} - </Text>
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