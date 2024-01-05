import React from 'react';
// import type { PropsWithChildren } from 'react';
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
import Register from './src/Screens/Register';
import City from './src/Screens/City';
import ProductCategory from './src/Screens/ProductCategory';

function App() {



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <UserProvider>
        <AppNavigation />
      </UserProvider> */}
      <ProductCategory/>
    </SafeAreaView>
  );
}

export default App;
