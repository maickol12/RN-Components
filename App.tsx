import 'react-native-gesture-handler';
import * as React from 'react';
import Navigation from './src/Navigation/Navigation';
import { ThemeProvider } from './src/context/themeContext/themeContext';


const App = () => {
  return (
   <AppState>
      <Navigation />
   </AppState>
  );
}
const AppState = ({ children }:any) => {
  return(
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}
export default App;