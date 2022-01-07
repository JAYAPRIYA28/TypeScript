import React from 'react'
import Login from './Login'
import  { publicComponent } from "./Public"

 
type personalComponent = {
    isLoggedIn: boolean
    component : React.ComponentType<publicComponent>
}

function Personal( props: personalComponent) {
    if(props.isLoggedIn){
        return <props.component name= "jaii"/> 
    }else {
        return <Login />
    }
 
}

export default Personal
