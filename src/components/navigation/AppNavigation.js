/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../users/UserContext';
import React, { useContext, useEffect } from 'react'
import ProductNavigation from './ProductNavigation';
import BottomTabs from './BottomTabs';
import UserNavigation from './UserNavigation';
import { useMessage } from '../messages/MessageContext';
const AppNavigation = () => {
    const { socket } = useMessage()
    const { user } = useContext(UserContext);
    return (
        <NavigationContainer>
            {/* {user ? <BottomTabs /> : <UserNavigation />} */}
            {user ? <BottomTabs /> : <UserNavigation />}

        </NavigationContainer>
    )
}
export default AppNavigation