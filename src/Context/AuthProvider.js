import React, { createContext, useState } from 'react'


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {


  const [role, setRole] = useState('')
  //const [success, setSuccess] = useState(false)
  const [username, setUsername] = useState('')
  const [authToken, setAuthToken] = useState({})

  

  return (
    <AuthContext.Provider value={{role, setRole, username, setUsername, authToken, setAuthToken}}>
        {children}
    </AuthContext.Provider>
  )
}


export default AuthContext