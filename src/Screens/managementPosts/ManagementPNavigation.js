import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailProduct from '../DetailProduct';
import ListUserChat from '../../Screens/ListUserChat';
import Chat from '../../Screens/Chat';
import PostsPresently from './PostsPresently';
import PostsHidden from './PostsHidden';
import ItemPosts from '../../Item/ItemPosts';

const Stack = createNativeStackNavigator();

const ManagementPNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="PostsPresently" component={PostsPresently} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="ItemPosts" component={ItemPosts} />
    </Stack.Navigator>
  );
};

export default ManagementPNavigation;
