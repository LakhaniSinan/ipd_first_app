import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';

const MyOrders = () => {
  return (
    <View>
      <Header backButton={true}  heading="My Orders" />
      <Text>MyOrders</Text>
    </View>
  );
};

export default MyOrders;
