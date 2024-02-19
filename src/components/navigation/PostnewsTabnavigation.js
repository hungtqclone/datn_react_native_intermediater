/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Foryou from '../../Screens/News/Foryou';
import News from '../../Screens/News/news';
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const options = ({route}) => ({
  tabBarLabel: ({focused, color}) => {
    if (route.name === 'Foryou') {
      return focused ? (
        <Text
          style={{
            color: focused ? 'black' : 'black',
            fontWeight: focused ? 'bold' : 'normal',
            fontSize: focused ? 12 : 12,
          }}>
          Dành Cho bạn
        </Text>
      ) : (
        <Text>Dành cho bạn</Text>
      );
    } else if (route.name === 'News') {
      return focused ? (
        <Text
          style={{
            color: focused ? 'black' : 'black',
            fontWeight: focused ? 'bold' : 'normal',
            fontSize: focused ? 12 : 12,
          }}>
          Tin mới đăng
        </Text>
      ) : (
        <Text>Tin mới đăng</Text>
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
    fontSize: 12, // Adjus    t the font size as needed
    padding: 0, // Add padding to ensure full visibility
  },
  tabStyle: {
  //  width: 120, // Set the width of each tab
  },
});

const PostnewsStack = () => {
  return (
    <View
      style={{
        width: '100%',
       height:'30%'

      }}>
      <Tab.Navigator screenOptions={options}>
        <Tab.Screen name="Foryou" component={Foryou} />
        <Tab.Screen name="News" component={News} />
      </Tab.Navigator>
    </View>
  );
};

export default PostnewsStack;
