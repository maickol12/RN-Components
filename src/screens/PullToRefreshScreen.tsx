import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>()
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola Mundo')
        },1500);
    }
  return (
    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={ refreshing }
                onRefresh={ onRefresh }
                progressBackgroundColor={'purple'}
                colors={['white','red','orange']}
            />
        }>
        <View>
            <HeaderTitle title='Pull to refresh'/>
            <Text style={styles.textColor}>{data}</Text>
        </View>
    </ScrollView>
  )
}
