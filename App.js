import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from "./navigation/MyDrawer";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import combineReducers from "./stores/rootReducer";
import {connect} from "react-native"
import {setSelectedTab} from "./stores/tabs/tabActions"
const store = createStore(
  combineReducers,
  applyMiddleware(thunk)
)


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    </Provider>
  );
}


