/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import PostSaved from './PostSaved';
import DetailProduct from '../../DetailProduct';
const Stack = createNativeStackNavigator();

const PostSavedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='CategoriesDetail' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PostSaved" component={PostSaved} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default PostSavedNavigation;
