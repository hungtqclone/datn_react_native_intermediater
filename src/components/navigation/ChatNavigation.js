import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import TestHelper from '../../Screens/TestHelper';
import Chat from '../../Screens/Chat';

const Stack = createNativeStackNavigator();



const ChatNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="list" component={TestHelper} />
                <Stack.Screen name="chat" component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ChatNavigation