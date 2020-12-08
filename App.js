import React, { useEffect } from 'react';
import { StyleSheet, Text, View ,AppState} from 'react-native'; 
import { NavigationContainer,useRoute,NavigationAction } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();

import Login from './screens/login';
import Home from './screens/home'


export default function App(){

  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
}