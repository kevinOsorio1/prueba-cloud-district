import React, { ReactElement } from 'react'
import { LoginContext, useLoginContext } from './LoginContext/useLoginContext'

export const AuthProvider = ({children}:{children:ReactElement}) =>{
  const contextData = useLoginContext();
  return <LoginContext.Provider value={contextData}>
    {children}
  </LoginContext.Provider>
}