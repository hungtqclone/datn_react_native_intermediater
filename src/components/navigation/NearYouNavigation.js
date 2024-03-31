/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DetailProduct from '../../Screens/DetailProduct';
import NearYou from '../../Screens/StrollScreenTab/NearYou';
import { GetRouteNameScroll } from './GetRouteNameMarket';
const Stack = createNativeStackNavigator();

const NearYouNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NearYou" component={NearYou} />
            {/* <Stack.Screen name="DetailProduct" component={DetailProduct} /> */}
        </Stack.Navigator>
    );
};

export default NearYouNavigation;
