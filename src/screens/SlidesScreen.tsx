import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { items, Slide } from '../data/slideShowData'
import { useAnimation } from '../hooks/useAnimation';

const { height:screenHeight,width:screenWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<any,any>{};

export const SlidesScreen = ({ navigation }:Props) => {
    const {opacity,fadeIn} = useAnimation();
    const [activeDot, setActiveDot] = useState(0);
    const renderItem = ( item: Slide ) => (
        <View style={{flex:1,backgroundColor:'white',borderRadius:5,padding:40,justifyContent:'center'}}>
            <Image 
                source={item.img}
                style={{
                    width:350,
                    height:450,
                    resizeMode:'center'
                }}
            />
            <Text style={styles.title}>{ item.title }</Text>
            <Text style={styles.subtitle}>{ item.desc }</Text>
        </View>
    );
  return (
    <View style={{flex:1}}>
         <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={ items }
              renderItem={({ item }) => renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout='default'
              onSnapToItem={(index) => {
                setActiveDot(index);
                if( index === (items.length-1) ){
                    fadeIn(1000);
                }else {
                    
                }
              }}
            />
        <View style={{
                backgroundColor:'white',
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:20,
                alignItems:'center'
            }}>
            <Pagination
                containerStyle={{ backgroundColor: 'white'}}
                dotsLength={items.length}
                dotStyle={{
                    width:10,
                    height:10,
                    borderRadius:10,
                    backgroundColor:'#5856D6'
                }}
                activeDotIndex={activeDot}
            />
            { activeDot === items.length-1 &&
            <Animated.View
                style={{
                    opacity
                }}>
                <TouchableOpacity
                    onPress={() => {
                        if( activeDot === items.length-1 ){
                            navigation.navigate('Home');
                        }
                    }}
                    style={{
                        flexDirection:'row',
                        backgroundColor:'#5856D6',
                        width:140,
                        height:50,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:10
                    }}
                    activeOpacity={0.9}
                >   
                    <Text style={{fontSize:25,color:'white'}}>Entrar</Text>
                    <Icon 
                        name='chevron-forward-outline'
                        color={'white'}
                        size={30} />
                </TouchableOpacity>
            </Animated.View>
            }
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#5856D6'
    },
    subtitle:{
        fontSize:16
    }
});