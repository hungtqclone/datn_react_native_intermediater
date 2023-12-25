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
import DetailResultFind from './src/Screens/DetailResultFind';
import Register from './src/Screens/Register';
import DetailProduct from './src/Screens/DetailProduct';
import DanhMucSP from './src/Screens/DanhMucSP';
import DanhMucSPP from './src/Screens/DanhMucSPP';
import TestHelper from './src/Screens/TestHelper';



function App() {

  // return(
  //   <Register/>
  // )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <UserProvider> */}
      {/* <AppNavigation /> */}
      {/* <DanhMucSP/>
      </UserProvider> */}
      {/* <Login /> */}
      {/* <DetailResultFind /> */}
      <TestHelper />
    </SafeAreaView>
  );
}

export default App;
