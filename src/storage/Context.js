import {createContext, useState} from 'react'

 export const FirebaseContext =createContext(null)

 //different method to construct context

export const AuthContext = createContext(null);

 export default function Context({children}) {
    const [user,setUser] =useState('Hello')

    return(
        <AuthContext.Provider value={{user,setUser}}>

            {children}

        </AuthContext.Provider>
    )
}


