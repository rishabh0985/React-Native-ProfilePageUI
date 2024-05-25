import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Card5 = () => {
  const handleDonePress = () => {
    // Code to handle the press event
    console.log('✓ DONE button pressed');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#494949',
        marginHorizontal: 20,
        overflow: 'hidden',
        position: 'absolute',
        padding: 15,
        borderRadius: 30,
        top: 720,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'flex-start',
          padding: 15,
          gap: 8,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            lineHeight: 20,
          }}>
          THIS WEEK
        </Text>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              gap: 10,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            {/* Day indicators */}
            <View
              style={{
                backgroundColor: 'yellow',
                height: 25,
                width: 25,
                alignItems: 'center',
                borderRadius: 20,
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  lineHeight: 23,
                  fontWeight: 'bold',
                }}>
                M
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'grey',
                height: 25,
                width: 25,
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  lineHeight: 28,
                  fontWeight: 'bold',
                }}>
                T
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'yellow',
                height: 25,
                width: 25,
                alignItems: 'center',
                borderRadius: 20,
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  lineHeight: 23,
                  fontWeight: 'bold',
                }}>
                W
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'grey',
                height: 25,
                width: 25,
                alignItems: 'center',
                borderRadius: 20,
                borderColor: 'yellow',
                borderWidth: 2,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  lineHeight: 25,
                  fontWeight: 'bold',
                }}>
                F
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#494949',
                height: 25,
                width: 25,
                alignItems: 'center',
                borderRadius: 20,
                borderColor: 'grey',
                borderWidth: 2,
                opacity: 0.5,
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 15,
                  lineHeight: 25,
                  fontWeight: 'bold',
                  opacity: 0.5,
                }}>
                T
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* "✓ DONE" button wrapped in TouchableOpacity */}
      <TouchableOpacity onPress={handleDonePress}>
        <View
          style={{
            backgroundColor: 'yellow',
            height: 80,
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            lineHeight: 20,
            borderWidth: 2,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            ✓ DONE
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card5;
