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
import Header from './src/components/Header';
import axios from 'axios';

const App = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [number, setNumber] = useState('');
  // const [alternatePhone, setAlternatePhone] = useState('');

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
    // console.log('Mounting of component');
  }, []);

  console.log(typeof products, 'I RAN');

  return (
    <ScrollView style={{flex: 1}}>
      <Header heading="Products" />
      {products.map(item => {
        console.log(item, 'ITEMMMMMMMMMMMMMM=>>>>>>>>>>.');
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
            onPress={()=>Linking.openURL("www.google.com")}
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

    // <View style={{flex: 1}}>
    //   <View
    //     style={{
    //       borderWidth: 1,
    //       marginHorizontal: 10,
    //       marginVertical: 10,
    //     }}>
    //     <TextInput
    //       style={{paddingLeft: 10}}
    //       placeholder="Name"
    //       value={name}
    //       onChangeText={text => setName(text)}
    //     />
    //   </View>

    //   <View
    //     style={{
    //       borderWidth: 1,
    //       marginHorizontal: 10,
    //       marginVertical: 10,
    //     }}>
    //     <TextInput
    //       style={{paddingLeft: 10}}
    //       placeholder="Email"
    //       value={email}
    //       onChangeText={text => setEmail(text)}
    //     />
    //   </View>

    //   <View
    //     style={{
    //       borderWidth: 1,
    //       marginHorizontal: 10,
    //       marginVertical: 10,
    //     }}>
    //     <TextInput
    //       style={{paddingLeft: 10}}
    //       placeholder="Number"
    //       value={number}
    //       keyboardType="number-pad"
    //       maxLength={11}
    //       onChangeText={num => setNumber(num)}
    //     />
    //   </View>

    //   <View
    //     style={{
    //       borderWidth: 1,
    //       marginHorizontal: 10,
    //       marginVertical: 10,
    //     }}>
    //     <TextInput
    //       secureTextEntry
    //       style={{paddingLeft: 10}}
    //       placeholder="Password"
    //       value={password}
    //       onChangeText={pass => setPassword(pass)}
    //     />
    //   </View>

    //   <TouchableOpacity
    //     onPress={() => alert('i am pressed')}
    //     style={{
    //       backgroundColor: '#980473',
    //       paddingVertical: 10,
    //       borderRadius: 5,
    //       marginHorizontal: 10,
    //     }}>
    //     <Text
    //       style={{
    //         textAlign: 'center',
    //         color: 'white',
    //         fontWeight: 'bold',
    //         fontSize: 18,
    //       }}>
    //       Register{' '}
    //     </Text>
    //   </TouchableOpacity>

    //   {/* <Header color="green" headingColor="white" heading="Home" /> */}
    //   {/* <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
    //     <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
    //       {name}
    //     </Text>
    //   </View> */}
    //   {/* <Button title="Update Name" onPress={() => bagColor="green"} /> */}
    // </View>
  );
};

export default App;
