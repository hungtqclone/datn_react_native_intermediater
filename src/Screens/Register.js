import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppStyle } from '../constants/AppStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLOR } from '../constants/theme'
import AxiosInstance from '../components/helpers/Axiosintance'


const Register = (props) => {
    const { navigation } = props
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateInput = () => {
        let isValid = true;
        let newErrors = {};

        if (!email) {
            newErrors.email = 'Email không được để trống';
            isValid = false;
        } else if (!email.includes('@gmail.com')) {
            newErrors.email = 'Email phải là một địa chỉ Gmail';
            isValid = false;
        }

        if (!phone) {
            newErrors.phone = 'Số điện thoại không được để trống';
            isValid = false;
        } else if (phone.length < 10 || phone.length > 11) {
            newErrors.phone = 'Số điện thoại phải từ 10 đến 11 số';
            isValid = false;
        }

        if (!name) {
            newErrors.name = 'Họ và tên không được để trống';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Mật khẩu không được để trống';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
            isValid = false;
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu không khớp';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const registerUser = async () => {
        if (!validateInput()) {
            return;
        }

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
                    <View style={{ alignItems: 'center', marginTop: '3%' }}>
                        <Text style={[AppStyle.title, { color: '#04CB00' }]}>ĐĂNG KÝ</Text>
                    </View>
                    <View style={[{ marginTop: 8, alignItems: 'center' }]}>
                        {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                        <TextInput
                            style={[AppStyle.txtinput, errors.email ? { borderColor: 'red', borderWidth: 1.2 } : {}]}
                            placeholder='Nhập Email'
                            placeholderTextColor={COLOR.notFocus}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={[{ marginTop: 8, alignItems: 'center' }]}>
                        {errors.phone && <Text style={{ color: 'red' }}>{errors.phone}</Text>}
                        <TextInput
                            style={[AppStyle.txtinput, errors.phone ? { borderColor: 'red', borderWidth: 1.2 } : {}]}
                            placeholder='Nhập số điện thoại'
                            placeholderTextColor={COLOR.notFocus}
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    <View style={[{ marginTop: 8, alignItems: 'center' }]}>
                        {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                        <TextInput
                            secureTextEntry={true}
                            style={[AppStyle.txtinput, errors.password ? { borderColor: 'red', borderWidth: 1.2 } : {}]}
                            placeholder='Nhập mật khẩu'
                            placeholderTextColor={COLOR.notFocus}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={[{ marginTop: 8, alignItems: 'center' }]}>
                        {errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>}
                        <TextInput
                            secureTextEntry={true}
                            style={[AppStyle.txtinput, errors.confirmPassword ? { borderColor: 'red', borderWidth: 1.2 } : {}]}
                            placeholder='Xác nhận mật khẩu'
                            placeholderTextColor={COLOR.notFocus}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>
                    <View style={[{ marginTop: 8, alignItems: 'center' }]}>
                        {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
                        <TextInput
                            style={[AppStyle.txtinput, errors.name ? { borderColor: 'red', borderWidth: 1.2 } : {}]}
                            placeholder='Họ và tên'
                            placeholderTextColor={COLOR.notFocus}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={[{ alignItems: 'center', marginTop: 8 }]}>
                        <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#FF9900' }]} onPress={registerUser}>
                            <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>ĐĂNG KÝ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{ alignItems: 'center', marginTop: 8 }]}>
                        <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#4CB944' }]} onPress={() => navigation.goBack()}>
                            <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>QUAY LẠI</Text>
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