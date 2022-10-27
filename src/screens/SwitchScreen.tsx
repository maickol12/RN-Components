import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {
  
  const [state,setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  const { isActive,isHungry,isHappy } = state;

  const onChange = (value: boolean,field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value
    });
  }

  return (
    <View style={{ marginTop:20 }}>
      <HeaderTitle title='Switches' />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Active</Text>
        <CustomSwitch isOn={isActive} onChange={ (value) => onChange(value,'isActive')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Hungry</Text>
        <CustomSwitch isOn={isHungry} onChange={ (value) => onChange(value,'isHungry')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Happy</Text>
        <CustomSwitch isOn={isHappy} onChange={ (value) => onChange(value,'isHappy')} />
      </View>
      <Text style={ styles.textColor }>
        { JSON.stringify(state,null,4) }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  switchRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textColor:{
    color:'black'
  },
  switchText: {
    color:'black',
    fontSize: 25
  }
});