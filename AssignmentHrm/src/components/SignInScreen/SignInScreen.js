import React, {useState} from 'react';
import { View,Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';

const SignInScreen = () =>{

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
      console.warn('Sign In')
    };

    const onForgotPasswordPress = () => {
      console.warn('forgot password press')
    };

    const onSIgnInInstagram = () => {
      console.warn('sign with intagram')
    };


    const onSignUpPress = () => {
      console.warn('dont have an account')
    };

    return(
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

        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton
         text="Sign In" 
         onPress={onSignInPressed}
         type = "PRIMARY" />

        <CustomButton
         text="forgot password" 
         onPress={onForgotPasswordPress} 
         type = "TERTIARY"
         />

        <CustomButton
         text="Sign With Instagram" 
         onPress={onSIgnInInstagram} 
         bgColor = '#FFD4F2'
         fgColor= '#ff00b9'
         />

        <CustomButton
         text="don't have an account create one" 
         onPress={onSignUpPress} 
         type = "TERTIARY"
         />
      </View>
    )
}

const styles = StyleSheet.create({

    root:{
        alignItems : "center",
        padding: 40,
    },
    logo: {
        width: '80%',
        maxWidth :300,
        maxHeight :100,
        height: 150,
        paddingBottom:300
    },
})

export default SignInScreen
