import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    TextInput
} from 'react-native';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../constants/index";


export default function HorizontalFoodCard({containerStyle,imageStyle,item,onPress}) {
  return (
   <TouchableOpacity
   style={{
     flexDirection:'row',
     borderRadius:SIZES.radius,
     backgroundColor:COLORS.lightGray2,
     ...containerStyle
   }}
   >
   <Image 
   source={item.image}
   style={imageStyle}
   />

   <View
   style={{
       flex:1
   }}
   
   >
    {/* name*/}
   <Text style={{...FONTS.h3,fontSize:17}}>
       {item.name}</Text>
       {/* description*/}
    <Text style={{...FONTS.body4}}>
       {item.description}</Text>
       {/* price*/}
       <Text style={{...FONTS.h2,marginTop:SIZES.base}}>
       {item.price}</Text>
   </View>

   </TouchableOpacity>
  )
}