import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  const [name, setName] = useState('Sinan');

  useEffect(() => {
    console.log('Mounting of component');
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header color="green" headingColor="white" heading="Home" />

      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          {name}
        </Text>
      </View>
      <Button
      title='Update Name'
      onPress={()=>setName("IPD")}
      />
    </View>
  );
};

export default App;
