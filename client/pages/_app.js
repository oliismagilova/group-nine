import '@/style/main.css'

import Head from 'next/head'


import { UserAuthContextProvider } from '../context/UserAuthContext'

function Application({ Component, pageProps }) {
  

  return (
    <UserAuthContextProvider>
      <main id="_app_">
        <Component {...pageProps} />
      </main>
    </UserAuthContextProvider>
  )
}

export default Application
