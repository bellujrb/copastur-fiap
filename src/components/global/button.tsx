import React, { useEffect, useRef} from 'react';
import { TouchableOpacity, Text, Animated, StyleSheet } from 'react-native';

interface Props {
    nameButton: String;
    destiny?: any;
}

export default function Button(props: Props){

    let widthAnimated: number | any;

    widthAnimated = useRef(new Animated.Value(315)).current;
    const opacity = useRef(new Animated.Value(1)).current;

    const button = StyleSheet.create({
        rectangle:{
            marginTop: 10,
    
            width: widthAnimated,
            height: 60,
    
            backgroundColor: '#9DCEFF',
            borderRadius: 99,
    
            justifyContent: 'center',
            alignItems: 'center'
        },
        text:{
            fontFamily: 'General Sans',
            fontWeight: '700',
            fontSize: 16,
    
            color: '#FFFFFF'
        }
    })

    const animatedLogin = () => {

        return new Promise((resolve) => {
            Animated.sequence([
                Animated.timing(widthAnimated, {
                    toValue: 100,
                    duration: 2000,
                    useNativeDriver: false
                }),
                Animated.timing(widthAnimated, {
                    toValue: 300,
                    duration: 1000,
                    useNativeDriver: false
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false
                })
                ]).start()
            setTimeout(() => resolve('teste'), 4000)
            })
        }

        const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

    return (

    <AnimatedTouchable style={button.rectangle} onPress={async (params: any) => {
        await animatedLogin();
        props.destiny()
    }}>
        <Text style={button.text}>{props.nameButton}</Text>
    </AnimatedTouchable>
    
    )
}