import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export const GetRouteNameProfile = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName?.includes('PostSavedNavigation')) {
        return 'none';
    } else if (routeName?.includes('SalesOrderScreen')) {
        return 'none';
    }
    else if (routeName?.includes('PurchaseOrdersScreen')) {
        return 'none';
    }
    else if (routeName?.includes('SalesWalletScreen')) {
        return 'none';
    } else if (routeName?.includes('SavedSearchScreen')) {
        return 'none';
    } else if (routeName?.includes('ReviewStack')) {
        return 'none';
    } else if (routeName?.includes('PhonePricing')) {
        return 'none';
    } else if (routeName?.includes('AccountSettingsScreen')) {
        return 'none';
    }
    else if (routeName?.includes('HelpScreen')) {
        return 'none';
    } else if (routeName?.includes('CommentsScreen')) {
        return 'none';
    }
    return 'flex';
};
export const GetRouteNameScroll = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName?.includes('NearYouNavigation')) {
        return 'none';
    } else if (routeName?.includes('Explore')) {
        return 'none';
    }
    return 'flex';
};