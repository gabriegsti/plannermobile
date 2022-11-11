import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexEvento from './src/components/Evento';
import Menu from './src/components/Menu';
import CreateEvento from './src/components/Evento/create';
import EditEvento from './src/components/Evento/edit';
import IndexMateria from './src/components/Materias/index';
import CreateMateria from './src/components/Materias/create';
import EditMateria from './src/components/Materias/edit';
import IndexAnotacoes from './src/components/Anotacoes/index';
import CreateAnotacoes from './src/components/Anotacoes/create';
import EditAnotacoes from './src/components/Anotacoes/edit';
import IndexDocumentos from './src/components/Documentos/index';
import DocPicker from './src/components/Documentos/create';
import IndexPomodoro from './src/components/Pomodoro/index';


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Menu" component={ Menu }/>
        <Stack.Screen options={{ headerShown: false }} name="IndexEvento" component={ IndexEvento }/>
        <Stack.Screen options={{ headerShown: false }} name="CreateEvento" component={ CreateEvento }/>
        <Stack.Screen options={{ headerShown: false }} name="EditEvento" component={ EditEvento }/>
        <Stack.Screen options={{ headerShown: false }} name="IndexMateria" component={ IndexMateria }/>
        <Stack.Screen options={{ headerShown: false }} name="CreateMateria" component={ CreateMateria }/>
        <Stack.Screen options={{ headerShown: false }} name="EditMateria" component={ EditMateria }/>
        <Stack.Screen options={{ headerShown: false }} name="IndexAnotacoes" component={ IndexAnotacoes }/>
        <Stack.Screen options={{ headerShown: false }} name="CreateAnotacoes" component={ CreateAnotacoes }/>
        <Stack.Screen options={{ headerShown: false }} name="EditAnotacoes" component={ EditAnotacoes }/>
        <Stack.Screen options={{ headerShown: false }} name="IndexDocumentos" component={ IndexDocumentos }/>
        <Stack.Screen options={{ headerShown: false }} name="DocPicker" component={ DocPicker }/>
        <Stack.Screen options={{ headerShown: false }} name="IndexPomodoro" component={ IndexPomodoro }/>
       </Stack.Navigator> 
    </NavigationContainer>
  );
}

