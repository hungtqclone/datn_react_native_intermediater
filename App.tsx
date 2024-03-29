/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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



function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
      {/* <Login /> */}
    </SafeAreaView>
  );
}

export default App;
