import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexEvento from './src/components/Evento';
import Menu from './src/components/Menu';
import CreateEvento from './src/components/Evento/create';
import EditEvento from './src/components/Evento/edit';


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Menu" component={ Menu }/>
        <Stack.Screen options={{ headerShown: false }} name="IndexEvento" component={ IndexEvento }/>
        <Stack.Screen options={{ headerShown: false }} name="CreateEvento" component={ CreateEvento }/>
        <Stack.Screen options={{ headerShown: false }} name="EditEvento" component={ EditEvento }/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

