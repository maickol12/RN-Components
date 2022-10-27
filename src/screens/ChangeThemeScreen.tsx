import { useTheme } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { themeContext } from '../context/themeContext/themeContext'

export const ChangeThemeScreen = () => {
  const { setDarkTheme,setLightTheme,theme:{colors} } = useContext(themeContext);
  return (
    <View>
        <HeaderTitle title='Theme' />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity
            onPress={ setLightTheme }
            style={{
                backgroundColor:colors.primary,
                justifyContent:'center',
                width:150,
                height:50,
                borderRadius:20
            }}
            activeOpacity={0.8}>
              <Text style={{
                  color:colors.text,
                  textAlign:'center',
                  fontSize:22
              }}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ setDarkTheme }
            style={{
                backgroundColor:colors.primary,
                justifyContent:'center',
                width:150,
                height:50,
                borderRadius:20
            }}
            activeOpacity={0.8}>
              <Text style={{
                  color:colors.text,
                  textAlign:'center',
                  fontSize:22
              }}>Dark</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
