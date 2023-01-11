import  React from 'react';
import { } from 'react-native';
import SignupScreen  from './Components/SignupScreen';
import LoginScreen  from './Components/LoginScreen';
import Home  from './Components/Home'
import Home2 from './Components/Home2'
import ProductDetails from './Components/productdetails'
import ViewCart from './Components/ViewCart'
import Checkout from './Components/Checkout'
import FAQS from './Components/FAQS'
import Adminadditem from './Components/Adminadditem'
import Drawer from './Components/drawer'
import Admindash from './Components/AdminDashboard'
import Adminedititem from './Components/Adminedititem';
import Admindeleteitem from './Components/Admindeleteitem';
import Admineditform from './Components/Admineditform';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    //<Home2/>
    //<Adminedititem/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='AdminDashboard' component={Admindash}></Stack.Screen>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='Checkout' component={Checkout}></Stack.Screen>
        <Stack.Screen name='Home2' component={Home2}></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignupScreen}></Stack.Screen>
        <Stack.Screen name='Cart' component={ViewCart}></Stack.Screen> 
        <Stack.Screen name='productdetails' component={ProductDetails}></Stack.Screen> 
        <Stack.Screen name='Menu' component={Drawer}></Stack.Screen>
        <Stack.Screen name='FAQS' component={FAQS}></Stack.Screen>
        <Stack.Screen name='Adminadditem' component={Adminadditem}></Stack.Screen>
        <Stack.Screen name='Adminedititem' component={Adminedititem}></Stack.Screen>
        <Stack.Screen name='Admindeleteitem' component={Admindeleteitem}></Stack.Screen>
        <Stack.Screen name='Admineditform' component={Admineditform}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


