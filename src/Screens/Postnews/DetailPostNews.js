import { View, Pressable, Text, Image, StyleSheet, TextInput, TouchableOpacity, VirtualizedList, Button, FlatList, ScrollView } from 'react-native'
import React, { useState, useMemo, useEffect } from 'react'
import { BottomSheet } from '@rneui/base';
import { PNStyles } from '../../styleSheets/DetailPostNewsStyles';

const DetailPostnews = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    const { _id } = params;
    const [idPost, setIdPost] = useState(_id);
    


    useEffect(() => {
        console.log('id',idPost);
    }, [idPost]);
    return (
        <View style={PNStyles.body}>
            <Text>postnewsdetaila</Text>
        </View>


    );
}

export default DetailPostnews

