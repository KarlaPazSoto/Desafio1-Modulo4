import { createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(false);

    const handleLogin = () => {
        setToken(true);
    };

    const handleLogout = () => {
        setToken(false)
    };

    const handleRegister = () => {
        setToken(true)
    }

    return(
        <UserContext.Provider value={{token, handleLogin, handleLogout, handleRegister}}>
            {children}
        </UserContext.Provider>
    )
}