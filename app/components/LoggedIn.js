import { signOut } from 'firebase/auth'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { auth } from '../../firebase'

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
      <Text>Logged in</Text>
      <Button title='Log out' onPress={logout} />
    </View>
  )
}
