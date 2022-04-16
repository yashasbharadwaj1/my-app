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

const Section =({title,onPress,children}) =>{
    return (
        <View>
        
            {/* Header */}
            <View style={{
                flexDirection:'row',
                marginHorizontal:16,
                marginTop:30,
                marginBottom:20
            }}>
            <Text style={{flex:1,...FONTS.h3}}>
                {title}
            </Text>
            <TouchableOpacity 
            onPress={onPress}
            >
                 <Text>ShowAll</Text> 
            </TouchableOpacity>
          
            </View>

            {children}

            <View
            style={{
                height:1,
                marginVertical:SIZES.radius,
                backgroundColor:COLORS.lightGray1

            }}
            />
        </View>
    )
}
const Home = () => {
    const[selectedCategoryID,setSelectedCategoryID] =React.useState(1)
    const[selectedMenuType,setSelectedMenuType]=React.useState(1)
    const[menuList,setMenuList] = React.useState([])
    const [recommends,setRecommends]=React.useState([])
    React.useEffect(() => {
       handleChangeCategory(selectedCategoryID,selectedMenuType)
    },[])

   //Handler
   function handleChangeCategory(categoryId,menutypeId) {
    
    let selectedRecommended = dummyData.menu.find(a =>a.name =="Recommended" )
    
    
    
    
    //find the menu based on menutypeId



    let selectedMenu = dummyData.menu.find(a => a.id ==
         menutypeId)
    // set menu based on the categoryID
    setMenuList(selectedMenu?.list.filter(a =>a.categories.includes(categoryId)))


    //set recommends
    setRecommends(selectedRecommended?.list.filter(a => a.categories.includes(categoryId)))
   }

   //Render recommended
   function renderRecommendedSection() {
       return(
         <Section title="popular near you"
         onPress={()=>console.log("show all")}
         >
             
             <FlatList 
             data={recommends}
             keyExtractor={item => `${item.id}`}
             horizontal 
             showsHorizontalScrollIndicator={false}
             renderItem={({item,index})=>(
             <HorizontalFoodCard 
             containerStyle={{
                 height:100,
                 width:SIZES.width*0.85,
                 marginLeft:index ==0 ? SIZES.
                 padding:18,
                 marginRight:index == recommends.
                 length -1 ? SIZES.padding :0,
                 paddingRight:SIZES.radius,
                 alignItems: 'center'

             }}
             imageStyle={{
                 marginTop:35,
                 height:150,
                 width:150
             }}
             item={item}
             onPress={()=>console.log('horizontalfoodcard')}
             
             />

             )}
            
             
             
             />
         </Section>
        

           
           
       )
       
   }


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
             ListHeaderComponent={ 
                 <View> 
                    {/*popular*/} 
                    {renderRecommendedSection()}
                 </View>
             }
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