import { View, Text, Image } from 'react-native'
import React from 'react'
import { homeStyles } from '../styleSheets/HomeStyles'
import { DanhMucSPStyles } from '../styleSheets/DanhMucSPStyles'
const AppSearch2 = () => {
    return (
        <View style={[DanhMucSPStyles.Search3]}>
            <Image style={DanhMucSPStyles.Left1} source={require('../../image/Left.png')}></Image>
            <View style={[DanhMucSPStyles.Search4]}>
                <Text style={[DanhMucSPStyles.Text2]}>Tìm Kiếm</Text>
                <Image style={DanhMucSPStyles.Search5} source={require('../../image/search.png')}></Image>
                <Image style={DanhMucSPStyles.Left2} source={require('../../image/Left2.png')}></Image>
            </View>
        </View>
    )
}

export default AppSearch2