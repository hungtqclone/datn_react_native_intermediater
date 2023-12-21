import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../users/UserContext';
import React, { useContext } from 'react'
import ProductNavigation from './ProductNavigation';
import BottomTabs from './BottomTabs';
import UserNavigation from './UserNavigation';

const AppNavigation = () => {
    const { user } = useContext(UserContext);
    return (
        <NavigationContainer>
            {user ? <BottomTabs /> : <UserNavigation />}
        </NavigationContainer>
    )
}

export default AppNavigation