import React,{useContext} from "react";
import {ThemeContent} from "./ThemeContext"



function Box(){
    const theme = useContext(ThemeContent)
    return(
        <div style={{backgroundColor: theme.primary.main, color: theme.primary.type}}>
            ThemeBox
        </div>
    )
}

export default Box;
