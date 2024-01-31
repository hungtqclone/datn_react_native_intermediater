import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AppStyle } from '../constants/AppStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AxiosInstance from '../components/helpers/Axiosintance'

const Login = (props) => {
    const { navigation } = props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        try {
            const response = await AxiosInstance().post('api/login-user', {
                email: email,
                password: password,
            });

            console.log('Kết quả từ API:', response);

            if (response.success) {
                console.log('Đăng nhập thành công!');
                // Navigate to the home screen or perform any other necessary actions
                // navigation.navigate('home');
            } else {
                console.log('Đăng nhập không thành công:', response.message);
            }
        } catch (error) {
            console.error('Lỗi đăng nhập người dùng:', error);
            if (error.response && error.response.data) {
                // console.error('Thông điệp lỗi từ server:', error.response.data);
            }
        }
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
                <View style={[AppStyle.main, { position: 'relative' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate("home")} >
                        <Text style={[AppStyle.titleBig, { textAlign: 'right', color: '#525357' }]}>Bỏ qua</Text>
                    </TouchableOpacity>
                    <View style={[AppStyle, { marginTop: 20, alignItems: 'center' }]}>
                        <Image style={[{ resizeMode: 'cover' }]} source={require('../assets/images/regLogin.png')} />
                        <View style={styles.overlay}>
                            <Image style={[{ marginLeft: 200 }]} source={require('../assets/images/star.png')} />
                            <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22 }]}>ĐĂNG NHẬP</Text>
                        </View>
                    </View>
                    <View style={[{ marginTop: 30, alignItems: 'center' }]}>
                        <TextInput 
                        style={[AppStyle.txtinput]} 
                        placeholder='Nhập số điện thoại'
                        onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={[{ marginTop: 24, alignItems: 'center' }]}>
                        <TextInput 
                        style={[AppStyle.txtinput]} 
                        placeholder='Nhập mật khẩu'
                        onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <View style={[{ alignItems: 'center', marginTop: 24 }]}>
                        <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#FF9900' }]} onPress={loginUser}>
                            <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#E7E7E7', marginTop: 24 }]} onPress={() => { }}>
                            <Text style={[AppStyle.titleBig, { color: '#575757', fontSize: 22, fontWeight: 500 }]}>QUÊN MẬT KHẨU</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{ alignItems: 'center', marginTop: 24, flexDirection: 'row', justifyContent: 'space-around' }]}>
                        <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#3B5998', width: '40%' }]} onPress={() => { }}>
                            <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#4CB944', width: '40%' }]} onPress={() => navigation.navigate('Register')}>
                            <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View styles={{}}>
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
            </KeyboardAwareScrollView>
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    }
});