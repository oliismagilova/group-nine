import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: 'group-nine-project',
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSENGER_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

// export const analytics = getAnalytics(app)
export const db = getFirestore(app)

// https://firebase.google.com/
