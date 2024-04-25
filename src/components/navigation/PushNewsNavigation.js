import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Postnews from '../../Screens/Postnews';
import DetailPostnews from '../../Screens/Postnews/DetailPostNews';
import Login from '../../Screens/Login';
import Register from '../../Screens/Register';


const Stack = createNativeStackNavigator();

const PushNewsNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Postnews" component={Postnews} />
      <Stack.Screen name="DetailPostnews" component={DetailPostnews} />
      

    </Stack.Navigator>
  );
};

export default PushNewsNavigation;
