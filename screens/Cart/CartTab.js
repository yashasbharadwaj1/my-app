import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import CartQuantityButton from "../../components/CartQuantityButton";
import StepperInput from "../../components/StepperInput";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../../constants/index";
import {SwipeListView} from "react-native-swipe-list-view";


const CartTab = ({navigation}) => {
   const[myCartList,setMyCartList]=React.useState(dummyData.myCart)

   function renderCartList(){
       return(
           <SwipeListView 
           data={myCartList}
           keyExtractor={item => `${item.id}`}  
           contentContainerStyle={{
               marginTop:SIZES.radius,
               paddingHorizontal:SIZES.padding,
               paddingBottom:SIZES.padding*2
           }}
           disableRightSwipe={true}
           rightOpenValue={-75}
           renderItem={(data,rowMap)=>(
               <View style={{ height:100,
               backgroundColor:COLORS.lightGray2,
               ...styles.cartItemContainer


            }}
               >
                  {/*Food Image*/} 
                  <View style={{ 
                      width:90,
                      height:100,
                      marginLeft:-10
                  }}>
                      <Image source={data.item.image}
                      resizeMode="contain"
                      style={{
                          width:"100%",
                          height:"100%",
                          position:"absolute",
                          top:10

                      }}/>
                   

                      
                  </View>
                <StepperInput 
                containerStyle={{
                    height:50,
                    width:125,
                    backgroundColor: COLORS.white
                }}
                value={data.item.qty}
                />
               


               </View>
           )}
           
           />
       )
   }
    return (
        <View style={{ flex:1, backgroundColor:COLORS.white}}>
          {/* Cart List */}
            {renderCartList()}
             
              {/* Footer */}

        </View>
    )
}

const styles=StyleSheet.create({
    cartItemContainer:{ 
        flexdirection:'row',
        alignItems: 'center',
        marginTop:SIZES.radius,
        paddingHorizontal:SIZES.radius,
        borderRadius:SIZES.radius
    }
})
export default CartTab