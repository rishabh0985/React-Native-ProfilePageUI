import {View, Text} from 'react-native';
import React from 'react';

const Card4 = () => {
  return (
    <View style={{}}>
      <View
        style={{
          marginHorizontal: 30,
          height: 100,
          backgroundColor: 'yellow',
          flexDirection: 'row',
          gap: 20,
          width: 200,
          justifyContent: 'center',
          borderRadius: 20,
          alignItems: 'center',
          margin: 20,
        }}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
          18
        </Text>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            DAYS
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            DONE
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 50,
              //  backgroundColor: 'red',
              lineHeight: 50,
            }}>
            ↑
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card4;
