import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle'

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
  const loadMore = () => {
    const newArray: number[] = [];
    for(let i = 0; i < 5;i++){ 
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([
        ...numbers,
        ...newArray
      ]);
    },1500)
  }
  const renderItem = (item: number) => {
    return (
      // <Image 
      //   source={{uri:`https://picsum.photos/id/${item}/500/400`}}
      //   style={{
      //     width:'100%',
      //     height:400
      //   }}
      // />
      <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />
    )
  }
  return (
    <View style={{flex:1}}>
        <FlatList 
          data={numbers}
          keyExtractor={(item,index) => index+""+item}
          renderItem={({item}) => renderItem(item)}
          ListHeaderComponent={() => (
            <View style={{marginHorizontal:20}}>
              <HeaderTitle title='Infinite Scroll' />
            </View>
          )}
          onEndReached={() => loadMore()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => (
            <View style={{
              height:150,
              width:'100%',
              justifyContent:'center',
              alignItems:'center'
            }}>
              <ActivityIndicator size={20} color='#5856D6' />
            </View>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textItem:{
      backgroundColor:'green',
      height:150
    }
});
