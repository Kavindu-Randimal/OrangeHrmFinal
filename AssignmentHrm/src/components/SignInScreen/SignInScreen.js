import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import Footer from '../Footer';
import {AuthContext} from '../../Context/AuthContext';

const SignInScreen = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {isLoading, login, getAll} = useContext(AuthContext);

  const {height} = useWindowDimensions();

  const onForgotPasswordPress = () => {
    console.warn('forgot password press');
  };

  const onSIgnInInstagram = () => {
    console.warn('sign with intagram');
  };

  return (
    <View style={styles.root}>
      {/* <Spinner visible={isLoading} /> */}
      {/* <ScrollView> */}
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="User Name"
        value={username}
        setValue={setUserName}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton
        text="Sign In"
        onPress={() => {
          login(username, password);
        }}
        type="PRIMARY"
      />

      <CustomButton
        text="forgot password"
        onPress={onForgotPasswordPress}
        type="TERTIARY"
      />

      <CustomButton
        text="Sign With Instagram"
        onPress={onSIgnInInstagram}
        bgColor="#FFD4F2"
        fgColor="#ff00b9"
      />

      <CustomButton
        text="don't have an account create one"
        onPress={() => navigation.navigate('SignUp')}
        type="TERTIARY"
      />
      {/* </ScrollView> */}

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    // flex: 1,
    width: '100%',
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 100,
    height: 150,
    marginTop: 200,
    paddingTop: 60,
    paddingBottom: 20,
  },

  input: {},
});

export default SignInScreen;
