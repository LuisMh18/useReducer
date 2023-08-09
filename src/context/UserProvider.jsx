import { UserContext } from "./userContext"


const user = {
    id:123,
    name:"Luis Mondragon",
    email:"luis_mh@outlook.es"
}

export const UserProvider = ({ children }) => {
  return (
    
    <UserContext.Provider value={{ hola: 'Mundo', user }}>
        { children }
    </UserContext.Provider>

  )
}
