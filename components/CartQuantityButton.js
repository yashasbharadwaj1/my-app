import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../constants/index";
export default function CartQuantityButton({containerStyle,iconStyle,quantity,onPress}) {
  return (
   <TouchableOpacity 
   style={{width:40,
         height:40,
         alignItems: "center",
         justifyContent: "center",
         borderRadius:SIZES.radius,
         backgroundColor:COLORS.lightOrange2,
         ...containerStyle

        }}
        onPress={onPress}
   
   >
      <Image 
      source={icons.cart}
      style={{
          width:20,
          height:20,
          tintColor:COLORS.black,
          ...iconStyle
      }}
      
      
      />
      <View 
      style={{ 
          position: 'absolute',
          top: 5,
          right:5,
          height:15,
          width:15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius:SIZES.radius,
          backgroundColor:COLORS.primary
      }}
      >
          <Text>{quantity}</Text>

      </View>

   </TouchableOpacity>
  )
}