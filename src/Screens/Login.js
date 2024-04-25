import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppStyle } from '../constants/AppStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { UserContext } from '../components/users/UserContext'

const Login = (props) => {
    const { navigation } = props
    const { setuser } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ email: '', password: '' });

    const validateInput = () => {
        let isValid = true;
        setError({ email: '', password: '' });

        if (!email) {
            setError(prev => ({ ...prev, email: 'Email không được để trống' }));
            isValid = false;
        } else if (!email.includes('@gmail.com')) {
            setError(prev => ({ ...prev, email: 'Email phải là một địa chỉ Gmail' }));
            isValid = false;
        }

        if (!password) {
            setError(prev => ({ ...prev, password: 'Mật khẩu không được để trống' }));
            isValid = false;
        }

        return isValid;
    };

    const loginUser = async () => {
        if (!validateInput()) {
            return;
        }

        setIsLoading(true);
        try {
            const user = await onLogin(email, password);
            if (!user) {
                throw new Error('Mật khẩu không chính xác');
            }
        } catch (error) {
            setError(prev => ({ ...prev, password: error.message || 'Mật khẩu không chính xác' }));
        } finally {
            setIsLoading(false);
        }
    };

    const skipLogin = () => {
        setuser(1)
    }

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
                    <TouchableOpacity onPress={() => skipLogin()} >
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
                        {error.email ? <Text style={{ color: 'red' }}>{error.email}</Text> : null}
                        <TextInput
                            style={[AppStyle.txtinput, error.email ? { borderColor: 'red', borderWidth: 1 } : null]}
                            placeholder='Nhập email'
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={[{ marginTop: 24, alignItems: 'center' }]}>
                        {error.password ? <Text style={{ color: 'red' }}>{error.password}</Text> : null}
                        <TextInput
                            secureTextEntry={true}
                            style={[AppStyle.txtinput, error.password ? { borderColor: 'red', borderWidth: 1 } : null]}
                            onChangeText={setPassword}
                            placeholder='Nhập mật khẩu'
                        />
                    </View>
                    <View style={[{ alignItems: 'center', marginTop: 24 }]}>
                        {isLoading ? (
                            <ActivityIndicator size="large" color="#FF9900" />
                        ) : (
                            <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#FF9900' }]} onPress={loginUser}>
                                <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: '500' }]}>ĐĂNG NHẬP</Text>
                            </TouchableOpacity>
                        )}
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