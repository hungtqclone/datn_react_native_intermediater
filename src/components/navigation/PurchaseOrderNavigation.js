/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import DeliveredScreen from '../../Screens/Profile/PurchaseOrder/TopTab/DeliveredScreen ';
import ProcessingScreen from '../../Screens/Profile/PurchaseOrder/TopTab/ProcessingScreen ';
import RefundCancelledScreen from '../../Screens/Profile/PurchaseOrder/TopTab/RefundCancelledScreen ';
import ShippingScreen from '../../Screens/Profile/PurchaseOrder/TopTab/ShippingScreen ';
import WaitConfirmScreen from '../../Screens/Profile/PurchaseOrder/TopTab/WaitConfirmScreen ';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const options = ({route}) => ({
  tabBarLabel: ({focused, color}) => {
    if (route.name === 'WaitConfirm') {
      return focused ? (
        <Text
          style={{
            color: focused ? 'black' : 'black',
            fontWeight: focused ? 'bold' : 'normal',
            fontSize: focused ? 12 : 12,
          }}>
          Chờ xác nhận
        </Text>
      ) : (
        <Text>Chờ xác nhận</Text>
      );
    } else if (route.name === 'Processing') {
      return focused ? (
        <Text
          style={{
            color: focused ? 'black' : 'black',
            fontWeight: focused ? 'bold' : 'normal',
            fontSize: focused ? 12 : 12,
          }}>
          Đang sử lí
        </Text>
      ) : (
        <Text>Đang sử lí</Text>
      );
    } else if (route.name === 'Shipping') {
      return focused ? (
        <Text
          style={{
            color: focused ? 'black' : 'black',
            fontWeight: focused ? 'bold' : 'normal',
            fontSize: focused ? 12 : 12,
          }}>
          Đang giao
        </Text>
      ) : (
        <Text>Đang giao</Text>
      );
    } else if (route.name === 'Delivered') {
      return focused ? (
        <Text
          style={{
            color: focused ? 'black' : 'black',
            fontWeight: focused ? 'bold' : 'normal',
            fontSize: focused ? 12 : 12,
          }}>
          Đã giao
        </Text>
      ) : (
        <Text>Đã giao</Text>
      );
    } else if (route.name === 'RefundCancelled') {
      return focused ? (
        <Text
          style={{
            color: focused ? 'black' : 'black',
            fontWeight: focused ? 'bold' : 'normal',
            fontSize: focused ? 12 : 12,
          }}>
          Hoàn tiền/ Đã hủy
        </Text>
      ) : (
        <Text 
        style={{
          fontSize: focused ? 12 : 12,
          width: 170,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >Hoàn tiền/ Đã hủy</Text>
      );
    }
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
  swipeEnabled: true,
  scrollEnabled: true,
  tabBarScrollEnabled: true,
  indicatorStyle: {
    backgroundColor: '#FFCC00',
  },
  allowFontScaling: false,
  showLabel: true,
  labelStyle: {
    fontSize: 14, // Adjus    t the font size as needed
    padding: 0, // Add padding to ensure full visibility
  },
  tabStyle: {
    // width: 200, // Set the width of each tab
  },
});

const PurchaseOrdersStack = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Tab.Navigator screenOptions={options}>
        <Tab.Screen name="WaitConfirm" component={WaitConfirmScreen} />
        <Tab.Screen name="Processing" component={ProcessingScreen} />
        <Tab.Screen name="Shipping" component={ShippingScreen} />
        <Tab.Screen name="Delivered" component={DeliveredScreen} />
        <Tab.Screen name="RefundCancelled" component={RefundCancelledScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default PurchaseOrdersStack;
