import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
    organize:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    row:{
        flexDirection: 'row'
    }
})

export const input = StyleSheet.create({
    spaceinputs:{
        margin: 10
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
        width: 334,
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
})