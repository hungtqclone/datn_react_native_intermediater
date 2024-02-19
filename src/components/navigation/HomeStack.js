/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

//chat
import ChatNavigation from './ChatNavigation';
import Home from '../../Screens/Home';
// Stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="chat" component={ChatNavigation} />
    </Stack.Navigator>
  );
};
export default HomeStack;
