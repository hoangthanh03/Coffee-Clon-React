import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={require('../Image/logoCoffee.png')}/>

      <Text style={styles.text}>Welcome to Lungo!!</Text>
      <Text style={[styles.text,{color:'#828282'},{fontSize:12},{marginTop:10}]}>Reignter to Continue</Text>
      <TextInput
      style={[styles.input,{fontWeight:'bold'}]}
      placeholder='Name'
      placeholderTextColor={'#828282'}
      />
      <TextInput
      style={[styles.input,{fontWeight:'bold'}]}
      placeholder='Email'
      placeholderTextColor={'#828282'}
      />
      <TextInput
      style={[styles.input,{fontWeight:'bold'}]}
      placeholder='Password'
      placeholderTextColor={'#828282'}
      />
      <TextInput
      style={[styles.input,{fontWeight:'bold'}]}
      placeholder='Password 2'
      placeholderTextColor={'#828282'}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{fontWeight:'bold',color: 'white'}}>Register</Text>
      </TouchableOpacity>
      <Text style={[styles.text,{color:'#828282'},{marginTop:10}
    ,{fontSize:12}]} onPress={() => navigation.navigate('Login')}>You have an account? Click {''}
      <Text style={{color: '#D17842'}}>Sign in</Text>
      </Text>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#0C0F14'
    },
    image:{
        width: 200,
        height:200,
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'center'
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily:'Poppins',
        fontStyle: 'normal',
        color: 'white'
    },
    input:{
        width: 350,
        height: 43,
        borderRadius: 10,
        borderWidth:1,
        margin:10,
        borderColor: '#252A32',
        paddingLeft:10
    },
    button:{
        width:200,
        height:50,
        borderWidth:1,
        backgroundColor:'#D17842',
        borderRadius:12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})