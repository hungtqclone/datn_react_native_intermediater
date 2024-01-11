import { View, Pressable, Text, Image, StyleSheet, TextInput, TouchableOpacity, VirtualizedList, Button, FlatList, ScrollView } from 'react-native'
import React, { useState, useMemo,useEffect } from 'react'
import { Product } from '../styleSheets/ProductCategory'
import { getCategory } from './ScreenService';
import { BottomSheet } from '@rneui/base';

const ProductCategory = () => {
    const [categories, setCategories] = useState([]);

    const ongetCategory = async () => {
        const categories = await getCategory();
        setCategories(categories);
        console.log("Danh muc :13 >" + JSON.stringify(categories));
    }
    useEffect(() => {
        ongetCategory();
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <Pressable style={Product.contaitong}>
                <View style={Product.contaiimg}>
                    <Image style={Product.img} source={{ uri: `${item.icon}` }} />
                </View>
                <View style={Product.contaiCity}>
                    <Text style={Product.txtCity}>{item.name}</Text>
                    <Image source={require('../../image/show-right.png')} />
                </View>
            </Pressable>
        );
    }


    return (
        <View style={Product.Container}>
            <View style={Product.contaiappbar}>
                <Pressable style={Product.pres}>
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
            {/* <ScrollView>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_all.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Tất cả danh mục</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/city.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Bất động sản</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_Electronice.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Đồ điện tử</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_motorbike.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Xe cộ</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_job.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Việc làm</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_microwave.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Nội ngoại thất, Đồ gia dụng</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_fashion.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Thời gian, Đồ dùng cá nhân</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_dog.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Thú Cưng</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_game.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Giải trí, thể thao</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
                <View style={Product.contaitong}>
                    <View style={Product.contaiimg}>
                        <Image style={Product.img} source={require('../../image/icon_momandbaby.png')} />
                    </View>
                    <View style={Product.contaiCity}>
                        <Text style={Product.txtCity}>Mẹ và bé</Text>
                        <Image source={require('../../image/show-right.png')} />
                    </View>
                </View>
            </ScrollView> */}


        </View>


    );
}

export default ProductCategory

