import { createContext, useContext, useState } from "react";
import { useController } from "react-hook-form";

// Context -> exposing
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // { user, setUser }
}

// Provider -> managing state

const UserProvider = (props) => {

    const[ user, setUser ] = useState(null)

    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ state }>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider