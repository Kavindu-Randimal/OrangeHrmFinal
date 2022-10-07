import React from 'react';
// import { Linking } from 'react-native';
import { View,Text,StyleSheet,Linking} from 'react-native';

const Footer = () =>{

    return(
      <View>
        <View
        style={{
          borderBottomColor: '#f0dcad',
          borderBottomWidth: 1,
        }}
      />
        <Text style={styles.footer}>
            OrangeHRM Inc.©️ 2022 All Right Reserved.  <Text style={{color: '#f47c04'}}
            onPress={() => Linking.openURL('https://www.orangehrm.com/')}>
                OrangeHRM
        </Text>
        </Text>
       
      </View>
    )
}

const styles = StyleSheet.create({

    footer: {
        padding:25,
        textAlign: 'center',
        fontFamily: "Cochin",
    },

    input:{}
})

export default Footer;