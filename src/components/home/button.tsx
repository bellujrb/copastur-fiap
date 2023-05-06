import React from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { homebutton } from '../../style/header/style';

interface Props {
    name: string;
}

export default function ButtonHome(props: Props){

    return (
        <TouchableOpacity style={homebutton.minibutton}>
            <Text style={{
                color: 'white'
            }}>{props.name}</Text>
        </TouchableOpacity>
    )
}