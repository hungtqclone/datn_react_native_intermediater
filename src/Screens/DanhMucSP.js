import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppSearch2 from '../components/AppSearch2'
import { DanhMucSPStyles } from '../styleSheets/DanhMucSPStyles'
import { SelectCountry } from 'react-native-element-dropdown';
import { ItemProductStyles } from '../styleSheets/ItemProductStyles'
import ItemProduct from '../Item/ItemProduct'
const DanhMucSP = () => {
    const [country, setCountry] = useState(null)
    const [type, setType] = useState(null)
    const [loc, setLoc] = useState(null)
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


    return (
        <SafeAreaView>
            <AppSearch2 />
            <View style={DanhMucSPStyles.View1}>
                <SelectCountry
                    style={[DanhMucSPStyles.dropdown, { flex: 2 }]}
                    selectedTextStyle={DanhMucSPStyles.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyles.placeholderStyle}
                    iconStyle={DanhMucSPStyles.iconStyle}
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
                    style={[DanhMucSPStyles.dropdown, { flex: 2 }]}
                    selectedTextStyle={DanhMucSPStyles.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyles.placeholderStyle}
                    iconStyle={DanhMucSPStyles.iconStyle}
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
                    style={[DanhMucSPStyles.dropdown, { flex: 1 }]}
                    selectedTextStyle={DanhMucSPStyles.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyles.placeholderStyle}
                    iconStyle={DanhMucSPStyles.iconStyle}
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
            <View style={ItemProductStyles.Container}>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStyles.View1}>
                        <Image style={ItemProductStyles.Image1} source={require('../../image/Table.png')} />
                    </View>
                    <Text style={ItemProductStyles.Text1}>May tinh bang</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStyles.View2}>
                        <Image style={ItemProductStyles.Image2} source={require('../../image/Pc.png')} />
                    </View>
                    <Text style={ItemProductStyles.Text2}>Laptop</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStyles.View3}>
                        <Image style={ItemProductStyles.Image3} source={require('../../image/Phone.png')} />
                    </View>
                    <Text style={ItemProductStyles.Text3}>Dien thoai</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStyles.View4}>
                        <Image style={ItemProductStyles.Image4} source={require('../../image/Pcc.png')} />
                    </View>
                    <Text style={ItemProductStyles.Text4}>May tinh de ban</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStyles.View5}>
                        <Image style={ItemProductStyles.Image5} source={require('../../image/Camera.png')} />
                    </View>
                    <Text style={ItemProductStyles.Text5}>Camera</Text>
                </View>


            </View>

            <ScrollView horizontal={true} style={DanhMucSPStyles.Scovil}>
                <Text style={DanhMucSPStyles.TextHangK}>Dung lượng cao</Text>
                <Text style={DanhMucSPStyles.TextHangK}>Game</Text>
                <Text style={DanhMucSPStyles.TextHangK}>Trả góp</Text>
                <Text style={DanhMucSPStyles.TextHangK}>Bảo hành</Text>
                <Text style={DanhMucSPStyles.TextHangK}>Chưa dùng</Text>
                <Text style={DanhMucSPStyles.TextHangK}>Pin trâu</Text>
            </ScrollView>
            <View style={{ width: "100%", flexWrap: "wrap", flexDirection: "row" }}>
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />

            </View>
        </SafeAreaView >

    )
}





export default DanhMucSP