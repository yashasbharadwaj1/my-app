import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList

} from 'react-native';
import Animated,{
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';

import {connect} from "react-redux";
import {setSelectedTab} from "../stores/tabs/tabActions";

import {Home,
Search,cartTab,Favourite,Notification} from "../screens";

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../constants/index";
import {Header} from "../components"


const TabButton = ({label,icon,isFocused,onPress}) => {
    return(
        <TouchableWithoutFeedback
        onPress={onPress}
        >
        <Animated.View  style={{
           flex:1,
           alignItems: 'center',
           justifyContent: 'center'
        }}
        
        >
        <Animated.View  style={{
            flexDirection:'row',
            width:"80%",
            height:50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:25
  
          }}
        >
        <Image
            source={icon}
            style={{
                width:20,
                height:20,
                tintColor:COLORS.gray
            }}
        />
            {isFocused && 
            <Text
                numberOfLines={1}
                style={{
                    marginLeft:SIZES.base,
                    color:COLORS.gray,
                    ...FONTS.h3
                }}
             >
                 {label}
            </Text>
            }
            </Animated.View>
            </Animated.View>

        </TouchableWithoutFeedback>
    )
}





const MainLayout = ({navigation,selectedTab,setSelectedTab}) => {
    React.useEffect(() => {
       setSelectedTab(constants.screens.home)
    },[])
    
    
    return (
        <Animated.View
        
        style={{
            flex:1,
            backgroundColor:COLORS.white
        }}
        
        >
            {/*FOOTER*/}
            <View style={{
                height:100,
                justifyContent: 'flex-end'
            }}>
            

                  {/* tabs*/}
                  <View
                  
                  style={{
                    flex:1,
                    flexDirection: 'row',
                    paddingHorizontal:SIZES.radius,
                    paddingBottom:10,
                    borderTopLeftRadius:20,
                    backgroundColor: COLORS.white
                  }}
                 
                 >
                     <TabButton 
                     label={constants.screens.home}
                     icon={icons.home}
                     isFocused={selectedTab == constants.screens.home}
                     onPress={()=>setSelectedTab(constants.screens.home)}

                     />
                    <TabButton 
                     label={constants.screens.search}
                     icon={icons.search}
                     isFocused={selectedTab == constants.screens.search}
                     onPress={()=>setSelectedTab(constants.screens.search)}

                     />


                  </View>
            </View>
        </Animated.View>
            
           
        
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
  export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)