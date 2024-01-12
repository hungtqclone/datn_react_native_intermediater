import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Login from '../../Screens/Login';
import Register from '../../Screens/Register';
import Home from '../../Screens/Home';
import BottomTabs from './BottomTabs';
import ViewPropTypes from 'deprecated-react-native-prop-types';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default UserNavigation