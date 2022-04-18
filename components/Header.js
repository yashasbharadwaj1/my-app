import { View, Text } from 'react-native'
import React from 'react'
import {FONTS} from "../constants";
const Header = ({containerStyle,title,titleStyle,leftComponent,rightComponent}) =>{
    return (
        <View
            style={{
                height:60,
                flexDirection:'row',
                ...containerStyle
            }}
            >
                {/*leftComponent*/}
                {leftComponent}

                {/*title*/}
                <View style={{
                   flex:1,
                   alignItems: 'center',
                   justifyContent: 'center'
                }}
                >
                    <Text style={{...FONTS.h3}}>
                        {title}
                    </Text>
                </View>

           {/*rightComponent*/}
           {rightComponent}


        </View>
    )
}
export default Header;