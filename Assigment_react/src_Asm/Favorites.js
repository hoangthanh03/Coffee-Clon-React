import { StyleSheet, Text, TouchableOpacity, View,Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'

const Favorites = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.headerContainer}>
         <TouchableOpacity style={styles.buttonHeaders}>
        <Image source={require('../Image/Menu.png')}/>
        </TouchableOpacity>
        <View style={{justifyContent:'center', alignItems:'center', color:'white',marginLeft:95}}>
          <Text style={{color:'white',fontSize:20, fontWeight:'bold'}}>Favorites</Text>
          </View>

         <TouchableOpacity style={[styles.buttonHeaders,{marginLeft:110}]}>
        <Image source={require('../Image/Avatar.png')} style={{width:30, height: 30, borderRadius: 10}}/>
        </TouchableOpacity> 
      </View>

          <View style={styles.viewOut}>
          <Image style={{position: 'absolute'}} source={require('../Image/CoffeFv.png')}/>
          <TouchableOpacity>
              <Image style={styles.imgFv} source={require('../Image/Favorites.png')}/>
            </TouchableOpacity>
          <LinearGradient colors={['black','black']} style={[styles.viewIn,{opacity:0.4}]}>
          <View style={{flexDirection:'row'}}>
            <View>
            <Text style={[styles.textIn]}>Cappuccino</Text>
            <Text style={[styles.textIn,{fontSize:10},{marginTop:1}]}>With Steamed Milk</Text>
            </View>
            
            <TouchableOpacity style={styles.itemButtonIn}>
              <Image style={{marginTop:8}} source={require('../Image/Cf.png')}/>
              <Text style={{color:'white'}}>Coffee</Text>
            </TouchableOpacity>
            {/* // */}
            <TouchableOpacity style={[styles.itemButtonIn,{marginLeft:10}]}>
              <Image style={{marginTop:8}} source={require('../Image/Milk.png')}/>
              <Text style={{color:'white'}}>Milk</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width:118,height:40,backgroundColor:'black',marginLeft:215,marginTop:10,justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Text style={{fontSize:12,color:'white'}}>
            Medium Roasted
            </Text>
          </TouchableOpacity>
          <Text style={[styles.textIn,{fontSize:16},{color:'#AEAEAE'}]}>Description</Text>
          <Text style={[styles.textIn,{fontSize:12,marginTop:1,fontWeight:'bold'}]}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
          </LinearGradient>
          </View>
          {/* =========== kết thúc view 1=========== */}
          <View style={styles.viewOut}>
          <Image style={{position: 'absolute'}} source={require('../Image/CoffeFv.png')}/>
          <TouchableOpacity>
              <Image style={styles.imgFv} source={require('../Image/Favorites.png')}/>
            </TouchableOpacity>
          <LinearGradient colors={['black','black']} style={[styles.viewIn,{opacity:0.4}]}>
          <View style={{flexDirection:'row'}}>
            <View>
            <Text style={[styles.textIn]}>Cappuccino</Text>
            <Text style={[styles.textIn,{fontSize:10},{marginTop:1}]}>With Steamed Milk</Text>
            </View>
            
            <TouchableOpacity style={styles.itemButtonIn}>
              <Image style={{marginTop:8}} source={require('../Image/Cf.png')}/>
              <Text style={{color:'white'}}>Coffee</Text>
            </TouchableOpacity>
            {/* // */}
            <TouchableOpacity style={[styles.itemButtonIn,{marginLeft:10}]}>
              <Image style={{marginTop:8}} source={require('../Image/Milk.png')}/>
              <Text style={{color:'white'}}>Milk</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width:118,height:40,backgroundColor:'black',marginLeft:215,marginTop:10,justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Text style={{fontSize:12,color:'white'}}>
            Medium Roasted
            </Text>
          </TouchableOpacity>
          <Text style={[styles.textIn,{fontSize:16},{color:'#AEAEAE'}]}>Description</Text>
          <Text style={[styles.textIn,{fontSize:12,marginTop:1,fontWeight:'bold'}]}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
          </LinearGradient>
       
          </View>

          {/* =============kết thúc view 2============== */}
          <View style={styles.viewOut}>
          <Image style={{position: 'absolute'}} source={require('../Image/CoffeFv.png')}/>
          <TouchableOpacity>
              <Image style={styles.imgFv} source={require('../Image/Favorites.png')}/>
            </TouchableOpacity>
          <LinearGradient colors={['black','black']} style={[styles.viewIn,{opacity:0.4}]}>
          <View style={{flexDirection:'row'}}>
            <View>
            <Text style={[styles.textIn]}>Cappuccino</Text>
            <Text style={[styles.textIn,{fontSize:10},{marginTop:1}]}>With Steamed Milk</Text>
            </View>
            
            <TouchableOpacity style={styles.itemButtonIn}>
              <Image style={{marginTop:8}} source={require('../Image/Cf.png')}/>
              <Text style={{color:'white'}}>Coffee</Text>
            </TouchableOpacity>
            {/* // */}
            <TouchableOpacity style={[styles.itemButtonIn,{marginLeft:10}]}>
              <Image style={{marginTop:8}} source={require('../Image/Milk.png')}/>
              <Text style={{color:'white'}}>Milk</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width:118,height:40,backgroundColor:'black',marginLeft:215,marginTop:10,justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Text style={{fontSize:12,color:'white'}}>
            Medium Roasted
            </Text>
          </TouchableOpacity>
          <Text style={[styles.textIn,{fontSize:16},{color:'#AEAEAE'}]}>Description</Text>
          <Text style={[styles.textIn,{fontSize:12,marginTop:1,fontWeight:'bold'}]}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
          </LinearGradient>
       
          </View>
 
    </View>
    </ScrollView>
      </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#0C0F14',
    alignItems:'center'
  },

  headerContainer:{
    flexDirection: 'row'
  },

  buttonHeaders:{
    width: 30,
    height: 30,
    borderRadius: 10,
    margin:20,
    backgroundColor: 'gray',
    justifyContent: 'center', alignItems:'center'
  },
  textHeader:{
    color:'white',
    fontWeight:'bold',
    fontSize: 28,
    marginLeft:20,
    width:205,
    height:80
  },
  viewOut:{
    width:350,
    height:575,
    borderRadius:23,
    backgroundColor:'#252A32',
    alignItems:'center'
  },
  viewIn:{
    marginTop:300,
    width:350,
    flex:1,
    borderRadius:25

  },
  imgFv:{
    marginTop:20,
    marginLeft:290,
  },
  borderTouch:{
    width:30,
    height:30,
    borderRadius:10
  },
  textIn:{
    fontWeight:'bold',
    color: 'white',
    opacity:1,
    fontSize:20,
    marginLeft:20,
    marginTop:10
  },
  itemButtonIn:{
    borderRadius:10,
     backgroundColor:'black',
     width:60,
     height:60,
     marginLeft:80,
     justifyContent:'center',
     alignItems:'center',
     marginTop:10
  }
})