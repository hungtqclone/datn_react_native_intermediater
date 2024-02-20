import { View, Pressable, Text, Image, StyleSheet, TextInput, TouchableOpacity, VirtualizedList, Button, FlatList, ScrollView } from 'react-native'
import React, { useState, useMemo, useEffect } from 'react'
import { BottomSheet } from '@rneui/base';
import { PNStyles } from '../../styleSheets/DetailPostNewsStyles';
import { Icon } from 'react-native-paper';

const DetailPostnews = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    const { _id } = params;
    const [idPost, setIdPost] = useState(_id);

    useEffect(() => {
        console.log('id', idPost);

    }, [idPost]);
    return (
        <View style={PNStyles.body}>
            <View style={PNStyles.containerse}>
                <Image style={PNStyles.icon} source={require('../../../image/back.png')} />
                <Image style={PNStyles.iconchotot} source={require('../../../image/icon_chotot.jpg')} />
            </View>
            <ScrollView>
                <Pressable style={PNStyles.presContai}>
                    <View style={PNStyles.contaicolum}>
                        <View style={PNStyles.contairow}>
                            <Text style={PNStyles.txtCate} >Danh mục tin đăng</Text>

                        </View>
                        <Text style={PNStyles.txtContent}>Đồ điện tử - Điện thoại</Text>
                    </View>
                    <Image style={PNStyles.imgDow} source={require('../../../image/down.png')}></Image>
                </Pressable>

                <View style={PNStyles.viewtile}>
                    <Text style={PNStyles.txtTT}>THÔNG TIN CHI TIẾT</Text>
                    <View style={PNStyles.viewrow}>
                        <Text>Xem thêm về </Text>
                        <Pressable>
                            <Text style={PNStyles.txtQD}> Quy định của Chợ Tốt</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={PNStyles.contaiupload}>
                    <TouchableOpacity style={PNStyles.tcouploadimg}>
                        <Image source={require('../../../image/camera_org.png')}></Image>
                        <Text style={PNStyles.txtloadimg}>ĐĂNG TỪ 01 ĐẾN 06 HÌNH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={PNStyles.tcouploadimg}>
                        <Image source={require('../../../image/video_org.png')}></Image>
                        <Text style={PNStyles.txtloadimg}>ĐĂNG ĐA 01 VIDEO</Text>
                        <Text style={PNStyles.txtThang}>BẠN ĐÃ ĐĂNG 0/10 VIDEO TRONG THÁNG</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Tình trạng' style={PNStyles.inputTT} />
                    <TextInput placeholder='Hãng' style={PNStyles.inputTT} />
                    <TextInput placeholder='Chính sách bảo hành' style={PNStyles.inputTT} />
                    <TextInput placeholder='Xuất xứ' style={PNStyles.inputTT} />
                    <TextInput placeholder='Giá bán' style={PNStyles.inputTT} />
                </View>
                <View style={PNStyles.viewtile}>
                    <Text style={PNStyles.txtTT}>TIÊU ĐỀ TIN ĐĂNG VÀ MÔ TẢ CHI TIẾT</Text>
                </View>
                <View style={PNStyles.contaiupload}>
                    <TextInput placeholder='Tiêu đề tin đăng' style={PNStyles.inputTT} />
                    <TextInput 
                        multiline
                        numberOfLines={4}
                        maxLength={40} placeholder='Mô tả chi tiết' style={PNStyles.inputTTMT} />
                </View>

                <View style={PNStyles.viewtile}>
                    <Text style={PNStyles.txtTT}>THÔNG TIN NGƯỜI BÁN</Text>
                </View>
                <View style={PNStyles.contaiupload}>
                    <Pressable style={PNStyles.presAddres}>
                        <View style={PNStyles.contaicolum}>
                            <Text >Địa chỉ</Text>
                        </View>
                        <Image style={PNStyles.imgDow} source={require('../../../image/down.png')}></Image>
                    </Pressable>
                </View>

                <View style={PNStyles.contaiBtn}>
                    <Pressable style={PNStyles.btnXT}>
                        <Text style={PNStyles.txtXT}>
                            XEM TRƯỚC
                        </Text>
                    </Pressable>
                    <Pressable style={PNStyles.btnDT}>
                        <Text style={PNStyles.txtDT}>ĐĂNG TIN</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}

export default DetailPostnews

