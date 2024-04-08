/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

//chat
import ChatNavigation from './ChatNavigation';
import ManagementNews from '../../Screens/ManagementNews';

// Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../../Screens/Chat';
import DetailProduct from '../../Screens/DetailProduct';
import ItemPosts from '../../Item/ItemPosts';
const Stack = createNativeStackNavigator();

const ManagementStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="ManagementNews" component={ManagementNews} />
      <Stack.Screen name="DetailProducts" component={DetailProduct} />
      <Stack.Screen name="ChatNavigation" component={ChatNavigation} />
    </Stack.Navigator>
  );
};
export default ManagementStack;
