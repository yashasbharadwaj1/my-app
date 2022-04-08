import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {connect} from "react-native"
import {setSelectedTab} from "../stores/tabs/tabActions"
function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
      </View>
    );
  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
  
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
    <Drawer.Screen
      name="Feed"
      component={Feed}
      options={{ drawerLabel: 'Home' }}
    />
    <Drawer.Screen
      name="Notifications"
      component={Notifications}
      options={{ drawerLabel: 'Updates' }}
    />
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{ drawerLabel: 'Profile' }}
    />
  </Drawer.Navigator>
  );
}

export default MyDrawer

function mapStateToProps(state){
    return {
      selectedTab:state.tabReducer.selectedTab
    }
  }
  
  function mapDispatchToProps(dispatch){
    return {
      setSelectedTab:(selectedTab) =>{return dispatch(setSelectedTab(selectedTab))}
    }
  }
  