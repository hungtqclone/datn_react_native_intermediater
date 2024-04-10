/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
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
import { MessageProvider } from './src/components/messages/MessageContext';
import SplashScreen from './src/Screens/SplashScreen';
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MessageProvider>
        <UserProvider>
          {loading ? <SplashScreen /> : <AppNavigation />}

        </UserProvider>
      </MessageProvider>
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