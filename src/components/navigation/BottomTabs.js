import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ProductNavigation from './ProductNavigation';
import Home from '../../Screens/Home';
import { Image } from '@rneui/base';
import DanhMucSP from '../../Screens/DanhMucSP';
import DetailProduct from '../../Screens/DetailProduct';
// import ViceCityScreen from '../../Screens/ViceCityScreen';
import StrollScreen from '../../Screens/stroll_market_screen';
import Profile_screen from '../../Screens/Profile/profile_screen';

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
        else if (route.name === 'Profile') {
            return focused ? <Text style={{ color: 'blue' }}>Tài khoản</Text> : <Text >Tài khoản</Text>
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

// const HomeStack = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="ViceCityScreen" component={ViceCityScreen} />
//         </Stack.Navigator>
//     )
// }

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chat" component={DanhMucSP} />
            <Tab.Screen name="Notification" component={DetailProduct} />
            <Tab.Screen name="ISell" component={StrollScreen} />
            <Tab.Screen name="Profile" component={Profile_screen} />
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