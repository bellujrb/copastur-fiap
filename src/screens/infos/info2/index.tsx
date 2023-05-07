import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { header } from '../../../style/info/style';
import { global } from '../../../style/global/style';
import { info } from '../../../style/info/style';
import buttomimg from '../../../assets/images/button1.png';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation';

export default function InfoTwo(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>();
    
    return (
        <SafeAreaView style={{
            justifyContent: 'space-between',
            height: '65%',
        }}>

            {/* Header */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '20%'
            }}>
                <View style={header.top}>
                    <TouchableOpacity>
                            <Ionicons name="arrow-back-circle-outline" size={28} color="black" style={header.spaceicon}/>
                    </TouchableOpacity>

                    <View style={global.row}>
                        <TouchableOpacity>
                                <Ionicons name="notifications-outline" size={28} color="black" style={header.spaceicon}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                                <Ionicons name="apps-outline" size={28} color="black" style={header.spaceicon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* Header End */}

            {/* Title Main */}

            <View>

                <Text style={info.titlemain}>Detalhes da suas viagens</Text>
                <Text style={info.subtitlemain}>Qual e o estilo da sua viagm?</Text>
                <View style={info.margintop}/>

            {/* Title Main End */}

                { /* Botao Next */}
                <View style={info.organizenext}>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('home');
                        alert("Dados salvo com sucesso!")
                    }}>
                        <Image source={buttomimg} style={info.imgnext}/>
                    </TouchableOpacity>
                    <Text style={info.textnext}>Avancar</Text>
                </View>
                { /* Botao Next End */}


            </View>
        </SafeAreaView>
    )
}