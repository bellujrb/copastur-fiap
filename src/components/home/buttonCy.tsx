import React from "react";
import { View, Image, Text} from 'react-native'
import cy1 from '../../assets/images/cy1.png';
import ButtonHome from "./button";
import { buttonCy } from "../../style/global/style";

interface Props {
    name: string;
    namebutton: string;
    img?: any;
}

export default function ButtonCy(props: Props){

    return (
        <View style={buttonCy.container}>
            <View style={buttonCy.width}>
            <Image source={props.img} style={buttonCy.img}/>
            </View> 

            <View>
                <Text style={buttonCy.textbutton}>{props.name}</Text>
                <ButtonHome name={props.namebutton} destiny={() => {
                    alert("In development")
                }}/>
            </View>
        </View>
    )
}