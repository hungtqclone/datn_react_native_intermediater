/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NearYouNavigation from '../components/navigation/NearYouNavigation';
import { GetRouteNameScroll } from '../components/navigation/GetRouteNameMarket';
import ExploreNavigation from '../components/navigation/ExploreNavigation';
const Tab = createMaterialTopTabNavigator();

const StrollTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' }, }}>
            <Tab.Screen name="NearYouNavigation" component={NearYouNavigation} options={{ tabBarLabel: 'Gần Bạn' }} />
            <Tab.Screen name="ExploreNavigation" component={ExploreNavigation} options={{ tabBarLabel: 'Khám Phá' }} />
        </Tab.Navigator>
    );
}

const StrollScreen = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.body}>
            <View style={styles.appbar}>
                <Text style={styles.appbarTitle}>Dạo chợ</Text>
                <View style={styles.appbarIcon}>
                    <TouchableOpacity>
                        <Image style={styles.appbarIconimg} source={require('../assets/images/icons/icon_search.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.appbarIconimg} source={require('../assets/images/icons/icon_notification.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ChatNavigation')} >
                        <Image style={styles.appbarIconimg} source={require('../assets/images/icons/icon_chat.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <StrollTabs />
        </View>
    )
}

export default StrollScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFCC00',
        height: 50,
        padding: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    appbarTitle: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    appbarIconimg: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    },
    appbarIcon: {
        flexDirection: 'row',
    },
});
