import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function Login({ setScreen }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        setError('Your email or password was incorrect')
      } else if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists')
      } else {
        setError('There was a problem with your request')
      }
    }
  }
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text style={styles.header}>Login</Text>
        <TouchableOpacity onPress={() => setScreen('signup')}>
          <Text style={styles.link}>Create an account</Text>
        </TouchableOpacity>
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    marginBottom: 20,
  },
})
