import {View, Text} from 'react-native';
import React from 'react';

const Card2 = () => {
  return (
    <View style={{marginHorizontal: 30}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
        Cucumber
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
          opacity: 0.5,
        }}>
        Zumo
      </Text>
    </View>
  );
};

export default Card2;
