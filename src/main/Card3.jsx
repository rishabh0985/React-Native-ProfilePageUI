import {View, Text} from 'react-native';
import React from 'react';

const Card3 = () => {
  return (
    <View
      style={{
        marginHorizontal: 30,
        //  backgroundColor: 'red',
        flexDirection: 'row',
        //     alignItems: 'flex-end',
        //  justifyContent: 'flex-end',
        maxHeight: 150,
      }}>
      <Text style={{color: 'black', fontSize: 150}}>39</Text>
      <View
        style={{
          //     borderStartColor: 'white',
          alignItems: 'flex-end',
          // /  backgroundColor: 'white',
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            marginLeft: 10,
            fontWeight: 'bold',
          }}>
          KCAL
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            marginLeft: 10,
            fontWeight: 'bold',
          }}>
          CALORIES
        </Text>
      </View>
    </View>
  );
};

export default Card3;
