import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { header } from '../../style/header/style';
import { global } from '../../style/global/style';
import { Input } from '../../components/global/input';
import { InputSpecial } from '../../components/info/inputspecial';
import { info } from '../../style/info/style';
import buttomimg from '../../assets/images/button1.png';

export default function Info(){
    
    return (
        <SafeAreaView>

            {/* Header */}
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
            {/* Header End */}

            {/* Title Main */}

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Text style={info.titlemain}>Quem sou eu e o que quero?</Text>
                <Text style={info.subtitlemain}>Defina suas preferencias e necessidades</Text>
                <View style={info.margintop}/>

            {/* Title Main End */}

                { /* Input */ }
                <Input name='Como se identifica?' 
                    placeholder='Selecione seu genero'
                />

                <Input name='Qual sua idade?' 
                    placeholder='Selecione sua idade'
                />
                { /* Input End */ }

                { /* Input Special */}
                <View style={info.marginright}>
                    <InputSpecial name='Qual sua altura??' 
                        placeholder='Selecione sua altura'
                        type='CM'
                    />

                    <InputSpecial name='Qual a sua idade??' 
                        placeholder='Selecione sua idade'
                        type='KG'
                    />
                </View>
                { /* Input Special End */}

                { /* Botao Next */}
                    <TouchableOpacity style={{
                        marginTop: 60
                    }}>
                        <Image source={buttomimg} style={info.imgnext}/>
                    </TouchableOpacity>
                { /* Botao Next End */}


            </View>
        </SafeAreaView>
    )
}