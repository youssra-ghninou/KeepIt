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
      <Text
        style={tailwind`w-[54px] height-[13px] left-[190px] top-[361px] font-normal text-[14px] text-right`}
      >
        NOTE-IT
      </Text>
      <Text
        style={tailwind` left-[146px]  text-[#7D91FA] top-[379px] font-normal text-[24px] text-center `}
      >
        Stay Centered
      </Text>

      <View style={tailwind`flex flex-col gap-4`}>
        {error && <Text style={styles.error}>{error}</Text>}
        <Text
          style={tailwind`left-[190px] top-[361px] font-normal text-[14px]`}
        >
          Email
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          placeholder='Enter email address'
          autoCapitalize='none'
          placeholderTextColor='#aaa'
          style={tailwind`bg-[#FFFFFF] shadow-xl pl-2 rounded-[7px] w-[317px] h-[40px]`}
        />
        <Text
          style={tailwind` left-[190px] top-[361px] font-normal text-[14px] `}
        >
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder='Enter password'
          autoCapitalize='none'
          placeholderTextColor='#aaa'
          style={tailwind`bg-[#FFFFFF] shadow-xl pl-2 rounded-[7px] w-[317px] h-[40px]`}
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
