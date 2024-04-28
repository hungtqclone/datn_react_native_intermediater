/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Product from '../../Screens/Product';
import DescriptionProduct from '../../Screens/DescriptionProduct';
import Home from '../../Screens/Home';
import DanhMucSP from '../../Screens/DanhMucSP';
import DanhMucSPP from '../../Screens/DanhMucSPP';
import CategoriesDetail from '../../Screens/CategoriesDetail';
import Realestate from '../../Screens/DetailCategories/Realestate';
import Vehicles from '../../Screens/DetailCategories/Vehicles';
import Jobber from '../../Screens/DetailCategories/Jober';
import DetailPostnews from '../../Screens/Postnews/DetailPostNews';
import HomeStack from './HomeStack';
import DetailProduct from '../../Screens/DetailProduct';
import Foryou from '../../Screens/News/Foryou';
import Chat from '../../Screens/Chat';
import ChatNavigation from './ChatNavigation';
import Login from '../../Screens/Login';
import BrandProduct from '../../Screens/BrandProduct';
const Stack = createNativeStackNavigator();

const ProductNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='CategoriesDetail' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="jobber" component={Jobber} />
      <Stack.Screen name="realestate" component={Realestate} />
      <Stack.Screen name="CategoriesDetail" component={CategoriesDetail} />
      <Stack.Screen name="danhMucSPP" component={DanhMucSPP} />
      <Stack.Screen name="product" component={Product} />
      <Stack.Screen name="descriptionProduct" component={DescriptionProduct} />
      <Stack.Screen name="vehicles" component={Vehicles} />
      <Stack.Screen name="DetailPostnews" component={DetailPostnews} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
      <Stack.Screen name="Foryou" component={Foryou} />
      <Stack.Screen name="ChatNavigation" component={ChatNavigation} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BrandProduct" component={BrandProduct} />
      
    

    </Stack.Navigator>
  );
};

export default ProductNavigation;
