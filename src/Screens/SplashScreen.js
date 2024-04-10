import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <View style={{ backgroundColor: "white", flex: 1, justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', justifyContent: 'center', height: 300 }}>
                <Image style={{ width: 200, height: 200 }} source={require('../assets/images/iconApp.jpg')} />
                <ActivityIndicator
                    style={{ marginBottom: 150 }}
                    size="large"
                    color="#3498db"
                />
            </View>
        </View>
    )
}

export default SplashScreen