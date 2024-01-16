import { View, Text, SafeAreaView, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

import { RLSTtyles } from '../../styleSheets/RealestateStytles'

const Realestate = (props) => {

    return (
        <View style={CGDStyles.body}>
            <View style={RLSTtyles.containerse}>
                <View style={RLSTtyles.viewSearch}>
                    <TextInput style={RLSTtyles.txpSearch} placeholder='Tìm kiếm trên chợ tốt' />
                    <Image style={RLSTtyles.imgSearch} source={require('../../../image/search.png')} />
                </View>
                <Image style={RLSTtyles.icon} source={require('../../../image/notificaiton.png')} />
                <Image style={RLSTtyles.icon} source={require('../../../image/chatting.png')} />
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >



            </ScrollView>
        </View>
    )
}

export default Realestate
