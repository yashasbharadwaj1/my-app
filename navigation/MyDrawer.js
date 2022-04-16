import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { createDrawerNavigator,
DrawerContentScrollView } from '@react-navigation/drawer';


import MainLayout from "../screens/MainLayout"
import {setSelectedTab} from "../stores/tabs/tabActions";
import {connect} from "react-redux";
import tabreducer from "../stores/tabs/tabReducer";
  
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData
} from "../constants/index";
import  Notification from '../screens/Notification/Notification';
import CartTab from '../screens/Cart/CartTab';

const Drawer = createDrawerNavigator() 

const CustomDrawerItem = ({label,icon,isFocused,onPress}) => {
  return (
      <TouchableOpacity
      style={{
          flexDirection:'row',
          height:40,
          marginBottom:SIZES.base,
          alignItems:'center',
          paddingLeft:SIZES.radius,
          borderRadius:SIZES.base,
          backgroundColor:isFocused?COLORS.transparentBlack1:null
      }}
      onPress={onPress}
      >
          <Image
          source={icon}
          style={{
             width:18,
             height:18,
             tintColor:COLORS.black
          }}
              
        />
        <Text
          style={{
           marginLeft:15,
           color:COLORS.black,
           ...FONTS.h3
          
         }}
        >
         {label}
        </Text>

      </TouchableOpacity>
  )
}


const CustomDrawerContent = ({navigation,selectedTab,setSelectedTab}) =>{
return(
    <DrawerContentScrollView
    scrollEnabled={true}
    contentContainerStyle = {{flex:1}}
    >
        <View
           style={{
               flex:1,
               paddingHorizontal:SIZES.radius
           }}
           >
               {/* Close */}
               <View
               style={{

                alignItems: 'flex-start',
                   justifyContent: 'center'
               }}
               
               >
                   <TouchableOpacity
                   stytle={{
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}
                   onPress={() => navigation.closeDrawer()}
                   >
                    <Image
                    source={icons.cross}
                    style={{
                        height:35,
                        width:35,
                        tintColor:COLORS.black
                    }}
                    />
                   </TouchableOpacity>

               </View>
               {/* Profile */}
               <TouchableOpacity style={{
                   flexDirection:'row',
                   marginTop:SIZES.radius,
                   alignItems:'center'
               }}
               onPress={()=>console.log("Profile")}
               >
                   <Image
                   source={dummyData.myProfile?.profile_image}
                   style={{
                       width:200,
                       height:25,
                       borderRadius:SIZES.radius,
                      
                   }}
                   />
               
                </TouchableOpacity>
               {/* Drawer Item */}
               <View
               style={{
                   flex:1,
                   marginTop:SIZES.padding
               }}
               >
              <CustomDrawerItem
              label={constants.screens.home}
              icon={icons.home}
              isFocused={selectedTab == constants.screens.home}
              onPress={()=>{
                setSelectedTab(constants.screens.home)
                navigation.navigate("MainLayout")
              }}
              />
             <CustomDrawerItem
              label={constants.screens.my_wallet}
              icon={icons.my_wallet}
              />
                <CustomDrawerItem
              label={constants.screens.notification}
              icon={icons.notification}
              isFocused={selectedTab == constants.screens.notification}
              onPress={()=>{
                setSelectedTab(constants.screens.notification)
                navigation.navigate("Notifications")
              }}
              />

              <CustomDrawerItem
              label={constants.screens.cart}
              icon={icons.cart}
              isFocused={selectedTab == constants.screens.cart}
              onPress={()=>{
                setSelectedTab(constants.screens.cart)
                navigation.navigate("your cart")
              }}
              />

                <CustomDrawerItem
              label={constants.screens.favourite}
              icon={icons.favourite}
              isFocused={selectedTab == constants.screens.favourite}
              onPress={()=>{
                setSelectedTab(constants.screens.favourite)
                navigation.navigate("MainLayout")
              }}
              />
            {/*line divider*/}
            <View
            style={{
                height:1,
                marginVertical:SIZES.radius,
                backgroundColor:COLORS.lightGray1

            }}
            />
              <CustomDrawerItem
              label="Track Your Order"
              icon={icons.location}
              />
              
                <CustomDrawerItem
              label="Settings"
              icon={icons.setting}
              />
                <CustomDrawerItem
              label="reach out to us "
              icon={icons.help}
              />

        </View>
   
          
     </View>
     <View
            style={{
                marginBottom:SIZES.padding
            }}>
                  <CustomDrawerItem
              label="Logout"
              icon={icons.logout}
              />
        </View>

    </DrawerContentScrollView>
)
}


const MyDrawer=({selectedTab,setSelectedTab}) => {
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.primary

  }}>
   <Drawer.Navigator
   drawerType="slide"
   overlayColor = "transparent"
   drawerStyle={{
       flex:1,
       width:'65%',
       paddingRight:20,
       backgroundColor:"transparent"

   }}
   sceneContainerStyle = {{
       backgroundColor:'transparent'
   }}
   initialRouteName="MainLayout"
   drawerContent={props => {
    
       return (
           <CustomDrawerContent
           navigation={props.navigation}
           selectedTab={selectedTab}
           setSelectedTab={setSelectedTab}
           />
    )
   }}

   >
       <Drawer.Screen name="MainLayout">
         {props => <MainLayout {...props}/>}
       </Drawer.Screen>
       <Drawer.Screen name="Notifications" component={Notification} />
       <Drawer.Screen name="your cart" component={CartTab} />
   </Drawer.Navigator>
  </View>
  )
}


function mapStateToProps(state) {
  return{
    selectedTab:state.tabReducer.selectedTab
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab:(selectedTab) => {
      return dispatch(setSelectedTab(selectedTab))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer)