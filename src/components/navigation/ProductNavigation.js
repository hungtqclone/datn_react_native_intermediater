import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Product from '../../Screens/Product';
import DescriptionProduct from '../../Screens/DescriptionProduct';
import Home from '../../Screens/Home';
import DanhMucSP from '../../Screens/DanhMucSP';
import DanhMucSPP from '../../Screens/DanhMucSPP';
import CategoriesDetail from '../../Screens/CategoriesDetail';


const Stack = createNativeStackNavigator();

const ProductNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="CategoriesDetail" component={CategoriesDetail} />
      <Stack.Screen name="danhMucSPP" component={DanhMucSPP} />
      <Stack.Screen name="product" component={Product} />
      <Stack.Screen name="descriptionProduct" component={DescriptionProduct} />
    </Stack.Navigator>
  );
};

export default ProductNavigation;
