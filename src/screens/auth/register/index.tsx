import React from 'react';
import { View, Text } from 'react-native';
import { register } from '../../../style/auth/style';
import { Input } from '../../../components/global/input';
import { global, input } from '../../../style/global/style';
import Button from '../../../components/global/button';
import { confirmregister } from '../../../constants/string';

export default function Register(){

    return (
        <View>
            { /* Title */}
            <View>
                <Text style={register.containertext}>Register</Text>
            </View>
            { /* End Title */}

            { /* Input Name  */}
            <View style={global.organize}>

                <Input
                    name='Nome'
                    placeholder='Digite seu primeiro nome'
                />

                <Input
                    name='Sobrenome'
                    placeholder='Digite seu sobrenome'
                />

                <Input
                    name='E-mail'
                    placeholder='Digite seu e-mail'
                />

                <Input
                    name='Senha'
                    placeholder='Digite sua senha'
                />

                { /* End Input Name  */}

                { /* Button Register */ }
                    <Button nameButton={confirmregister} destiny={() => {
                        alert('Cadastrado')
                    }}/>
                { /* End Button Register */ }

            </View>
        </View>
    )
}