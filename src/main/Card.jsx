import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Main = () => {
  const handleFirstViewClick = () => {
    console.log('First view clicked');
  };

  const handleSecondViewClick = () => {
    console.log('Second view clicked');
  };

  return (
    <View
      style={{
        height: 90,
        margin: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={handleFirstViewClick}>
        <View
          style={{
            backgroundColor: 'white',
            height: 55,
            width: 55,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 45,
              lineHeight: 48,
            }}>
            ←
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSecondViewClick}>
        <View
          style={{
            backgroundColor: 'white',
            height: 55,
            width: 55,
            alignItems: 'center',
            borderRadius: 30,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 25, lineHeight: 48}}>📋</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
