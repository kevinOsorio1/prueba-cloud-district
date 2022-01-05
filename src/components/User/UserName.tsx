import React from 'react'

const UserInfoText = ({label,text,showKeys,field}:Partial<{label:string,text:string,showKeys:boolean,field:string}>)=>{
  return <p data-testid={`infotext-${field}`}>
  {showKeys && label}
  <strong >
    {text}
  </strong>
</p>
}
export default UserInfoText