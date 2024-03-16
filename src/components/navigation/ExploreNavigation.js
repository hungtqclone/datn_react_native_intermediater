/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DetailProduct from '../../Screens/DetailProduct';
import Explore from '../../Screens/StrollScreenTab/Explore';
const Stack = createNativeStackNavigator();

const ExploreNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='CategoriesDetail' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="DetailProduct" component={DetailProduct}/>
        </Stack.Navigator>
    );
};

export default ExploreNavigation;
