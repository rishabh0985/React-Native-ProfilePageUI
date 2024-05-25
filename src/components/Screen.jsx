import {View, Text} from 'react-native';
import React from 'react';
import Card from '../main/Card';
import Card2 from '../main/Card2';
import Card3 from '../main/Card3';
import Card4 from '../main/Card4';
import Card5 from '../main/Card5';

const Screen = () => {
  return (
    <View style={{flex: 1}}>
      <Card />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </View>
  );
};

export default Screen;
