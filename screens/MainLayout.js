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







const MainLayout = ({navigation}) => {
   
  
    return (
        <View>
        
        
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
  export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)