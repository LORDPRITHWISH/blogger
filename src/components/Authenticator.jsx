import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Authenticator = ({children,authentication=true}) => {

  // if(authentication){

    const logstate = useSelector(state => state.auth.status)
    
    const navigate = useNavigate()
    
    const [loading, setLoading] = React.useState(true)

    React.useEffect(()=>{
      if(authentication && !logstate){
        navigate('/login')
      }
      else if(!authentication && logstate){
        navigate('/')
      }
      setLoading(false)
    },[logstate,authentication,navigate])
    
    
  // }

  return loading?null:(
    <div>
        {children}
    </div>
  )
}

export default Authenticator