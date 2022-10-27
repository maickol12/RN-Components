import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const ItemSeparator = () => {
  return (
    <View>
        <Text style={{borderBottomWidth:1,opacity:0.4,...styles.textColor}} />
    </View>
  )
}
