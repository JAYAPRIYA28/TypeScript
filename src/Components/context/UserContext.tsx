import React,{createContext, useState} from "react";

type AuthenUser = {
    name: string
    email: string
}

type contextProps = {
    children: React.ReactNode
}

type userContextType = {
    user: AuthenUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthenUser | null>>
}

const context = createContext<userContextType | null>(null)
function UserContext(props:contextProps){

    const [user, setUser] = useState<AuthenUser | null>(null)


    return(
        <div>
         <context.Provider value={{user, setUser}}>{props.children}</context.Provider>
        </div>
    )
}

export { UserContext, context};