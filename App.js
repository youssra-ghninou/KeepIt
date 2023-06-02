import { NavigationContainer } from '@react-navigation/native'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import LoggedIn from './app/components/LoggedIn'
import Login from './app/components/Login'
import Signup from './app/components/Signup'
import { auth } from './firebase'

export default function App() {
  const [screen, setScreen] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const handleNotePress = (note) => {
    // Set the screen state to 'details' to navigate to the Details component
    setScreen('details')
  }
  const renderScreen = () => {
    if (screen === 'home') {
      return <Home handleNotePress={handleNotePress} />
    } else if (screen === 'details') {
      return <Details />
    }
  }
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

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          {getScreen()} {/* Render the component directly */}
        </View>
        <View style={{ flex: 1 }}>{renderScreen()}</View>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
