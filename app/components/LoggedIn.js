import { signOut } from 'firebase/auth'
import React from 'react'
import { Button, View } from 'react-native'
import { auth } from '../../firebase'
import CreateNote from './CreateNote'
import Home from './Home'

export default function LoggedIn() {
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home />
      <CreateNote />
      <Button title='Log out' onPress={logout} />
    </View>
  )
}
