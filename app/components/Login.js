import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import tailwind from 'twrnc'

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Image } from 'react-native-web'
import { auth } from '../../firebase' // Import the auth object from firebase

export default function Login({ setScreen }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setError('Invalid email address')
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password')
      } else if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists')
      } else {
        setError('There was a problem with your request')
      }
    }
  }
  return (
    <View style={tailwind`py-10 items-center justify-center flex flex-col`}>
      <Image
        source={require('../../assets/note-icon.png')}
        style={tailwind`w-40 h-40 self-center`}
      />
      <Text style={tailwind`font-thin text-xl`}>NOTE-IT</Text>
      <Text style={tailwind`font-thin text-xl `}>Stay Centered</Text>

      <View style={tailwind``}>
        <Text style={tailwind``}>Login in</Text>
        {error && <Text style={styles.error}>{error}</Text>}

        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          placeholder='Enter email address'
          autoCapitalize='none'
          placeholderTextColor='#aaa'
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder='Enter password'
          autoCapitalize='none'
          placeholderTextColor='#aaa'
          style={styles.input}
        />
        <Button
          title='Login'
          onPress={loginUser}
          disabled={!email || !password}
        />
        <TouchableOpacity onPress={() => setScreen('signup')}>
          <Text style={tailwind``}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    marginBottom: 20,
  },
  error: {
    marginBottom: 20,
    color: 'red',
  },
})
