import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children}) => {

    const [theme, setTheme] = React.useState("light");

    const lightTheme = () => {
        setTheme("light")
      }
    
      const darkTheme = () => {
        setTheme("dark")
      }

    return (
        <ThemeContext.Provider value={{theme,lightTheme,darkTheme}}>
            {children}
        </ThemeContext.Provider>

    )

}

// import { createContext, useContext } from "react";

// export const ThemeContext = createContext({
//     themeMode: "light",
//     darkTheme: () => {},
//     lightTheme: () => {},
// })

// export const ThemeProvider = ThemeContext.Provider

// export default function useTheme(){
//     return useContext(ThemeContext)
// }
