import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppStyle } from '../constants/AppStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLOR } from '../constants/theme'
import AxiosInstance from '../components/helpers/Axiosintance'


const Register = (props) => {
    const { navigation } = props
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {
        try {
            const response = await AxiosInstance().post('api/register-user', {
                email: email,
                phone: phone,
                name: name,
                password: password,
            });
            console.log('Kết quả từ API:', response);
            if (response.success) {
                console.log('Đăng ký thành công!');
            } else {
                console.log('Đăng ký không thành công:', response.message);
            }
        } catch (error) {
            console.error('Lỗi đăng ký người dùng:', error);
            if (error.response && error.response.data) {
                // console.error('Thông điệp lỗi từ server:', error.response.data);
            }}
    };

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
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Text style={[AppStyle.titleMedium, { color: 'black', textAlign: 'right', padding: 18 }]}>BỎ QUA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: '20%' }}>
                        <Text style={[AppStyle.title, { color: '#04CB00' }]}>ĐĂNG KÝ</Text>
                    </View>
                    <View style={[{ marginTop: 30, alignItems: 'center' }]}>
                        <TextInput
                            style={[AppStyle.txtinput]}
                            placeholder='Nhập Email'
                            placeholderTextColor={COLOR.notFocus}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={[{ marginTop: 30, alignItems: 'center' }]}>
                        <TextInput
                            style={[AppStyle.txtinput]}
                            placeholder='Nhập số điện thoại'
                            placeholderTextColor={COLOR.notFocus}
                            value={phone}
                            onChangeText={(text) => setphone(text)}
                        />
                    </View>
                    {/* ... (tương tự với các TextInput khác) */}
                    <View style={[{ marginTop: 24, alignItems: 'center' }]}>
                        <TextInput
                            style={[AppStyle.txtinput]}
                            placeholder='Nhập mật khẩu'
                            placeholderTextColor={COLOR.notFocus}
                            value={password}
                            onChangeText={(text) => setPassword(text)} />
                    </View>
                    <View style={[{ marginTop: 24, alignItems: 'center' }]}>
                        <TextInput
                            style={[AppStyle.txtinput]}
                            placeholder='Họ và tên'
                            placeholderTextColor={COLOR.notFocus}
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <View style={[{ alignItems: 'center', marginTop: 24 }]}>
                        <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#FF9900' }]} onPress={registerUser}>
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