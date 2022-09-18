import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import axios from 'axios';

const App = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://technomide.com/amber-api/api/getAllProduct?page=0')
      .then(result => {
        setProducts(result.data.data);
      })
      .catch(error => {
        console.log(error, 'ERRRRRRRRRRRRRR');
      });
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <Header heading="Products" backButton={false} />
      <ListItem data={products}   />
    </ScrollView>
  );
};

export default App;
