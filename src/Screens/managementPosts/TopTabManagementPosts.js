import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PostsHidden from './PostsHidden'
import PostsPresently from './PostsPresently'

const Tab = createMaterialTopTabNavigator()

const options = ({ route }) => ({
    tabBarLabel: ({ focused, color }) => {
        if (route.name === 'PostsHidden') {
            return focused ? (
                <Text style={{ color: 'blue' }}>Tin đang hiện</Text>
            ) : (
                <Text>Tin đang hiện</Text>
            );
        } else if (route.name === 'PostsPresently') {
            return focused ? (
                <Text style={{ color: 'blue' }}>Tin đã ẩn</Text>
            ) : (
                <Text>Tin đã ẩn</Text>
            );
        }
    },
    headerShown: false,
    tabBarHideOnKeyboard: true,
});

const TopTabManagementPosts = () => {
    return (

        <Tab.Navigator screenOptions={options}>
            <Tab.Screen name="PostsHidden" component={PostsHidden} />
            <Tab.Screen name="PostsPresently" component={PostsPresently} />
        </Tab.Navigator>

    )
}

export default TopTabManagementPosts