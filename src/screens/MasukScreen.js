import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class App extends React.Component{
  
  state={
    text:'',
}
render(){
    return(

          <View style={styles.container}>
            <Text style={styles.sty_text}>Masuk {this.state.text}</Text>
            <Text style={styles.sty_data}>Silakan masuk dengan nomor HP-mu yang terdaftar {this.state.data}</Text>
            <Text style={styles.sty_daftar}>
                 Nomor HP
            <Text style={styles.innerText}>   *</Text>
            </Text>
            <TextInput 
                style={styles.input2}
                placeholder='12345678'
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
    sty_daftar:{
     
        fontSize: 15,
      },
      input2:{
        height: 50,
        width:'100%',
        borderBottomWidth: 2
      },
      sty_text:{
        fontSize: 30,
        fontWeight:'bold',
        marginTop:70,
        paddingBottom: 5
      },
      sty_data:{
        fontSize: 20,
        paddingBottom: 15
      },
      innerText:{
        color: 'red'
 
   }
    })

    export default App;