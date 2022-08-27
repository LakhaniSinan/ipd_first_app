import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Product from './src/containers/Product';
import ProductDetail from './src/containers/ProductDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './src/containers/profile';
import MyOrders from './src/containers/MyOrders';
import Helpline from './src/containers/Helpline';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProductStack() {
  return (
    <Stack.Navigator initialRouteName="Product">
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Product">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Orders"
        component={MyOrders}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Helpline" component={Helpline} />
    </Stack.Navigator>
  );
}

function MyStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Product">
        <Tab.Screen
          name="Product"
          component={ProductStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="ProfileStack" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
