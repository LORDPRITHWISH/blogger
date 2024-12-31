import React from 'react'

const Authenticator = ({children,authentication=true}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Authenticator