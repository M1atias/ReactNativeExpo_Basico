import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Sign In to your account</Text>
      <TextInput 
      placeholder='matias@gmail.com'
      style={styles.textinput}/>
      <TextInput 
      placeholder='password'
      style={styles.textinput}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:80,
    color:'#34434D',
    fontWeight:'bold',
  },
  subtitle:{
    fontSize:20,
    color:'gray',
  },
  textinput:{
    padding:10,
    paddingStart:30,
    width:'80%',
    marginTop:20,
    borderRadius:30,
    height:50,
    backgroundColor:'#fff'
  }
});
