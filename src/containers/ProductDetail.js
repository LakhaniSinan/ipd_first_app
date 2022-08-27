import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';

const ProductDetail = props => {
  console.log(route, 'ROUTEEE_PROPS');

  const {route} = props;
  const {coverImage, name, price} = route.params.data;
  console.log(coverImage,"coverImagecoverImage");
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
            source={{uri: coverImage}}
          />
        </View>
        <Text>Name: {name}</Text>
        <Text>
          Price: <Text style={{fontWeight: 'bold'}}>Rs. {price}</Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => alert('Buy')}
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
};

export default ProductDetail;
