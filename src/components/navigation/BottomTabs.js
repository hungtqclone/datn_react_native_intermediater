/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ProductNavigation from './ProductNavigation';
import Home from '../../Screens/Home';
import {Image} from '@rneui/base';
import DanhMucSP from '../../Screens/DanhMucSP';
import DetailProduct from '../../Screens/DetailProduct';
import ManagementNews from '../../Screens/ManagementNews';
import StrollScreen from '../../Screens/stroll_market_screen';
import Profile_screen from '../../Screens/Profile/profile_screen';
import SalesWalletScreen from '../../Screens/Profile/SalesWallet/SalesWalletScreen';
// import ViceCityScreen from '../../Screens/ViceCityScreen';

import PurchaseOrdersScreen from '../../Screens/Profile/PurchaseOrder/PurchaseOrdersScreen';
import SalesOrderScreen from '../../Screens/Profile/SalesOrder/SalesOrderScreen';
// Stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const options = ({route}) => ({
  tabBarLabel: ({focused, color}) => {
    if (route.name === 'ProductNavigation') {
      return focused ? (
        <Text style={{color: 'blue'}}>Home</Text>
      ) : (
        <Text>Home</Text>
      );
    } else if (route.name === 'NewsManagement') {
      return focused ? (
        <Text style={{color: 'blue'}}>Quản lý tin</Text>
      ) : (
        <Text>Quản lý tin</Text>
      );
    } else if (route.name === 'PostNews') {
      return focused ? (
        <Text style={{color: 'blue'}}>Đăng tin</Text>
      ) : (
        <Text>Đăng tin</Text>
      );
    } else if (route.name === 'StrollTheMarket') {
      return focused ? (
        <Text style={{color: 'blue'}}>Dạo chợ</Text>
      ) : (
        <Text>Dạo chợ</Text>
      );
    } else if (route.name === 'Account') {
      return focused ? (
        <Text style={{color: 'blue'}}>Tài khoản</Text>
      ) : (
        <Text>Tài khoản</Text>
      );
    }
  },
  tabBarIcon: ({focused, color, size}) => {
    if (route.name === 'Home') {
      return focused ? (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../assets/images/icons/homeActivateIcon.png')}
        />
      ) : (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../assets/images/icons/homeInactiveIcon.png')}
        />
      );
    }
  },  
  headerShown: false,
  tabBarHideOnKeyboard: true,
});
const ProflieStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Proflie" component={Profile_screen} />
      <Stack.Screen
        name="PurchaseOrdersScreen"
        component={PurchaseOrdersScreen}
      />
      <Stack.Screen
        name="SalesOrderScreen"
        component={SalesOrderScreen}
      />
        <Stack.Screen
        name="SalesWalletScreen"
        component={SalesWalletScreen}
      />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="ProductNavigation" component={ProductNavigation} />
      <Tab.Screen name="NewsManagement" component={ManagementNews} />
      <Tab.Screen name="PostNews" component={DetailProduct} />
      <Tab.Screen name="StrollTheMarket" component={StrollScreen} />
      <Tab.Screen name="Account" component={ProflieStack} />
      {/* <Tab.Screen name="Product" component={PurchaseOrdersScreen} /> */}
    </Tab.Navigator>
  );
};

const stylesBottomTab = StyleSheet.create({
  bottomTabIcon: {
    width: 25,
    height: 25,
    marginTop: 8,
  },
});
export default BottomTabs;
