import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { header, homebutton } from '../../style/header/style';
import { global } from '../../style/global/style';
import ButtonHome from '../../components/home/button';
import { LinearGradient } from 'expo-linear-gradient';
import my from '../../assets/images/my.png';
import { RootStackParams } from '../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


export default function Home(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <View>
        {/* Header Start */}
        <View style={header.top}>
        <View>
            <Text style={header.name}>Hey</Text>
            <Text style={header.subtitle}>Belluzzo</Text>
        </View>
            
            <View style={global.row}>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="#0C1523" style={header.spaceicon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="apps-outline" size={24} color="#0C1523" style={header.spaceicon}/>
                </TouchableOpacity>
            </View>
        </View>

        {/* Buttoes */}
        <View style={homebutton.align}>

        {/* Button Definir */}

        <LinearGradient colors={['#92A3FD', '#9DCEFF']} style={homebutton.hbutton1}>
            <View style={{
                width: '55%'
            }}>
                <Text style={homebutton.title}>Quem eu sou? O que eu quero?</Text>
                <ButtonHome name='Definir' destiny={() => {
                    nav.navigate('info1')
                }}/>
            </View>

            <Image source={my} style={homebutton.img}/>
        </LinearGradient>

        {/* Button Ver Todas */}

        <View style={{
            marginTop: 35,

            width: 329, 
            height: 90,

            borderRadius: 22,
            backgroundColor: '#92A3FD',
        }}>

        </View>

        {/* Button Ver Todas End*/}
        
        {/* Button Checkar */}
        <View style={{
            marginTop: 35,

            width: 315, 
            height: 68,
            
            backgroundColor: '#92A3FD'
        }}>


        </View>

        </View>
        {/* End Button Checkar */}
        </View>
    )
}