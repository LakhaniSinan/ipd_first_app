import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import Header from '../components/Header';
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
      <Header heading="Products" />
      {products.map(item => {
        return (
          <View>
            <View
              style={{
                marginVertical: 10,
                borderWidth: 0.5,
                marginHorizontal: 10,
                borderColor: '#a3a3a3',
                borderRadius: 10,
                padding: 10,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  style={{height: 200, width: 200}}
                  source={{uri: item.coverImage}}
                />
              </View>
              <Text>Name: {item.name}</Text>
              <Text>
                Price:{' '}
                <Text style={{fontWeight: 'bold'}}>Rs. {item.price}</Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ProductDetail', {data: item})
              }
              style={{
                alignItems: 'center',
                backgroundColor: '#540f44',
                marginHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default App;
