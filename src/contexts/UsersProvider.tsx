import React, { ReactElement } from 'react'

import { UsersContext, useUsersContext } from './UsersContext/useUsersContext';

const UsersProvider = ({children}:{children:ReactElement}) =>{
  const contextData = useUsersContext();
  return <UsersContext.Provider value={contextData}>
    {children}
  </UsersContext.Provider>
}

export default UsersProvider