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
      console.log('Auth state changed:', user)
      if (user) {
        console.log('User is logged in')
        setLoggedIn(true)
      } else {
        console.log('User is not logged in')
        setLoggedIn(false)
      }
    })

    // Clean up the listener when component unmounts
    return () => unsubscribe()
  }, []) // Empty dependency array ensures the effect runs only once

  const getScreen = () => {
    console.log('Getting screen:', loggedIn, screen)
    if (loggedIn) return <LoggedIn />
    if (screen === 'signup') return <Signup setScreen={setScreen} />
    return <Login setScreen={setScreen} />
  }

  console.log('Rendering app')
  return <View style={{ flex: 1 }}>{getScreen()}</View>
}
