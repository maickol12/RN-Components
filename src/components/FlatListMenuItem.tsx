import { useNavigation, useTheme } from '@react-navigation/native'
import React, { useContext } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { themeContext } from '../context/themeContext/themeContext'
import { MenuItem } from '../interfaces/interfaces'
interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    const navigation = useNavigation();
    const { theme:{colors} } = useContext(themeContext)
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon 
                    name={menuItem.icon}
                    color={colors.primary} 
                    size={25}/>
            <Text style={{
                ...styles.itemText,
                color:colors.text
            }}>
                { menuItem.name }
            </Text>
            <View style={{flex:1}} />
            <Icon 
                    name={'chevron-forward-outline'}
                    color='gray' 
                    size={25}/>
            </View>
        </TouchableOpacity>
    )
    }


const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    itemText:{
        marginLeft:5,
        color:'black'
    }
});