import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import LoggedIn from './app/components/LoggedIn'
import Login from './app/components/Login'
import Signup from './app/components/Signup'
import { auth } from './firebase'

export default function App() {
  const [screen, setScreen] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })

    // Clean up the listener when component unmounts
    return () => unsubscribe()
  }, [])

  const getScreen = () => {
    if (loggedIn) return <LoggedIn />
    if (screen === 'signup') return <Signup setScreen={setScreen} />
    return <Login setScreen={setScreen} />
  }

  return <View style={{ flex: 1 }}>{getScreen()}</View>
}
