import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../users/UserContext';
import React, { useContext } from 'react'
import ProductNavigation from './ProductNavigation';
import BottomTabs from './BottomTabs';
import UserNavigation from './UserNavigation';
import ViewPropTypes from 'deprecated-react-native-prop-types';
const AppNavigation = () => {
    const { user } = useContext(UserContext);
    return (
        <NavigationContainer>
            {/* {user ? <BottomTabs /> : <UserNavigation />} */}
            {user ? <UserNavigation /> : <BottomTabs />}

        </NavigationContainer>
    )
}

export default AppNavigation