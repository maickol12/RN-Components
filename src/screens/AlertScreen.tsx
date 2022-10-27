import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      "Título",
      "Este es el titulo de la alerta",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable:true }
    );
  }
  const showPrompt = () => {
    Alert.prompt(
      '¿Estas Seguro?'
    );
  }
  return (
    <View>
        <HeaderTitle title='Alerts' />
        <Button 
          title='Mostrar Alerta'
          onPress={ showAlert } />
        <View style={{ height:10 }}></View>
        <Button 
          title='Mostrar Promp'
          onPress={ showPrompt } />
    </View>
  )
}

const styles = StyleSheet.create({
    textColor:{
        color:'black'
    }
});
