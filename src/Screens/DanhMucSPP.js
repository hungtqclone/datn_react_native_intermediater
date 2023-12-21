import { View, Text, Image, ScrollView, StyleSheet, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ItemProductStylesSP } from '../styleSheets/ItemProductStylesSP'
import AppSearch2 from '../components/AppSearch2'
import { DanhMucSPStyless } from '../styleSheets/DanhMucSPStyless'
import { SelectCountry } from 'react-native-element-dropdown';
import ItemProductSP from '../Item/ImtemProductSP'

const DanhMucSPP = () => {
    const [country, setCountry] = useState(null)
    const [type, setType] = useState(null)
    const [loc, setLoc] = useState("Lọc")
    const local_data = [
        {
            value: '1',
            lable: 'TP Hồ Chí Minh',

        },
        {
            value: '2',
            lable: 'Hà Nội',

        },
        {
            value: '3',
            lable: 'Đồng Tháp',

        },
        {
            value: '4',
            lable: 'Cần Thơ',

        },
        {
            value: '5',
            lable: 'Đà Nẵng',

        },
    ];

    const type_Data = [
        {
            value: '1',
            lable: 'điện thoại',

        },
        {
            value: '2',
            lable: 'máy tính',

        },
        {
            value: '3',
            lable: 'xe máy',

        }
    ];
    const loc_Data = [
        {
            value: '1',
            lable: 'nhiều',

        },
        {
            value: '2',
            lable: 'ít',

        },
        {
            value: '3',
            lable: 'chưa c',

        }
    ];
    const data_header = ["Dung lượng cao", "Game", "Trả góp", "Bảo hành", "Chưa dùng", "Pin trâu"]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={DanhMucSPStyless.viewSearch}>
                <Image style={DanhMucSPStyless.imgBack} source={require('../../image/Left.png')} />
                <TextInput style={DanhMucSPStyless.textInputSearch} placeholder='Tìm kiếm trên chợ tốt' />
                <Image style={DanhMucSPStyless.imgSearch} source={require('../../image/search.png')} />
                <Image style={DanhMucSPStyless.imgRightInputSearch} source={require('../../image/Left2.png')} />
            </View>
            <View style={DanhMucSPStyless.View1}>
                <SelectCountry
                    style={[DanhMucSPStyless.dropdown, { flex: 2 }]}
                    selectedTextStyle={DanhMucSPStyless.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyless.placeholderStyle}
                    iconStyle={DanhMucSPStyless.iconStyle}
                    maxHeight={200}
                    value={country}
                    data={local_data}
                    valueField="value"
                    labelField="lable"
                    placeholder={local_data[0].lable}
                    searchPlaceholder="Search..."
                    onChange={e => {
                        setCountry(e.value);
                    }}
                />
                <SelectCountry
                    style={[DanhMucSPStyless.dropdown, { flex: 2 }]}
                    selectedTextStyle={DanhMucSPStyless.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyless.placeholderStyle}
                    iconStyle={DanhMucSPStyless.iconStyle}
                    maxHeight={200}
                    value={type}
                    data={type_Data}
                    valueField="value"
                    labelField="lable"
                    placeholder={local_data[0].lable}
                    searchPlaceholder="Search..."
                    onChange={e => {
                        setType(e.value);
                    }}
                />
                <SelectCountry
                    style={[DanhMucSPStyless.dropdown, { flex: 1 }]}
                    selectedTextStyle={DanhMucSPStyless.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyless.placeholderStyle}
                    iconStyle={DanhMucSPStyless.iconStyle}
                    maxHeight={200}
                    value={loc}
                    data={local_data}
                    valueField="value"
                    labelField="lable"
                    placeholder={local_data[0].lable}
                    searchPlaceholder="Search..."
                    onChange={e => {
                        setLoc(e.value);
                    }}
                />
            </View>
            <View style={ItemProductStylesSP.Container}>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View1}>
                        <Image style={ItemProductStylesSP.Image1} source={require('../../image/Oppo.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text1}>Oppo</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View2}>
                        <Image style={ItemProductStylesSP.Image2} source={require('../../image/Samsung.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text2}>SamSung</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View3}>
                        <Image style={ItemProductStylesSP.Image3} source={require('../../image/Apple.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text3}>Apple</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View4}>
                        <Image style={ItemProductStylesSP.Image4} source={require('../../image/Xiaomi.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text4}>Xiaomi</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View5}>
                        <Image style={ItemProductStylesSP.Image5} source={require('../../image/Sony.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text5}>Sony</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View5}>
                        <Image style={ItemProductStylesSP.Image5} source={require('../../image/Nokia.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text5}>Nokia</Text>
                </View>


            </View>
            <View style={DanhMucSPStyless.Scovil}>
                <FlatList
                    horizontal={true}
                    data={data_header}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Text style={DanhMucSPStyless.TextHangK}>{item}</Text>}
                />
            </View>




            {/* <View style={{ width: "100%", flexWrap: "wrap", flexDirection: "row" }}>
                <ItemProductSP />

            </View> */}
            <FlatList
                numColumns={2}
                data={local_data}
                keyExtractor={(data) => data.id}
                renderItem={({ item }) => <ItemProductSP data={item} />}
            />

        </SafeAreaView >

    )
}





export default DanhMucSPP