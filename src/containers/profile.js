import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

const Profile = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header heading="Profile" />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Orders')}
        style={styles.containerStyle}>
        <Text style={styles.textStyle}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Helpline')}
        style={styles.containerStyle}>
        <Text style={styles.textStyle}>Hepline</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 0.5,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: '#a3a3a3',
  },
  textStyle: {
    fontSize: 15,
    color: 'black',
  },
};

export default Profile;
