
import { createContext , useState} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState ({
        email: 'saecompani@gmial.com',
        token : 'saecompani'
    })
    return (
        <UserContext.Provider value= {{user}}>
            {children}
        </UserContext.Provider>
    )
}
