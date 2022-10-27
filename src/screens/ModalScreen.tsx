import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <View>
        <HeaderTitle title='ModalScreen' />

        <Button 
            title='Abrir modal' 
            onPress={() => setIsVisible(true)}/>

        <Modal
            style={{
                flex:1,
                backgroundColor:'rgba(0,0,0,0.3)',
                justifyContent:'center',
                alignItems:'center'
            }}
            animationType='slide'
            visible={isVisible}
            transparent={true}
        >
            <View
                style={{
                    flex:1,
                    backgroundColor:'rgba(0,0,0,0.3)',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <View
                    style={{
                        backgroundColor:'white',
                        width:200,
                        height:200,
                        justifyContent:'center',
                        alignItems:'center',
                        shadowOffset:{
                            width:0,
                            height:10
                        },
                        shadowOpacity:0.25,
                        elevation:4,
                        borderRadius:5
                    }}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Modal</Text>
                    <Text style={{fontSize:16,fontWeight:'300',marginBottom:20}}>Cuerpo del modal</Text>
                    <Button 
                        title='Salir'
                        onPress={() => setIsVisible(false)} />
                </View>
            </View>
        </Modal>
    </View>
  )
}
