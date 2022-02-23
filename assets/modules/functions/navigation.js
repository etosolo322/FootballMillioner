import React from "react";

import Main from '../pages/main'
import Profile from '../pages/Profile'
import Future from './Future'
import Game from '../pages/Game'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          >   
            <Stack.Screen
                name="Main" 
                component={Main}                
                />                
                <Stack.Screen 
                name="Profile" 
                component={Profile}
                />
                <Stack.Screen 
                name="Future" 
                component={Future}
                
                />
                 <Stack.Screen 
                name="Game" 
                component={Game}
                />
        </Stack.Navigator>
        
    </NavigationContainer>;
}
