import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ProductNavigation from './ProductNavigation';
import Home from '../../Screens/Home';
import { Image } from '@rneui/base';

const options = ({ route }) => ({

    tabBarLabel: ({ focused, color }) => {
        if (route.name === 'Home') {
            return focused ? <Text style={{ color: 'blue' }}>Home</Text> : <Text >Home</Text>
        } else if (route.name === 'Chat') {
            return focused ? <Text style={{ color: 'blue' }}>Chat</Text> : <Text >Chat</Text>
        }
        else if (route.name === 'Notification') {
            return focused ? <Text style={{ color: 'blue' }}>Thông báo</Text> : <Text >Thông báo</Text>
        }
        else if (route.name === 'ISell') {
            return focused ? <Text style={{ color: 'blue' }}>Tôi bán</Text> : <Text >Tôi Bán</Text>
        }
        else if (route.name === 'More') {
            return focused ? <Text style={{ color: 'blue' }}>Thêm</Text> : <Text >Thêm</Text>
        }

    },
    tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
            return focused ? <Image style={stylesBottomTab.bottomTabIcon} source={require('../../assets/images/robot-dev.png')} /> : <Image style={stylesBottomTab.bottomTabIcon} source={require('../../assets/images/robot-prod.png')} />
        }

    },


    headerShown: false,
    tabBarHideOnKeyboard: true,
})

const BottomTabs = () => {
    return (

        <Tab.Navigator screenOptions={options}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chat" component={Home} />
            <Tab.Screen name="Notification" component={Home} />
            <Tab.Screen name="ISell" component={Home} />
            <Tab.Screen name="More" component={Home} />
            {/* <Tab.Screen name="Product" component={ProductNavigation} /> */}
        </Tab.Navigator>
    );
}

const stylesBottomTab = StyleSheet.create({
    bottomTabIcon: {
        width: 30, height: 30
    }
})
export default BottomTabs