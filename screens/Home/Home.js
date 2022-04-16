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

import HorizontalFoodCard from "../../components/HorizontalFoodCard"
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../../constants/index";
const Home = () => {
    const[selectedCategoryID,setSelectedCategoryID] =React.useState(1)
    const[selectedMenuType,setSelectedMenuType]=React.useState(1)
    const[menuList,setMenuList] = React.useState([])

    React.useEffect(() => {
       handleChangeCategory(selectedCategoryID,selectedMenuType)
    },[])

   //Handler
   function handleChangeCategory(categoryId,menutypeId) {
    //find the menu based on menutypeId
    let selectedMenu = dummyData.menu.find(a => a.id ==
         menutypeId)
    // set menu based on the categoryID
    setMenuList(selectedMenu?.list.filter(a =>a.categories.includes(categoryId)))
   }

   //Render


    return (
        <View
            style={{
                flex: 1,
                
            }}
        >
            
            
             {/* List*/}
             <FlatList
             data={menuList}
             keyExtractor={(item)=>`${item.id}`}
             showsVerticalScrollIndicator={false}
             renderItem={({item,index})=>{
                 return (
                     <HorizontalFoodCard
                     containerStyle={{
                         height:130,
                         alignItems: 'center',
                         marginHorizontal:SIZES.padding,
                         marginBottom:SIZES.radius
                     }}
                     imageStyle={{
                         marginTop:20,
                         height:110,
                         width:110
                     }}
                     item={item}
                     onPress={()=>console.log("HorizontalFoodCard")}
                     
                     
                     
                     />
                 )
             }}
             
             
             />







            
        </View>
    )
}

export default Home;