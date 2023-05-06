import React from 'react';
import { StyleSheet } from 'react-native';

export const info = StyleSheet.create({
    titlemain:{
        fontFamily: 'General Sans',
        fontWeight: '700',
        fontSize: 20,

        letterSpacing: 0.02,

        color: '#425884'
    },
    subtitlemain:{
        marginTop: 10,

        fontFamily: 'General Sans',
        fontWeight: '400',
        fontSize: 12,

        letterSpacing: 0.02,

        color: '#7B6F72'
    },
    margintop:{
        marginTop: 10
    },
    marginright:{
        marginRight: 30
    },
    imgnext:{
        width: 100,
        height: 100,
    }
})

export const inputS = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spaceinputs:{
        margin: 10,
    },
    textinput:{
        fontFamily: 'Poppins',

        fontWeight: '300',
        fontSize: 12,

        letterSpacing: 0.03,
        color: '#3D3D3D',

        marginBottom: 5,
        marginLeft: 2
    },
    input:{
        width: 253,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        borderColor: '#DFE2E5',
        borderWidth: 1,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,

        padding: 10,
    },
    cubetype:{
        marginTop: 20,
        width: 48,
        height: 48,

        borderRadius: 14,

        backgroundColor: '#92A3FD',

        justifyContent: 'center',
        alignItems: 'center'
    },
    cubetext:{
        fontFamily: 'General Sans',
        fontWeight: '500',
        fontSize: 12,

        color: '#FFFFFF'
    },
})