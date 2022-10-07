import React, {useState} from 'react';
import { View,Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import ProfilePic from '../../../assets/images/ProfilePicture.png';
import Footer from '../Footer';

const HomeScreen = () => {

    const {height} = useWindowDimensions(); 

    return(
        <View style={styles.root}>
            <Image
                source={ProfilePic}
                style={[styles.pp,{height: height * 0.3}]}
                resizeMethod="contain"
            />

            <Text style={styles.text}>
                Name: Kavindu Randimal
            </Text>
            <Text style={styles.text}>
                Email: kavi.randimal97@gmail.com
            </Text>
            <Text style={styles.para}>
            New Note. I am a new user. or. Login. Style Premium. Handwriting. Standard. Typeset. Sync. Adylitica. GDrive. Premium. Dropbox. Premium.
            </Text>

            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({

    root:{
        alignItems : "center",
        padding: 40,
    },
    pp: {
        width: '80%',
        maxWidth :300,
        maxHeight :100,
        height: 150,
        paddingBottom:300,
        borderRadius: 40,
        overflow: 'hidden'
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 5
    },

    para: {
        fontSize: 10,
        fontWeight: 'normal',
        padding: 5
    }
})

export default HomeScreen;