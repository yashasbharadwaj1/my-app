import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../../constants/index";
import Header from "../../components/Header";
const FoodDetail =({navigation}) => {

     function renderHeader() {
         return (
             <Header
             title="Details"
             containerStyle={{
                 height:50,
                 marginHorizontal:SIZES.padding ,
                 marginTop : 40,
             }}
        
             />
          
         )

     }


      return(
          <View
          style={{
              flex:1,
          }}
          
          >
          {/*header*/}
          {renderHeader()}

           {/*body*/} 
           <Text>working</Text>

            {/*footer*/}

          
          



          </View>
      )
}
export default FoodDetail;