import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import ListItem from '../components/ListItem';

const Favourites = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://technomide.com/amber-api/api/getAllProduct?page=1')
      .then(result => {
        setProducts(result.data.data);
      })
      .catch(error => {
        console.log(error, 'ERRRRRRRRRRRRRR');
      });
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <Header heading="Favourites Products" />
      <ListItem data={products} />
    </ScrollView>
  );
};

export default Favourites;
