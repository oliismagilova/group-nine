import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useUserAuth } from '../../context/UserAuthContext';

const AdminOnlyRoute = ({ children, email }) => {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  const { user } = useUserAuth()

  useEffect(() => {
    if (user && user.email === email) {
      setAuthorized(true)
    }
    
  }, [user])

  if (!authorized) {
    return (
      <>
        <div>Access Denied</div>
      </>
    )
  }


  return (
    <>
      {children}
    </>
  )
}

export default AdminOnlyRoute;