import { StyleSheet } from "react-native";

export const call = StyleSheet.create({
    container:{
        width: 349,
        height: 90,
        borderRadius: 90,

        backgroundColor: 'rgba(146, 163, 253, 0.8)',
    },
    organize1:{
        marginLeft: 10,

        justifyContent: 'space-between',
        padding: 20,
        height: '100%'
    },
    text:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 12,

        color: '#425884'
    },
    organize2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subtitle:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,

        color: '#000000'
    }
})

export const message = StyleSheet.create({
    container:{
        marginTop: 5,
        marginLeft: 12,

        width: 276,
        height: 60,

        padding: 12,
        backgroundColor: 'rgba(151, 151, 151, 0.1)',
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,

        color: '#1D1617'
    },
    rectangle:{
        marginTop: 5,
        marginLeft: 12,

        width: 276,
        height: 60,

        padding: 12,
        backgroundColor: 'rgba(151, 151, 151, 0.1)',
    },
    subtitle:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,

        color: '#1D1617'
    }
})