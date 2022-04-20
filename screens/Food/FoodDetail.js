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
import IconLabel from "../../components/IconLabel";
import StepperInput from "../../components/StepperInput";
import TextButton from "../../components/TextButton";

const FoodDetail =({navigation}) => {

    const[foodItem,setFoodItem]=React.useState(dummyData.hamburger)
    const [qty,setQty]=React.useState(1)
     function renderHeader() {
         return (
             <Header
             title="Details"
             containerStyle={{
                 height:50,
                 marginHorizontal:SIZES.padding ,
                 marginTop : 40
             }}
        

             rightComponent={ 
                 <CartQuantityButton 
                 quantity={3}
                 />
                 
             }
             />
          
         )

     }
     function renderDetails(){
         return(
             <View
             style={{ marginTop:SIZES.radius,
            marginBottom:SIZES.padding,
            paddingHorizontal:SIZES.padding }}
             >
             <View 
             style={{ height:190, borderRadius:15,
            backgroundColor:COLORS.lightGray2}}
             >

             
             <View 
             style={{ flexDirection:'row',
             justifyContent: 'space-between',
             marginTop:SIZES.base,
             paddingHorizontal:SIZES.radius
            }}
             
             >
                 {/*favourite*/}
                 <Image 
                 source={icons.love}
                 style={{
                     width:20,
                     height:20,
                     tintColor:foodItem?.isFavourite?COLORS.blue:COLORS.gray
                 }}
                 />
         

             </View>

             {/*food image*/}
             <Image source={require('../../assets/dummyData/hamburger.png')} 
            
             style={{
                 height:160,
                 width:"100%"
             }}
           
             />
            </View>
            {/*food info*/}
            <View style={{ 

                marginTop:SIZES.padding
            }}  
            >
            <Text
            style={{...FONTS.h1}}
            >
            {foodItem?.name}

            </Text>
            <Text style={{marginTop:SIZES.base,
            color:COLORS.darkGray,textAlign:'justify',...FONTS.body3}}> 
                {foodItem?.description}
            </Text>

           

               {/* ratings duration shipping */}

                <View style={{
                    flexDirection:'row',
                    marginTop:SIZES.padding
                }}>

                {/* ratings */}
                <IconLabel containerStyle={{backgroundColor:COLORS.primary}}
                icon={icons.star}
                label="4.4"
                labelStyle={{color:COLORS.white}}
                
                />
                {/* duration */}
                <IconLabel containerStyle={{marginLeft:SIZES.radius,paddingHorizontal:0}}
                icon={icons.clock}
               
                iconStyle={{tintColor:COLORS.black}}
                label="30 min"
                
                />

               
                




                </View>



            </View>
             </View>
         )
     }
    
     function renderFooter(){
         return(
             <View style={{
                flexDirection:'row',
                height:120,
                alignItems: 'center',
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.radius
             }}>

                 {/* Stepper Input */}
                 <StepperInput 
                 value={qty}
                 onAdd={()=>setQty(qty+1)}
                 onMinus={()=>{
                     if (qty >1) {
                        setQty(qty-1)}}   
                     }
                    
                    
                 />

                 {/* Text Button*/}
                  <TextButton
                  buttonContainerStyle={{
                      flex:1,
                      flexDirection: 'row',
                      height:60,
                      marginLeft:SIZES.radius,
                      paddingHorizontal:SIZES.radius,
                      borderRadius:SIZES.radius,
                      backgroundColor:COLORS.primary
                  }}
                  label="Buy Now"
                  label2="Rs 15"
                  onPress={()=>navigation.navigate("your cart")}
                  />

             </View>
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
            {renderFooter()}

          
          



          </View>
      )
}
export default FoodDetail;