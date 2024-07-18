import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './homeScreen'
import Cart from './cart'
import Pay from './pay'
import Favorites from './Favorites';

const Tab = createBottomTabNavigator();

const TabhomeNavigator = () => {
  return (
    
    <Tab.Navigator
     screenOptions={{
      tabBarLabel: () => null, // Đặt tabBarLabel thành null để ẩn tên tab
      tabBarActiveTintColor: '#D17842',// màu của tab được chọn,
      tabBarInactiveTintColor: 'gray', // màu của tab không được chọn
      tabBarStyle:{
        backgroundColor:'#0C0F14'// màu của tabbar
      }}}>
      {/* ===================================================*/}
      <Tab.Screen name="HomeTab" component={HomeScreen} 
      options={{headerShown: false, 
      tabBarIcon:() =>(<Image source={require('../Image/Home.png')}/>)
    }}></Tab.Screen>

    {/* ===================================================== */}
      <Tab.Screen name="CartTab" component={Cart} 
      options={{headerShown: false, 
      tabBarIcon:()=>(<Image source={require('../Image/Cart.png')}/>)
      }}></Tab.Screen>

      {/* =================================================== */}
      <Tab.Screen name="FavoritesTab" component={Favorites} options={{headerShown: false,
      tabBarIcon:()=>(<Image source={require('../Image/Favorites.png')}/>)
      }}></Tab.Screen>


      {/* =================================================== */}

      <Tab.Screen name="HistoryTab" component={Pay} options={{headerShown:false,
      tabBarIcon:()=>(<Image source={require('../Image/Bell.png')}/>)}}></Tab.Screen>
    </Tab.Navigator>

  )
}

export default TabhomeNavigator

const styles = StyleSheet.create({
  tastBarStyle:{
    height: 80,
    position: 'absolute',
    backgroundColor: '#0C0F14',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent'
  }
})