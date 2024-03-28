/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
import Login from './src/Screens/Login';
import { UserProvider } from './src/components/users/UserContext';
import AppNavigation from './src/components/navigation/AppNavigation';
import socket from './src/components/helpers/socketIO';
function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={{ flex: 1 }}>
  //     <Foryou/>
  //   </SafeAreaView>
  // );
}

export default App;
// @ts-check