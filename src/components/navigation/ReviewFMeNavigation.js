/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Seller from '../../Screens/Profile/ReviewFMe/TopTab/Seller';
import Buyer from '../../Screens/Profile/ReviewFMe/TopTab/Buyer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const options = ({route}) => ({
  tabBarLabel: ({focused, color}) => {
    if (route.name === 'Seller') {
      return focused ? (
        <Text
          style={{
            color: 'black',
            fontWeight: focused ? 'bold' : 'normal',
            fontSize: focused ? 12 : 12,
          }}>
          NGƯỜI BÁN
        </Text>
      ) : (
        <Text>NGƯỜI BÁN</Text>
      );
    } else if (route.name === 'Buyer') {
      return focused ? (
        <Text
          style={{
            color: focused ? 'black' : 'black',
            fontWeight: focused ? 'bold' : 'bold',
            fontSize: focused ? 12 : 12,
          }}>
          NGƯỜI MUA
        </Text>
      ) : (
        <Text>NGƯỜI MUA</Text>
      );
    }
  },
});
const ReviewFMeScreenTab = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Tab.Navigator screenOptions={options}>
        <Tab.Screen name="Seller" component={Seller} />
        <Tab.Screen name="Buyer" component={Buyer} />
      </Tab.Navigator>
    </View>
  );
};

export default ReviewFMeScreenTab;
