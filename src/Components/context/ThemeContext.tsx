import React, {createContext} from "react";
import Theme from "./Theme";


type ThemeContextProps = {
    children: React.ReactNode
}

const ThemeContent = createContext(Theme)

function ThemeContext(props:ThemeContextProps){

   
    return(
        <div>
            <ThemeContent.Provider value={Theme}>{props.children}</ThemeContent.Provider>
        </div>
    )
}

export  {ThemeContext, ThemeContent } ;