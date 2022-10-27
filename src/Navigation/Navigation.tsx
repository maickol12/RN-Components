
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }     from '@react-navigation/stack';
import { useContext } from 'react';
import { SectionList } from 'react-native';
import { themeContext } from '../context/themeContext/themeContext';
import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen }       from '../screens/Animation101Screen';
import { Animation102Screen }       from '../screens/Animation102Screen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { HomeScreen }               from '../screens/HomeScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';

const Stack = createStackNavigator<RootStackParams>();

export type RootStackParams = {
    Home: undefined,
    Animation101Screen: undefined,
    Animation102Screen: undefined,
    SwitchScreen: undefined,
    AlertScreen: undefined,
    TextInputScreen: undefined,
    PullToRefreshScreen: undefined,
    CustomSectionListScreen: undefined,
    ModalScreen: undefined,
    InfiniteScrollScreen: undefined,
    SlidesScreen: undefined,
    ChangeThemeScreen: undefined
}

const Navigation = () => {
  const { theme } = useContext(themeContext)
  return (
    <NavigationContainer 
      theme={theme}>
        <Stack.Navigator
          screenOptions={{
              headerShown:false
          }}>
        <Stack.Screen name="Home"                       component={HomeScreen} />
        <Stack.Screen name="Animation101Screen"         component={Animation101Screen} />
        <Stack.Screen name="Animation102Screen"         component={Animation102Screen} />
        <Stack.Screen name="SwitchScreen"               component={SwitchScreen} />
        <Stack.Screen name="AlertScreen"                component={AlertScreen} />
        <Stack.Screen name="TextInputScreen"            component={TextInputScreen} />
        <Stack.Screen name="PullToRefreshScreen"        component={PullToRefreshScreen} />      
        <Stack.Screen name="CustomSectionListScreen"    component={CustomSectionListScreen} />  
        <Stack.Screen name="ModalScreen"                component={ModalScreen} />  
        <Stack.Screen name="InfiniteScrollScreen"       component={InfiniteScrollScreen} />  
        <Stack.Screen name="SlidesScreen"               component={SlidesScreen} />  
        <Stack.Screen name="ChangeThemeScreen"          component={ChangeThemeScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;