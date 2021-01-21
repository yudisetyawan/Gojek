import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


class App extends React.Component{
  
  state={
    text:'',
    data:'',
    nama:'',
    email:'',
    Button:''
  }
  
    render(){
      
        return(
 
              <View style={styles.container}>
      
                <Text style={styles.sty_text}>Daftar {this.state.text}</Text>
                <Text style={styles.sty_data}>Lengkapi data dirimu di bawah ini, ya {this.state.data}</Text>
                 <Text style={styles.sty_nama}>
                 Nama Lengkap
                <Text style={styles.innerText}>   *</Text>
                </Text>
                <TextInput 
                style={styles.input1}
                placeholder='Cth: Name'
                onChangeText={ (onChangeText) => this.setState({onChangeText})}/>
             
<Text style={styles.sty_email}>
                 Email
                <Text style={styles.innerText}>   *</Text>
                </Text>
              <TextInput 
                style={styles.input2}
                placeholder='Cth: Name@email.com'
                onChangeText={ (onChangeText) => this.setState({onChangeText})}/>
               
<Text style={styles.sty_hp}>
                 Nomor HP
                <Text style={styles.innerText}>   *</Text>
                </Text>
              <TextInput 
                style={styles.input3}
                placeholder='Cth: 12345678'
                onChangeText={ (onChangeText) => this.setState({onChangeText})}/>

<Text style={styles.sty_hp}>
                 Kode referral (Opsional)
                </Text>
              <TextInput 
                style={styles.input4}
                placeholder='Belum ada? bisa masukkin nanti.'
                onChangeText={ (onChangeText) => this.setState({onChangeText})}/>
    
          </View>
        )
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30,
    marginHorizontal: 17,
    
  },
  bt:{
    fontSize: 15,
  },
  sty_nama:{
    fontSize: 15,
  },
  sty_text:{
    marginTop:70,
    fontSize: 30,
    fontWeight:'bold',
    paddingBottom: 5
  },
  sty_data:{
    fontSize: 20,
    paddingBottom: 15
  },
  sty_email:{
    fontSize: 15,
  },
  sty_hp:{
    fontSize: 15,
  },
  innerText:{
       color: 'red'

  },
  input1:{
    height: 50,
    width:'100%',
    borderBottomWidth: 2,
  },
  input2:{
    height: 50,
    width:'100%',
    borderBottomWidth: 2,
  },
  input3:{
    height: 50,
    width:'100%',
    borderBottomWidth: 2,
  },
  input4:{
    height: 50,
    width:'100%',
    borderBottomWidth: 2,
  }
})

export default App;
 

