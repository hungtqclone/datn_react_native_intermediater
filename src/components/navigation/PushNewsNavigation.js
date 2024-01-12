import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ProductCategory from '../../Screens/ProductCategory';


const Stack = createNativeStackNavigator();

const PushNewsNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductCategory" component={ProductCategory} />
      

    </Stack.Navigator>
  );
};

export default PushNewsNavigation;
