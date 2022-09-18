import React from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';

const ListItem = ({data}) => {
  return (
    <View>
      {data.map(item => {
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
    </View>
  );
};

export default ListItem;
