/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DetailProduct from '../../DetailProduct';
import SavedSearchScreen from './SavedSearchScreen';
const Stack = createNativeStackNavigator();

const SearchSaveNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='CategoriesDetail' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SavedSearchScreen" component={SavedSearchScreen} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default SearchSaveNavigation;
