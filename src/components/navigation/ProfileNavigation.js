/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import Profile_screen from '../../Screens/Profile/profile_screen';
import SalesWalletScreen from '../../Screens/Profile/SalesWallet/SalesWalletScreen';
import PostSaved from '../../Screens/Profile/PostSaved/PostSaved';
import SavedSearchScreen from '../../Screens/Profile/SavedSearch/SavedSearchScreen';
import PurchaseOrdersScreen from '../../Screens/Profile/PurchaseOrder/PurchaseOrdersScreen';
import SalesOrderScreen from '../../Screens/Profile/SalesOrder/SalesOrderScreen';
import ReviewedFMeScreen from '../../Screens/Profile/ReviewFMe/ReviewedFMeScreen';
import ReviewFMeScreen from '../../Screens/Profile/ReviewFMe/ReviewFMeScreen';
// Stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ReviewStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReviewFMeScreen" component={ReviewFMeScreen} />
      <Stack.Screen name="ReviewedFMeScreen" component={ReviewedFMeScreen} />
    </Stack.Navigator>
  );
};

const ProflieStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Proflie" component={Profile_screen} />
      <Stack.Screen
        name="PurchaseOrdersScreen"
        component={PurchaseOrdersScreen}
      />
      <Stack.Screen name="SalesOrderScreen" component={SalesOrderScreen} />
      <Stack.Screen name="SalesWalletScreen" component={SalesWalletScreen} />
      <Stack.Screen name="PostSaved" component={PostSaved} />
      <Stack.Screen name="SavedSearchScreen" component={SavedSearchScreen} />
      <Stack.Screen name="ReviewStack" component={ReviewStack} />
    </Stack.Navigator>
  );
};
export default ProflieStack;
