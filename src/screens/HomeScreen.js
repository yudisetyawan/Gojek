import React from 'react';
import {Text, StyleSheet, Button, View, Image, Dimensions, SafeAreaView, Alert, container, ImageBackground, getButtonsConfig } from 'react-native';
import { Gojek, id, logo, masuk } from "../assets/image";



const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
            
            <View style={styles.logo}>
            <Image source={logo} />
            <Image source={id} />
            </View>
            
     
      <ImageBackground source={Gojek} style={styles.image}>
      </ImageBackground>
    <Text style= {styles.awal}>Selamat datang di Gojek!</Text>
    <Text style= {styles.isi}>Mau pergi, makan, belanja, kirim barang, bayar ini itu dan segala kebutuhan lainnya? Gojekin aja!</Text>
  
   
        <View style={styless.fixToText}>
        <Button
          title="             Masuk             "
          onPress={() => navigation.navigate ('Masuk')}
          color= 'green'
          
        />
        <Button
          title="             Daftar             "
          onPress={() => navigation.navigate ('Daftar')}
          color= 'green'
        />
  
      </View>
            <Text style={styless.Text1}>
            Dengan masuk atau mendaftar, kamu menyetujui
            <Text style={styless.Text2}> Ketentuan Layanan</Text>
            <Text style={styless.Text3}> dan</Text>
            <Text style={styless.Text4}> Kebijakan Privasi.</Text>
            </Text>
    </View>


  );
}


const styles = StyleSheet.create({
  container:{
   
    marginHorizontal: 17,
    paddingTop: 30
    
  },
  logo:{
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
 
    
    
  },
  image:{
    marginTop:260,
    width: 300,
    height: 300,
 
  marginStart: 40
    
    
  },
  
 
awal:{
fontSize: 22,
color : 'black',
alignItems: 'center',
justifyContent: 'center',
paddingBottom:10,
fontWeight: "bold"
}
});
({

  isi:{
    
fontSize: 18,
color : 'black',
textAlign: 'center',
paddingTop:20,

alignItems: 'center',
justifyContent: 'center',

  },

});

const styless = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 55,
   marginEnd: 45,
   paddingTop:30,
    marginBottom:40
    
   
  },
  
  Text1:{
    color: 'black',
},
Text2:{
  color: 'green'
},
Text3:{
  color: 'black'
},
Text4:{
  color: 'green'
}

})


export default HomeScreen;
