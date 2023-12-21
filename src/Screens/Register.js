import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Register = () => {
    return (
        <View style={[AppStyle.container]}>
            <KeyboardAwareScrollView
                style={{ flex: 1, height: '100%' }}
                contentContainerStyle={{}}
                enableOnAndroid={true}
                enableAutomaticScroll={true}
                scrollEnabled={false}
            >
                <View>
                    <View>
                        <Image style={{ width: '100%', position: 'absolute' }} source={require('../assets/images/reg03.png')} />
                        <Image style={{ width: '100%', position: 'absolute' }} source={require('../assets/images/reg04.png')} />
                        <Text style={[AppStyle.titleMedium, { color: 'black', textAlign: 'right', padding: 18 }]}>BỎ QUA</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: '20%' }}>
                        <Text style={[AppStyle.title, { color: '#04CB00' }]}>ĐĂNG KÝ</Text>
                    </View>
                    <View style={[{ marginTop: 30, alignItems: 'center' }]}>
                        <TextInput style={[AppStyle.txtinput]} placeholder='Nhập số điện thoại'>
                        </TextInput>
                    </View>
                    <View style={[{ marginTop: 24, alignItems: 'center' }]}>
                        <TextInput style={[AppStyle.txtinput]} placeholder='Nhập mật khẩu'>
                        </TextInput>
                    </View>
                    <View style={[{ alignItems: 'center', marginTop: 24 }]}>
                        <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#FF9900' }]} onPress={() => { }}>
                            <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>ĐĂNG KÝ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 18 }}>
                        <Text style={[AppStyle.titleSmall, { color: 'black', fontSize: 15, fontWeight: 500, width: '70%' }]}>
                            Bấm vào đăng ký nghĩa là bạn đã đọc và đồng ý với{' '}
                            <Text style={{ color: '#FF9900' }}>Điều khoản sử dụng của Chợ Tốt.</Text>
                        </Text>
                    </View>
                    <View style={{ marginTop: 18 }}>
                        <View style={{ width: "100%" }}>
                            <Image style={{ width: "100%", height: 280, position: 'absolute' }} source={require('../assets/images/reg02.png')} />
                        </View>
                        <View style={{ width: "100%", marginTop: 30 }}>
                            <Image style={{ width: "100%", height: 280, position: 'absolute' }} source={require('../assets/images/reg01.png')} />
                        </View>
                        <View style={{ width: "100%", marginTop: 30 }}>
                            <Image style={{ width: "100%", height: 200 }} source={require('../assets/images/reg00.png')} />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})