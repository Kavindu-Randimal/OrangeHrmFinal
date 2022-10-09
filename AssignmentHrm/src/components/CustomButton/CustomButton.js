import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#f47c04',
  },

  container_SECONDARY: {
    backgroundColor: '#ff00b9',
  },

  container_TERTIARY: {},

  container_LOGOUT: {
    backgroundColor: 'red',
    width: '40%',
    marginLeft: 95,
    marginTop: 40,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_TERTIARY: {
    color: 'gray',
    fontWeight: 'normal',
  },
});

export default CustomButton;
