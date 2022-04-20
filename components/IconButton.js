import { View, Text,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
  } from "../constants/index";
const IconButton = ({containerStyle,icon,iconStyle,onPress}) => {
  return (
    <TouchableOpacity
    style={{
        ...containerStyle,
    }}
    onPress={onPress}
    >
        <Image 
        source={icon}
        style={{
            width:30,
            height:30,
            tintColor:COLORS.blue,
            ...iconStyle
        }}/>
    </TouchableOpacity>
  )
}

export default IconButton