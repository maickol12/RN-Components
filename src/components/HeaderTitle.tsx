import { useTheme } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { themeContext } from '../context/themeContext/themeContext'
import { styles } from '../theme/appTheme'

interface Props{
    title: string
}

export const HeaderTitle = ({ title }:Props) => {
    const { theme:{colors} } = useContext(themeContext);
    return (
        <View>
            <Text style={{...styles.title,color:colors.text}}>{title}</Text>
        </View>
    )
}
