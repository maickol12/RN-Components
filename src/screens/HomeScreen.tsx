import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/menuItems';
import { styles }           from '../theme/appTheme';



export const HomeScreen = () => {
  
  const itemSeparator = () => {
    return (
      <Text style={{borderBottomWidth:1,opacity:0.4,...styles.textColor}} />
    )
  }
  return (
    <View style={{ flex:1,...styles.globalMargin }}>
      
      <FlatList 
        data={menuItems}
        renderItem={ ({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<HeaderTitle title='Opciones de Menú' /> }
        ItemSeparatorComponent={ itemSeparator }
      />
    </View>
  )
}
