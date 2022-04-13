import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from "./navigation/MyDrawer";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import combineReducers from "./stores/rootReducer";

import Home from "./screens/Home/Home"

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const store = createStore(
  combineReducers,
  applyMiddleware(thunk)
)


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Home'
            >
                <Stack.Screen
                    name="Home"
                    component={MyDrawer}
                />
            </Stack.Navigator>
      
    </NavigationContainer>
    </Provider>
    
  );
}


