import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useUserAuth } from '../../context/UserAuthContext';

const AdminOnlyRoute = ({ children, email }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  const { user } = useUserAuth()

  useEffect(() => {
    if (user) {
      if (user.email !== email) {
        router.push('/auth/login')
      }
      setLoading(false)

    }

    

  }, [user, loading])


  if (loading) {
    return (
      <>
        <div>loading...</div>
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