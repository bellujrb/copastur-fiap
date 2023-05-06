import React from 'react';
import { View, Text } from 'react-native';
import { register } from '../../../style/auth/style';
import { Input } from '../../../components/global/input';
import { global, input } from '../../../style/global/style';
import Button from '../../../components/global/button';
import { confirmregister, loginbutton } from '../../../constants/string';

export default function Login(){

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
                        alert('Cadastrado')
                    }}/>
                { /* End Button Register */ }

            </View>
        </View>
    )
}