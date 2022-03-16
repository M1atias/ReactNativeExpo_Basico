import { LinearGradient } from 'expo-linear-gradient';
import React from'react';
import { StyleSheet, Text, View, TextInput,Dimensions, TouchableOpacity } from 'react-native';

export default function ButtonGradient(){
    return(
        <TouchableOpacity style={styles.container}>
            <LinearGradient
        // Button Linear Gradient
        colors={['#FFB677','#FF3CBD']}
        start={{x:1,y:0}}
        end={{x:0,y:1}}
        style={styles.button}
        >
            <Text style={styles.text}>Sign in</Text>
      </LinearGradient>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginTop:10,
        width:200
      },
    text:{
        fontSize:14,
        color:'#fff',
        fontWeight:'bold'
    },
    button:{
        width:'80%',
        height:50,
        borderRadius:25,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
});