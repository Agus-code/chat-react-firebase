import { useState , createContext } from 'react'

const AuthContext = createContext()

const AuthContextProvider = ({children})=>{
    const [ isLogged, setIsLogged ] = useState(false);
    const [ userData, setUserData ] = useState();

    const getUser = (name,email,photo)=>{
        setUserData({
            name,
            email,
            photo
        })
    }

    const logged = (bol)=>{
        setIsLogged(bol);
    }


    return(
        <>
            <AuthContext.Provider value={{ isLogged, userData, getUser, logged }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider;
export { AuthContext }