import React from 'react';
import { View, Text } from 'react-native';
import { register } from '../../../style/auth/style';
import { Input } from '../../../components/global/input';
import { global, input } from '../../../style/global/style';
import Button from '../../../components/global/button';
import { loginbutton } from '../../../constants/string';
import { RootStackParams } from '../../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function Login(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <View>
            { /* Title */}
            <View>
                <Text style={register.containertext}>Login</Text>
            </View>
            { /* End Title */}

            { /* Input Name  */}
            <View style={global.organize}>

                <Input
                    name='E-mail'
                    placeholder='Digite seu primeiro nome'
                />

                <Input
                    name='Senha'
                    placeholder='Digite seu sobrenome'
                />

                { /* End Input Name  */}

                { /* Button Register */ }
                    <Button nameButton={loginbutton} destiny={() => {
                        nav.navigate('home')
                    }}/>
                { /* End Button Register */ }

            </View>
        </View>
    )
}