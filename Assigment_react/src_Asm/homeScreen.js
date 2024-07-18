import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Cart from './cart';
import Pay from './pay';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>


    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.buttonHeaders}>
        <Image source={require('../Image/Menu.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonHeaders,{marginLeft:280}]}>
        <Image source={require('../Image/Avatar.png')} style={{width:30, height: 30, borderRadius: 10}}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHeader}>Find the best coffee for you</Text>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
        <TextInput placeholder='Find coffe' placeholderTextColor={'gray'} style={styles.textFind} />
      </TouchableOpacity>

      <SafeAreaView>
      <ScrollView
      horizontal
      >
        <View style={styles.scoll}> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Capuchino</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Espresso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Americano</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Macchiato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cà phê đen đá</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </SafeAreaView>

      <SafeAreaView>
        <ScrollView
        horizontal>
          <View style={styles.viewCapuchino}>
            <Image style={styles.img} source={require('../Image/Capuchino1.png')}/>
            <Text style={styles.textCapuchino}>Cappuccino</Text>
            <Text style={[styles.textCapuchino, {fontSize:9}]}>With Steamed Milk</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.textCapuchino,{fontSize:15}]}><Text style={{color:'orange'}}>$ {''}</Text>4.20</Text>
              <TouchableOpacity style={styles.addCart}>
                <Image style ={{width:10,height:10}} source={require('../Image/AddCart.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          {/* =================================================== */}
          <View style={styles.viewCapuchino}>
            <Image style={styles.img} source={require('../Image/Capuchino2.png')}/>
            <Text style={styles.textCapuchino}>Cappuccino</Text>
            <Text style={[styles.textCapuchino, {fontSize:9}]}>With Steamed Milk</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.textCapuchino,{fontSize:15}]}><Text style={{color:'orange'}}>$ {''}</Text>4.20</Text>
              <TouchableOpacity style={styles.addCart}>
                <Image style ={{width:10,height:10}} source={require('../Image/AddCart.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* =============================================== */}

          <View style={styles.viewCapuchino}>
            <Image style={styles.img} source={require('../Image/Capuchino1.png')}/>
            <Text style={styles.textCapuchino}>Cappuccino</Text>
            <Text style={[styles.textCapuchino, {fontSize:9}]}>With Steamed Milk</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.textCapuchino,{fontSize:15}]}><Text style={{color:'orange'}}>$ {''}</Text>4.20</Text>
              <TouchableOpacity style={styles.addCart}>
                <Image style ={{width:10,height:10}} source={require('../Image/AddCart.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/*======================== Kết thúc ScrollView 1===================== */}

      
      {/* ====================== */}
      <Text style={styles.textCoffe}>Coffee beans</Text>
      <SafeAreaView>
        <ScrollView
        horizontal>
          <View style={styles.viewCapuchino}>
            <Image style={styles.img} source={require('../Image/Coffee1.png')}/>
            <Text style={styles.textCapuchino}>Cappuccino</Text>
            <Text style={[styles.textCapuchino, {fontSize:9}]}>With Steamed Milk</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.textCapuchino,{fontSize:15}]}><Text style={{color:'orange'}}>$ {''}</Text>4.20</Text>
              <TouchableOpacity style={styles.addCart}>
                <Image style ={{width:10,height:10}} source={require('../Image/AddCart.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          {/* =================================================== */}
          <View style={styles.viewCapuchino}>
            <Image style={styles.img} source={require('../Image/Coffee2.png')}/>
            <Text style={styles.textCapuchino}>Cappuccino</Text>
            <Text style={[styles.textCapuchino, {fontSize:9}]}>With Steamed Milk</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.textCapuchino,{fontSize:15}]}><Text style={{color:'orange'}}>$ {''}</Text>4.20</Text>
              <TouchableOpacity style={styles.addCart}>
                <Image style ={{width:10,height:10}} source={require('../Image/AddCart.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* =============================================== */}

          <View style={styles.viewCapuchino}>
            <Image style={styles.img} source={require('../Image/Capuchino1.png')}/>
            <Text style={styles.textCapuchino}>Cappuccino</Text>
            <Text style={[styles.textCapuchino, {fontSize:9}]}>With Steamed Milk</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.textCapuchino,{fontSize:15}]}><Text style={{color:'orange'}}>$ {''}</Text>4.20</Text>
              <TouchableOpacity style={styles.addCart}>
                <Image style ={{width:10,height:10}} source={require('../Image/AddCart.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* ====================== */}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#0C0F14'
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
  textFind:{
    width:350,
    height: 45,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor:'#141921',
    fontWeight:'bold',
    paddingLeft: 20,
    fontSize:10
  },
  scoll:{
    flexDirection: 'row', // Dòng chứa các nút theo chiều ngang
    justifyContent: 'space-between', // Canh giữa các nút và tạo khoảng trống giữa chúng
    paddingHorizontal: 20, // Khoảng trắng giữa cạnh của màn hình và nút
    paddingVertical: 10, // Khoảng trắng giữa trên và dưới của mỗi nút
  },
  button: {
    padding: 10,
    marginHorizontal: 5, // Khoảng trắng giữa các nút
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  viewCapuchino:{
    backgroundColor: '#252A32',
    width: 150,
    height: 230,
    borderRadius:23,
    margin:20,
  },
  img:{
    borderRadius: 20,
    marginTop:10,
    marginLeft:12,
  },
  textCapuchino:{
    fontSize:12,
    color:'white',
    fontFamily: 'Poppins',
    marginLeft:20,
    marginTop:5
  },
  addCart:{
    backgroundColor:'#D17842',
    borderRadius: 7,
    width:30,
    height:30,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft:46
  },
  textCoffe:{
    fontSize:16,
    color:'#FFFFFF',
    marginLeft:22
  }
});
