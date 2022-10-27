import { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme, themeReducer, ThemeState } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}

export const themeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({children}:any) => {
    const colorScheme = useColorScheme();
    useEffect(() => {
      ( colorScheme === 'light' )
      ? setLightTheme()
      : setDarkTheme()
      
    }, [colorScheme])
    
    const [ theme,dispatch ] = useReducer(themeReducer,(colorScheme === 'dark')?darkTheme:lightTheme); //TODO
    const setDarkTheme = () => {
        dispatch({type:'dark_theme'})
    }
    const setLightTheme = () => {
        dispatch({type:'light_theme'})
    }
    return (
        <themeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            { children }
        </themeContext.Provider>
    )
};