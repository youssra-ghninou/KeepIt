import React, { useContext, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import tailwind from 'twrnc'
import { AuthContext } from '../context/AuthContext'

export default function LoginScreen() {
  const { login, logout } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <View style={tailwind`flex-1 items-center justify-center bg-slate-50`}>
        <View style={tailwind`p-8 w-full max-w-sm`}>
          <Text style={tailwind`text-5xl font-bold mb-6 text-slate-900`}>
            Login
          </Text>

          <Text
            style={tailwind`text-5xl bg-red-500 text-black font-bold mb-6 text-slate-900`}
          ></Text>
          <TextInput
            style={tailwind`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
            placeholderTextColor='#000'
            placeholder='Enter email address'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={tailwind`w-full bg-white border border-slate-200 rounded-md h-12 px-4`}
            placeholderTextColor='#000'
            placeholder='Enter password'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View
            style={tailwind`flex flex-row justify-between items-center my-8`}
          >
            <View style={tailwind`flex-row items-center`}>
              <Pressable
                style={tailwind`bg-white border border-slate-200 h-6 w-6 rounded-sm mr-2 flex items-center justify-center`}
              >
                {/* selected state */}
                <View style={tailwind`bg-green-400 w-4 h-4 rounded-sm`} />
              </Pressable>
              <Text style={tailwind`text-slate-900`}>Remember me</Text>
            </View>
            <Pressable>
              <Text style={tailwind`text-blue-400 font-bold`}>
                Reset password
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={tailwind`h-12 bg-purple-500 rounded-md flex flex-row justify-center items-center px-6`}
          >
            <View style={tailwind`flex-1 flex items-center`}>
              <Text
                style={tailwind`text-white text-base font-medium`}
                label={'login'}
                onPress={() => {
                  login()
                }}
              >
                Login
              </Text>
            </View>
            <View style={tailwind`flex-1 flex items-center`}>
              <Text
                style={tailwind`text-white text-base font-medium`}
                label={'login'}
                onPress={() => {
                  logout()
                }}
              >
                Register
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  )
}
