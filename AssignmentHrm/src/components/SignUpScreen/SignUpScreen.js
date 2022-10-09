import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';

const SignUpScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const {height} = useWindowDimensions();

  const onSignUpPressed = () => {
    console.warn('Sign In');
  };

  const onSIgnInInstagram = () => {
    console.warn('sign with intagram');
  };

  const onSignInPress = () => {
    console.warn('Already have an account');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="User Name"
        value={userName}
        setValue={setUserName}
      />

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomInput
        placeholder="Re-type Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
      />

      <CustomButton text="Sign Up" onPress={onSignUpPressed} type="PRIMARY" />

      <CustomButton
        text="Sign With Instagram"
        onPress={onSIgnInInstagram}
        bgColor="#FFD4F2"
        fgColor="#ff00b9"
      />

      <CustomButton
        text="Already have an account, Login"
        onPress={() => navigation.navigate('Login')}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
  },
  logo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 100,
    height: 150,
    paddingBottom: 200,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0ca553',
    margin: 10,
    alignItems: 'center',
  },
});

export default SignUpScreen;
