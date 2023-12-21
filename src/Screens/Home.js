import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { homeStyles } from '../styleSheets/HomeStyles'

const Home = () => {

    return (
        <SafeAreaView>

            <View style={homeStyles.viewSearch}>
                <TextInput style={homeStyles.textInputSearch} placeholder='Tìm kiếm trên chợ tốt' />
                <Image style={homeStyles.imgSearch} source={require('../../image/search.png')} />
            </View>
            <View style={[homeStyles.Sinhvien]}>
                <Image style={homeStyles.imageSinhvien} source={require('../../image/Sinhvien.png')}></Image>
            </View>
            <View style={[homeStyles.Khampha]}>
                <View style={homeStyles.KhamphaDanhMuc}>
                    <Text style={homeStyles.textKhampha}>Khám Phá Các Danh Mục</Text>
                </View>
                <View>
                    <Image style={homeStyles.imageBatdongsan} source={require('../../image/Batdongsan.png')}></Image>
                    <Text style={homeStyles.textBatdongsan}>Bất động sản</Text>
                </View>
                <View>
                    <Image style={homeStyles.imageXehoi} source={require('../../image/Xehoi.png')}></Image>
                    <Text style={homeStyles.textXeco}>Xe cộ</Text>
                </View>
                <View style={homeStyles.ChuyenCanh}>
                    <View style={homeStyles.ViewCon}>
                        <Image source={require('../../image/Dodientu.png')} style={homeStyles.DoDienTu} />
                        <Image source={require('../../image/ThuCung.png')} style={homeStyles.ThuCung} />
                    </View>
                    <Text style={homeStyles.textDodientu}>Đồ điện tử</Text>
                    <View style={homeStyles.ViewCon1}>
                        <Image source={require('../../image/ViecLam.png')} style={homeStyles.DoDienTu} />
                        <Image source={require('../../image/NoiThat.png')} style={homeStyles.ThuCung} />
                    </View>
                    <Text style={homeStyles.textThuCung}>Thú Cưng</Text>
                    <Text style={homeStyles.textVieLam}>Việc Làm</Text>
                    <Text style={homeStyles.textNoiThat}>Nội ngoại thất,đồ gia</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home