import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [alternatePhone, setAlternatePhone] = useState('');

  useEffect(() => {
    // console.log('Mounting of component');
  }, []);

  console.log(email, 'I RAN');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <TextInput
          style={{paddingLeft: 10}}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <TextInput
          style={{paddingLeft: 10}}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <TextInput
          style={{paddingLeft: 10}}
          placeholder="Number"
          value={number}
          keyboardType="number-pad"
          maxLength={11}
          onChangeText={num => setNumber(num)}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <TextInput
          secureTextEntry
          style={{paddingLeft: 10}}
          placeholder="Password"
          value={password}
          onChangeText={pass => setPassword(pass)}
        />
      </View>

      <TouchableOpacity
      onPress={()=>alert("i am pressed")}
        style={{
          backgroundColor: '#980473',
          paddingVertical: 10,
          borderRadius: 5,
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Register{' '}
        </Text>
      </TouchableOpacity>

      {/* <Header color="green" headingColor="white" heading="Home" /> */}
      {/* <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          {name}
        </Text>
      </View> */}
      {/* <Button title="Update Name" onPress={() => bagColor="green"} /> */}
    </View>
  );
};

export default App;
