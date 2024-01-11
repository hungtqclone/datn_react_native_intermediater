import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ProductNavigation from './ProductNavigation';
import Home from '../../Screens/Home';
import ManagementNews from '../../Screens/ManagementNews';
import ProductCategory from '../../Screens/ProductCategory';

import { Image } from '@rneui/base';

const options = ({ route }) => ({

    tabBarLabel: ({ focused, color }) => {
        if (route.name === 'ProductNavigation') {
            return focused ? <Text style={{ color: 'blue' }}>Home</Text> : <Text >Home</Text>
        }
        else if (route.name === 'ManagementNews') {
            return focused ? <Text style={{ color: 'blue' }}>Quản lý tin</Text> : <Text >Quản lý tin</Text>
        }
        else if (route.name === 'ProductCategory') {
            return focused ? <Text style={{ color: 'blue' }}>Đăng tin</Text> : <Text >Đăng tin</Text>
        }
        else if (route.name === 'Notification') {
            return focused ? <Text style={{ color: 'blue' }}>Thông báo</Text> : <Text >Thông báo</Text>
        }
        else if (route.name === 'ISell') {
            return focused ? <Text style={{ color: 'blue' }}>Tôi bán</Text> : <Text >Tôi Bán</Text>
        }

    },
    tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'ProductNavigation') {
            return focused ? <Image style={stylesBottomTab.bottomTabIcon} source={require('../../assets/images/robot-dev.png')} /> : <Image style={stylesBottomTab.bottomTabIcon} source={require('../../assets/images/robot-prod.png')} />
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
            <Tab.Screen name="ProductCategory" component={ProductCategory} />
            <Tab.Screen name="Notification" component={Home} />
            <Tab.Screen name="ISell" component={Home} />
        </Tab.Navigator>

    );
}

const stylesBottomTab = StyleSheet.create({
    bottomTabIcon: {
        width: 30, height: 30
    }
})
export default BottomTabs