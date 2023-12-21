import { View, Text, Image, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { DescriptionProductStyles } from '../styleSheets/DescriptionProduct'

const DescriptionProduct = () => {
    const [guarantee, setGuarantee] = useState('Thời gian bảo hành');
    return (



        <View style={{ flex: 1 }}>

            <Text style={DescriptionProductStyles.title}>Mô tả sản phẩm</Text>
            <Image style={DescriptionProductStyles.back} source={require('../assets/images/icons/back.png')} />

            <ScrollView style={{ flexGrow: 1 }} >
                <View style={{ flex: 2 }}>
                    <Text style={DescriptionProductStyles.titleItem}>Bảo hành</Text>
                    <TextInput style={DescriptionProductStyles.inputText}
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={() => setGuarantee}
                        placeholder={guarantee}
                    />

                </View>
                <View style={{ flex: 2 }}>
                    <Text style={DescriptionProductStyles.titleItem}>Phụ kiện</Text>
                    <TextInput style={DescriptionProductStyles.inputText}
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={() => setGuarantee}
                        placeholder={guarantee}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={DescriptionProductStyles.titleItem}>Dung lượng pin</Text>
                    <TextInput style={DescriptionProductStyles.inputText}
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={() => setGuarantee}
                        placeholder={guarantee}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={DescriptionProductStyles.titleItem}>Mới / Chưa dùng</Text>
                    <TextInput style={DescriptionProductStyles.inputText}
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={() => setGuarantee}
                        placeholder={guarantee}
                    />
                </View>

            </ScrollView>
        </View>

    )
}

export default DescriptionProduct