import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from './src/components/Home';
import IndexEvento from './src/components/Evento';
import Menu from './src/components/Menu';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Menu" component={ Menu }/>
        <Stack.Screen options={{ headerShown: false }} name="IndexEvento" component={ IndexEvento }/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

