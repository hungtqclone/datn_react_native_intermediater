import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ListUserChat from '../../Screens/ListUserChat';
import Chat from '../../Screens/Chat';

const Stack = createNativeStackNavigator();

const ChatNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="list" component={ListUserChat} />
      <Stack.Screen name="chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatNavigation;
