import React from 'react';
import {View, Text} from 'react-native';

const Header = props => {
  console.log('PROPSS=>>', props);
  return (
    <View
      style={{
        backgroundColor: '#540f44',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        {props.heading}
      </Text>
    </View>
  );
};

export default Header;
