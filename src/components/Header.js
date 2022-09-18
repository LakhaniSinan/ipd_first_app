import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({heading, backButton}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
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
        {heading}
      </Text>
      {backButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 10}}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
