import { context } from "./UserContext";
import { useContext } from "react";



function User(){
    const contextValue = useContext(context)

    const handleLogin = ()=> {
        if(context){
            contextValue?.setUser({
                name: 'jaii',
                email: 'jaii@gmail.com'
            })
        }
    }

    const handleLogOUt = ()=> {
        if(context){
            contextValue?.setUser(null)

        }
    }

    return(
        <div>
          <button onClick= {handleLogin} >log in</button>
          <button onClick = {handleLogOUt} >log out</button>
          <div>user name:{contextValue?.user?.name}</div>
          <div>user email:{contextValue?.user?.email}</div>
        </div>
    )
}

export default User;
