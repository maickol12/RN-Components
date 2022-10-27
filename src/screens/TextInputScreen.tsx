import React, { useState } from 'react'
import { StyleSheet, View,KeyboardAvoidingView, Platform,Keyboard, Text } from 'react-native'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'

export const TextInputScreen = () => {
    const {
        form,
        onChange, 
        name,
        email,
        phone,
        isSubscribed
    } = useForm({
        name:'',
        email:'',
        phone:'',
        isSubscribed:false
    });
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding':'height'}>
        <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.container}>
                <HeaderTitle title='TextInputs' />
                <TextInput 
                    style={styles.inputStyle}
                    value={name}
                    placeholder='Ingresa su nombre'
                    placeholderTextColor={'black'}
                    autoCorrect={false}
                    onChangeText={(value) => onChange(value,'name')}
                />
                <TextInput 
                    style={styles.inputStyle}
                    value={email}
                    placeholder='Ingresa su email'
                    placeholderTextColor={'black'}
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={(value) => onChange(value,'email')}
                />
                <TextInput 
                    style={styles.inputStyle}
                    value={phone}
                    placeholder='Ingresa su teléfono'
                    placeholderTextColor={'black'}
                    autoCorrect={false}
                    keyboardType='phone-pad'
                    onChangeText={(value) => onChange(value,'phone')}
                />
                <Text style={styles.textColor}>Subscribirme</Text>
                <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value,'isSubscribed')} />
                <HeaderTitle title={JSON.stringify(form,null,3)} />
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    textColor:{
        color:'black'
    },
    container:{
        margin:10
    },
    inputStyle:{
        color:'black',
        borderWidth:1,
        borderColor:'RGBA(255,255,255,0.3)',
        height:50,
        paddingHorizontal:10,
        borderRadius:10,
        marginVertical:10
    }
});