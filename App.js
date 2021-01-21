import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import MasukScreen from './src/screens/MasukScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false}}
           />
          <Stack.Screen
          name="Daftar"
          component={ProductScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name="Masuk"
          component={MasukScreen}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;
