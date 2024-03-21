import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailProduct from '../DetailProduct';
import ListUserChat from '../ListUserChat';
import Chat from '../Chat';
import PostsPresently from './PostsPresently';
import PostsHidden from './PostsHidden';

const Stack = createNativeStackNavigator();

const ManagementHNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PostsHidden" component={PostsHidden} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default ManagementHNavigation;
