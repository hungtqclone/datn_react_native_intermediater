/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ProductNavigation from './ProductNavigation';
import Home from '../../Screens/Home';
import { Image } from '@rneui/base';
import DanhMucSP from '../../Screens/DanhMucSP';
import DetailProduct from '../../Screens/DetailProduct';
import ManagementNews from '../../Screens/ManagementNews';
import StrollScreen from '../../Screens/stroll_market_screen';
import ProflieStack from './ProfileNavigation';
import PushNewsNavigation from './PushNewsNavigation';
import ScrollStack from './ScrollStack';
import ManagementStack from './ManagementStack';
// import ViceCityScreen from '../../Screens/ViceCityScreen';
// Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetRouteNameManament, GetRouteNameProfile, GetRouteNameScroll, GetRouteNameHome } from './GetRouteNameMarket';

const Stack = createNativeStackNavigator();

const options = ({ route }) => ({
  tabBarLabel: ({ focused, color }) => {
    if (route.name === 'ProductNavigation') {
      return focused ? (
        <Text style={{ color: '#FFBA00' }}>Home</Text>
      ) : (
        <Text>Home</Text>
      );
    } else if (route.name === 'NewsManagement') {
      return focused ? (
        <Text style={{ color: '#FFBA00' }}>Quản lý tin</Text>
      ) : (
        <Text>Quản lý tin</Text>
      );
    } else if (route.name === 'PostNews') {
      return focused ? (
        <Text style={{ color: '#FFBA00' }}>Đăng tin</Text>
      ) : (
        <Text>Đăng tin</Text>
      );
    } else if (route.name === 'StrollTheMarket') {
      return focused ? (
        <Text style={{ color: '#FFBA00' }}>Dạo chợ</Text>
      ) : (
        <Text>Dạo chợ</Text>
      );
    } else if (route.name === 'Account') {
      return focused ? (
        <Text style={{ color: '#FFBA00' }}>Tài khoản</Text>
      ) : (
        <Text>Tài khoản</Text>
      );
    }
  },
  tabBarIcon: ({ focused, color, size }) => {
    if (route.name === 'ProductNavigation') {
      return focused ? (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_homeye.png')}
        />
      ) : (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_homegrey.png')}
        />
      );
    } if (route.name === 'NewsManagement') {
      return focused ? (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_noteye.png')}
        />
      ) : (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_notegrey.png')}
        />
      );
    } if (route.name === 'PostNews') {
      return (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_editblack.png')}
        />
      );
    } if (route.name === 'StrollTheMarket') {
      return focused ? (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_bagye.png')}
        />
      ) : (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_baggrey.png')}
        />
      );
    } if (route.name === 'Account') {
      return focused ? (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_userye.png')}
        />
      ) : (
        <Image
          style={stylesBottomTab.bottomTabIcon}
          source={require('../../../image/icon_usergrey.png')}
        />
      );
    }


  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
});
const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="ProductNavigation" component={ProductNavigation}
       options={({ route }) => ({
        tabBarStyle: { display: GetRouteNameHome(route) },
        headerShown: false,
      })}
      />
      <Tab.Screen name="NewsManagement" component={ManagementStack}
        options={({ route }) => ({
          tabBarStyle: { display: GetRouteNameManament(route) },
          headerShown: false,
        })} />
      <Tab.Screen name="PostNews" component={PushNewsNavigation} />
      {/* <Tab.Screen name="StrollTheMarket" component={StrollScreen} /> */}
      <Tab.Screen name="StrollTheMarket" component={ScrollStack}
        options={({ route }) => ({
          tabBarStyle: { display: GetRouteNameScroll(route) },
          headerShown: false,
        })} />
      <Tab.Screen name="Account" component={ProflieStack}
        options={({ route }) => ({
          tabBarStyle: { display: GetRouteNameProfile(route) },
          headerShown: false,
        })} />
      {/* <Tab.Screen name="Product" component={PurchaseOrdersScreen} /> */}
    </Tab.Navigator>
  );
};

const stylesBottomTab = StyleSheet.create({
  bottomTabIcon: {
    width: 25,
    height: 25,
    //marginTop: 8,
  },
});
export default BottomTabs;
