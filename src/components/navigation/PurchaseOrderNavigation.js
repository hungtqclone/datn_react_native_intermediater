/* eslint-disable prettier/prettier */
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
        <Text>Hoàn tiền/ Đã hủy</Text>
      );
    }
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
  swipeEnabled: true
});
const tabBarOptions = {
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
    width: 200, // Set the width of each tab
  },
};
const WaitConfirmStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="WaitConfirmScreen" component={WaitConfirmScreen} />
  </Stack.Navigator>
);

const ProcessingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProcessingScreen" component={ProcessingScreen} />
  </Stack.Navigator>
);

const ShippingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ShippingScreen" component={ShippingScreen} />
  </Stack.Navigator>
);

const DeliveredStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="DeliveredScreen" component={DeliveredScreen} />
  </Stack.Navigator>
);

const RefundCancelledStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="RefundCancelledScreen"
      component={RefundCancelledScreen}
    />
  </Stack.Navigator>
);
const PurchaseOrdersStack = () => {
  return (
    <Tab.Navigator
      
      screenOptions={options}
      tabBarOptions={tabBarOptions}>
      <Tab.Screen name="WaitConfirm" component={WaitConfirmStack} />
      <Tab.Screen name="Processing" component={ProcessingStack} />
      <Tab.Screen name="Shipping" component={ShippingStack} />
      <Tab.Screen name="Delivered" component={DeliveredStack} />
      <Tab.Screen
        name="RefundCancelled"
        component={RefundCancelledStack}
      />
    </Tab.Navigator>
  );
};

export default PurchaseOrdersStack;
