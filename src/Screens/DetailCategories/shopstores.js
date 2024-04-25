import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ShopStyles } from '../../styleSheets/ShopStyles'
import { styleNumber, formatDate } from '../../styleSheets/styleJS'

const Shopstores = () => {
    return (
        <View style={ShopStyles.containerOfical}>
            <ScrollView horizontal={true}>
                <View style={ShopStyles.contaiitemOffical}>
                    <View style={ShopStyles.contaiTitleOffical}>
                        <Image style={ShopStyles.imgTitleOffical} source={require('../../../image/icon_market.jpg')} />
                        <Text style={ShopStyles.txtTitleOffical} numberOfLines={1}>Chợ tốt</Text>
                        <Image style={ShopStyles.imgMark} source={require('../../../image/mark.png')} />
                        <Image style={ShopStyles.imgright} source={require('../../../image/right.png')} />
                    </View>
                    <View style={ShopStyles.contairow}>
                        <TouchableOpacity style={ShopStyles.productBodyOffical}>
                            <Image style={ShopStyles.imgproductOffical} source={require('../../../image/img_shop.jpg')} />
                            {/* <Text style={ShopStyles.txtnameproductOffical} >Laptop Asus ZenBook (AMD Ryzen 5-6600U) - XANH</Text> */}
                            <Text style={ShopStyles.txtdetailOffical} numberOfLines={1}>Laptop Asus ZenBook (AMD Ryzen 5-6600U) - XANH</Text>
                            <Text style={ShopStyles.txtpriceOffical} >2900000 đ</Text>
                            <View style={ShopStyles.contaiicontimeaddressOffical}>
                                <Image style={ShopStyles.imgiconprofileOffical} source={require('../../../image/Phone.png')} />
                                {/* <Text style={ShopStyles.txtTimeOffical} > - {item.created_AT} - </Text> */}
                                <Text style={ShopStyles.txtAdressOffical} >HCM</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ShopStyles.productBodyOffical}>
                            <Image style={ShopStyles.imgproductOffical} source={require('../../../image/img_shop2.jpg')} />
                            {/* <Text style={ShopStyles.txtnameproductOffical} >Laptop Asus ZenBook (AMD Ryzen 5-6600U) - XANH</Text> */}
                            <Text style={ShopStyles.txtdetailOffical} numberOfLines={1}>Laptop Asus ZenBook (AMD Ryzen 5-6600U) - XANH</Text>
                            <Text style={ShopStyles.txtpriceOffical} >2900000 đ</Text>
                            <View style={ShopStyles.contaiicontimeaddressOffical}>
                                <Image style={ShopStyles.imgiconprofileOffical} source={require('../../../image/Phone.png')} />
                                {/* <Text style={ShopStyles.txtTimeOffical} > - {item.created_AT} - </Text> */}
                                <Text style={ShopStyles.txtAdressOffical} >HCM</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ShopStyles.contaiitemOffical}>
                    <View style={ShopStyles.contaiTitleOffical}>
                        <Image style={ShopStyles.imgTitleOffical} source={require('../../../image/icon_market.jpg')} />
                        <Text style={ShopStyles.txtTitleOffical} numberOfLines={1}>Chợ tốt</Text>
                        <Image style={ShopStyles.imgMark} source={require('../../../image/mark.png')} />
                        <Image style={ShopStyles.imgright} source={require('../../../image/right.png')} />
                    </View>
                    <View style={ShopStyles.contairow}>
                        <TouchableOpacity style={ShopStyles.productBodyOffical}>
                            <Image style={ShopStyles.imgproductOffical} source={require('../../../image/img_shop.jpg')} />
                            {/* <Text style={ShopStyles.txtnameproductOffical} >Laptop Asus ZenBook (AMD Ryzen 5-6600U) - XANH</Text> */}
                            <Text style={ShopStyles.txtdetailOffical} numberOfLines={1}>Laptop Asus ZenBook (AMD Ryzen 5-6600U) - XANH</Text>
                            <Text style={ShopStyles.txtpriceOffical} >2900000 đ</Text>
                            <View style={ShopStyles.contaiicontimeaddressOffical}>
                                <Image style={ShopStyles.imgiconprofileOffical} source={require('../../../image/Phone.png')} />
                                {/* <Text style={ShopStyles.txtTimeOffical} > - {item.created_AT} - </Text> */}
                                <Text style={ShopStyles.txtAdressOffical} >HCM</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ShopStyles.productBodyOffical}>
                            <Image style={ShopStyles.imgproductOffical} source={require('../../../image/img_shop.jpg')} />
                            {/* <Text style={ShopStyles.txtnameproductOffical} >Laptop Asus ZenBook (AMD Ryzen 5-6600U) - XANH</Text> */}
                            <Text style={ShopStyles.txtdetailOffical} numberOfLines={1}>Laptop Asus ZenBook (AMD Ryzen 5-6600U) - XANH</Text>
                            <Text style={ShopStyles.txtpriceOffical} >2900000 đ</Text>
                            <View style={ShopStyles.contaiicontimeaddressOffical}>
                                <Image style={ShopStyles.imgiconprofileOffical} source={require('../../../image/Phone.png')} />
                                {/* <Text style={ShopStyles.txtTimeOffical} > - {item.created_AT} - </Text> */}
                                <Text style={ShopStyles.txtAdressOffical} >HCM</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}


export default Shopstores