import { View, Pressable, Text, Image, StyleSheet, TextInput, TouchableOpacity, VirtualizedList, Button, FlatList, ScrollView } from 'react-native'
import React, { useState, useMemo, useEffect } from 'react'
import { Product } from '../styleSheets/ProductCategory'
import { getCategory, getDetailCategory } from './ScreenService';
import { BottomSheet } from '@rneui/base';

const ProductCategory = () => {
    const [categories, setCategories] = useState([]);
    const [idCategory, setIdCategory] = useState(null);
    const ongetCategory = async () => {
        const categories = await getCategory();
        setCategories(categories);
        // console.log("Danh muc :13 >" + JSON.stringify(categories));
    }
    const ongetDetailCategory = async () => {
        const detailCategory = await getDetailCategory(idCategory);
        setCategories(detailCategory)
        // console.log("Chi tiết danh muc :13 >" + JSON.stringify(detailCategory));
    }
    useEffect(() => {
        if (idCategory == null) {
            ongetCategory();
        } else {
            ongetDetailCategory();
        }


    }, [idCategory]);

    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity style={Product.contaitong} onPress={({ }) => { setIdCategory(item._id); setCategories([]) }}>
                <View style={Product.contaiimg}>
                    <Image style={Product.img} source={{ uri: `${item.icon}` }} />
                </View>
                <View style={Product.contaiCity}>
                    <Text style={Product.txtCity}>{item.name}</Text>
                    <Image source={require('../../image/show-right.png')} />
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <View style={Product.Container}>
            <View style={[Product.contaiappbar, { display: idCategory ? 'inline-block' : 'none' }]}>
                <TouchableOpacity style={Product.pres} onPress={({ }) => { setIdCategory(null); setCategories([]) }}>
                    <Image source={require('../../image/back.png')} />
                </TouchableOpacity>
                <View style={Product.contaitxt}>
                    <Text style={Product.txtTille}>CHỌN DANH MỤC</Text>
                </View  >
            </View>
            <View style={Product.contaitxp}>
                <Image source={require('../../image/searchBar.png')} />
                <TextInput placeholder='Nhập từ khóa để lọc' placeholderTextColor={'#9C9C9C'} style={Product.txpserch}>
                </TextInput>
            </View>
            <FlatList
                renderItem={renderItem}
                data={categories}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
            />



        </View>


    );
}

export default ProductCategory

