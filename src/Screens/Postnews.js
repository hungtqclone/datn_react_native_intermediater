import { View, Pressable, Text, Image, StyleSheet, TextInput, TouchableOpacity, VirtualizedList, Button, FlatList, ScrollView } from 'react-native'
import React, { useState, useMemo, useEffect } from 'react'
import { Product } from '../styleSheets/ProductCategory'
import { getCategory, getDetailCategory } from './ScreenService';
import { BottomSheet } from '@rneui/base';
import { urlAPI } from '../components/helpers/urlAPI';

const Postnews = (props) => {
    const { navigation } = props;
    const [categories, setCategories] = useState([]);
    const [idCategory, setIdCategory] = useState("658fb995b41f1dd5128fa9cf");

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

    const onClickCategory = (idCategory) => {
        console.log("on click category: ")
        setIdCategory(idCategory); setCategories([])
    }

    const nextPostNews = (_id, name) => {
        navigation.navigate('DetailPostnews', { _id, name });
    }

    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity style={Product.contaitong} onPress={() => nextPostNews(item._id, item.name)}>
                {/* onPress={({ }) => { idCategory ? nextPostNews(item._id) : onClickCategory(item._id) }} */}
                <View style={Product.contaiimg}>
                    <Image style={Product.img} source={{ uri: `${urlAPI}${item.icon}` }} />
                </View>
                <View style={Product.contaiCity}>
                    <Text style={Product.txtCity}>{item.name}</Text>
                    <View style={{ display: idCategory ? 'none' : 'inline-block' }}>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <View style={Product.Container}>
            <View style={Product.contaiappbar}>
                <Pressable style={[Product.pres, { display: 'none' }]} >
                    <Image source={require('../../image/back.png')} />
                </Pressable>
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

export default Postnews

