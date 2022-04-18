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
import CartQuantityButton from "../../components/CartQuantityButton";
const FoodDetail =({navigation}) => {

    const[foodItem,setFoodItem]=React.useState(dummyData.vegBiryani)

     function renderHeader() {
         return (
             <Header
             title="Details"
             containerStyle={{
                 height:50,
                 marginHorizontal:SIZES.padding ,
                 marginTop : 40,
             }}
        

             rightComponent={ 
                 <CartQuantityButton 
                 quantity={3}
                 />
                 
             }
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
           <ScrollView> 
               {renderDetails()}
           </ScrollView>
           

            {/*footer*/}

          
          



          </View>
      )
}
export default FoodDetail;