import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { header } from '../../style/header/style';
import { global } from '../../style/global/style';
import { Input } from '../../components/global/input';
import { InputSpecial } from '../../components/info/inputspecial';

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

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Text style={{
                    fontFamily: 'General Sans',
                    fontWeight: '700',
                    fontSize: 20,

                    letterSpacing: 0.02,

                    color: '#425884'
                }}>Quem sou eu e o que quero?</Text>
                <Text style={{
                    marginTop: 10,

                    fontFamily: 'General Sans',
                    fontWeight: '400',
                    fontSize: 12,

                    letterSpacing: 0.02,

                    color: '#7B6F72'
                }}>Defina suas preferencias e necessidades</Text>
                <View style={{
                    marginTop: 10,
                }}/>

                <Input name='Como se identifica?' 
                    placeholder='Selecione seu genero'
                />

                <Input name='Qual sua idade?' 
                    placeholder='Selecione sua idade'
                />

                <View style={{
                    marginRight: 30
                }}>
                    <InputSpecial name='Qual sua altura??' 
                        placeholder='Selecione sua altura'
                        type='CM'
                    />

                    <InputSpecial name='Qual a sua idade??' 
                        placeholder='Selecione sua idade'
                        type='KG'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}