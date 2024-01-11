import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ProductNavigation from './ProductNavigation';
import Home from '../../Screens/Home';
import ManagementNews from '../../Screens/ManagementNews';
import ProductCategory from '../../Screens/ProductCategory';
import PushNewsNavigation from './PushNewsNavigation';

import { Image } from '@rneui/base';

const options = ({ route }) => ({

    tabBarLabel: ({ focused, color }) => {
        if (route.name === 'ProductNavigation') {
            return focused ? <Text style={{ color: '#FFBA00' }}>Home</Text> : <Text >Home</Text>
        }
        else if (route.name === 'ManagementNews') {
            return focused ? <Text style={{ color: '#FFBA00' }}>Quản lý tin</Text> : <Text >Quản lý tin</Text>
        }
        else if (route.name === 'ProductCategory') {
            return focused ? <Text style={{ color: '#FFBA00' }}>Đăng tin</Text> : <Text >Đăng tin</Text>
        }
        else if (route.name === 'Notification') {
            return focused ? <Text style={{ color: '#FFBA00' }}>Thông báo</Text> : <Text >Thông báo</Text>
        }
        else if (route.name === 'ISell') {
            return focused ? <Text style={{ color: '#FFBA00' }}>Tôi bán</Text> : <Text >Tôi Bán</Text>
        }

    },
    tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'ProductNavigation') {
            return focused ? <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_homeye.png')} /> : <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_homegrey.png')} />
        }if (route.name === 'ManagementNews') {
            return focused ? <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_noteye.png')} /> : <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_notegrey.png')} />
        }if (route.name === 'PushNewsNavigation') {
            return focused ? <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_editblack.png')} /> : <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_editblack.png')} />
        }if (route.name === 'Notification') {
            return focused ? <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_bagye.png')} /> : <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_baggrey.png')} />
        }if (route.name === 'ISell') {
            return focused ? <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_userye.png')} /> : <Image style={stylesBottomTab.bottomTabIcon} source={require('../../../image/icon_usergrey.png')} />
        }
    },
    headerShown: false,
    tabBarHideOnKeyboard: true,
})

const BottomTabs = () => {

    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen name="ProductNavigation" component={ProductNavigation} />
            <Tab.Screen name="ManagementNews" component={ManagementNews} />
            <Tab.Screen name="PushNewsNavigation" component={PushNewsNavigation} />
            <Tab.Screen name="Notification" component={Home} />
            <Tab.Screen name="ISell" component={Home} />
        </Tab.Navigator>

    );
}

const stylesBottomTab = StyleSheet.create({
    bottomTabIcon: {
        padding:5,
        width: 25, height: 25
    }
})
export default BottomTabs