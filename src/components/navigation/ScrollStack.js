/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import NearYou from '../../Screens/StrollScreenTab/NearYou';
import StrollScreen from '../../Screens/stroll_market_screen';
//chat
import ChatNavigation from './ChatNavigation';
import DetailProduct from '../../Screens/DetailProduct';
// Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ScrollStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',

      }}>
      <Stack.Screen name="StrollScreen" component={StrollScreen} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
      <Stack.Screen name="ChatNavigation" component={ChatNavigation} />
    </Stack.Navigator>
  );
};
export default ScrollStack;
