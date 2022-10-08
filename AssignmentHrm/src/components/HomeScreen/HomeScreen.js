import React, {useState} from 'react';
import { View,Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import ProfilePic from '../../../assets/images/ProfilePicture.png';
import Footer from '../Footer';

const HomeScreen = () => {

    const {height} = useWindowDimensions(); 

    return(
        <View style={styles.root}>
            <ScrollView>
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
            </ScrollView>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({

    root:{
        justifyContent:'center',
        // alignItems : "center",
        padding: 40,
        flex:1
    },
    pp: {
        // justifyContent:'center',
        width: '80%',
        maxWidth :250,
        maxHeight :100,
        height: 150,
        paddingBottom:300,
        borderRadius: 40,
        overflow: 'hidden',
        marginLeft:35
        
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        // textAlign: 'left',
        padding: 5,
        marginLeft:4
    },

    para: {
        fontSize: 10,
        fontWeight: 'normal',
        padding: 5,
        marginLeft:4
    }
})

export default HomeScreen;