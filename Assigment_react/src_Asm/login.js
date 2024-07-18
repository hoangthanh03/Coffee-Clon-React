import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
      source={require('../Image/logoCoffee.png')}
      style={styles.image}
      />
      <Text style={[styles.text,{fontWeight:'bold'}]}>Welcome to Lungo !!</Text>
      <Text style={[styles.text,{color: '#828282'},{fontSize:12},{fontWeight:'bold'}]}>Login to continue</Text>
      <TextInput
      style={[styles.input,{fontWeight:'bold'}]}
      placeholder='Email'
      placeholderTextColor='#828282'
      />
    <TextInput
      style={[styles.input,{marginTop:20},{fontWeight:'bold'}]}
      placeholder='Password'
      placeholderTextColor='#828282'
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white',fontSize:15,fontStyle:'normal',fontWeight:'bold'}}  onPress={() => navigation.navigate('TabHome')}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button,{backgroundColor:'white'}]}>
        <Text style={{color: 'black',fontSize:15,fontStyle:'normal',fontWeight:'bold'}}>Sign in with Google</Text>
      </TouchableOpacity>

      <Text style={[styles.text,{fontSize:12},{color:'#828282'},{fontWeight:'bold'}]} onPress={()=> navigation.navigate('Register')}>Don’t have account? Click {''}
      <Text style={{color:'orange'}}>Register</Text>
      </Text>

      <Text style={[styles.text,{fontSize:12},{color:'#828282'},{fontWeight:'bold'}]}>
      Forget Password? Click {''}
      <Text style={{color:'orange'}}>Reset</Text>
      </Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0C0F14',
    },
    image: {
        justifyContent: 'center',
        marginTop:50,
        width: 150,
        height: 150,
    },
    text: {
        color: 'white', // Màu chữ
        padding: 10, // Padding để tăng độ rõ ràng
        marginTop: 10, // Khoảng cách từ hình ảnh
        fontSize:16,
        fontFamily: 'Poppins',
        fontStyle:'bold',
    },
    input:{
        borderBlockColor:'white',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft:10,
        width:348,
        color: '#828282',
        lineHeight:26,
    },
    button:{
        marginTop:40,
        width:250,
        backgroundColor: '#D17842',
        borderRadius: 10,
        height:42,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
});


    
