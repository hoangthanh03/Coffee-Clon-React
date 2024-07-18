  import { View, Text } from 'react-native'
  import { NavigationContainer } from '@react-navigation/native'
  import React from 'react'
  import Login from './src_Asm/login'
  import Register from './src_Asm/register'
  import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src_Asm/homeScreen'
import Pay from './src_Asm/pay'
import TabhomeNavigator from './src_Asm/TabhomeNavigator'




  const Stack = createNativeStackNavigator();
  const App = () => {
    return (


      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= "Login" component={Login} options={{headerShown: false} }></Stack.Screen>
          <Stack.Screen name= "Register" component={Register} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name= "TabHome" component={TabhomeNavigator} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    
    )
  }

  export default App