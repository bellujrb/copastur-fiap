import { StyleSheet } from "react-native"

export const header = StyleSheet.create({
    top:{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 60,
    },
    name:{
        fontFamily: 'General Sans',
        fontWeight: '400',
        fontSize: 12,

        color: '#A4A4A5'
    },
    subtitle:{
        fontFamily: 'General Sans',
        fontWeight: '700',
        fontSize: 20,

        color: '#425884'
    },
    spaceicon:{
        marginTop: 10,
        marginLeft: 10
    }
})

export const homebutton = StyleSheet.create({
    align:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    hbutton1:{
        padding: 10,
        width: 329,
        height: 137,
        
        backgroundColor: '#9DCEFF',

        justifyContent: 'space-between',
        alignItems: 'center',

        flexDirection: 'row',
        borderRadius: 22
    },
    title:{
        fontFamily: 'General Sans',
        fontWeight: '500',
        fontSize: 15.5,

        color: '#1D1617'
    },
    minibutton:{
        marginTop: 15,

        width: 142.04,
        height: 25,
            
        backgroundColor: 'rgba(0, 128, 255, 0.49)',
        borderRadius: 50,
            
        justifyContent: 'center',
        alignItems: 'center'
    }
})