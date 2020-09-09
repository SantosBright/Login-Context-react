import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [ isDarkMode, setDarkMode ] = useState(false);
    const toggleTheme = () => setDarkMode(!isDarkMode);
    return(
        <ThemeContext.Provider
            value={{isDarkMode, toggleTheme}}
        >
            {props.children}
        </ThemeContext.Provider>
    );
}