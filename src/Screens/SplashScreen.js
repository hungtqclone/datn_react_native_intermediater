import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen = ({
    backgroundColor = "white",
    imageSource = 'src/assets/images/iconApp.jpg',
    indicatorColor = "#3498db",
    loadingText = "đang tải, vui lòng đợi..."
}) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/iconApp.jpg')} />
                <ActivityIndicator
                    style={styles.activityIndicator}
                    size="large"
                    color={indicatorColor}
                />
                <Text style={styles.loadingText}>{loadingText}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center', // Added to center all items including the text
        height: 300,
    },
    logo: {
        width: 200,
        height: 200
    },
    activityIndicator: {
        marginVertical: 20 // Adjusted to add spacing above and below
    },
    loadingText: {
        fontSize: 16, // Adjust font size as needed
        color: '#2c3e50' // Adjust text color as needed
    }
});

export default SplashScreen;
