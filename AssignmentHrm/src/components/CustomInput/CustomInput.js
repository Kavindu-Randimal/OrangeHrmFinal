import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 42,

    padding: 5,

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    marginVertical: 5,
  },

  input: {
    padding: 5,
  },
});

export default CustomInput;
