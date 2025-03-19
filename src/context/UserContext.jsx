import React, { createContext } from 'react'

export const Context = createContext()

const ContextProvider = ({children}) => {
const [user,setUser]=React.useState(null)

  return (
  
      <Context.Provider value={{user,setUser}}>
        {children}
         </Context.Provider>
  
  )
}

export default ContextProvider;