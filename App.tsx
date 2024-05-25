import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Screen from './src/components/Screen';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'#e4e4e3'}
        translucent={true}
        barStyle={'dark-content'}
        hidden={false}
      />
      <View style={{flex: 1, backgroundColor: '#e4e4e3'}}>
        <Screen />
      </View>
    </>
  );
};

export default App;
