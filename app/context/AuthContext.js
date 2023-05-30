import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)
  const login = () => {
    setUserToken('youss')
    AsyncStorage.setItem('userToken', 'youss')
  }
  const logout = () => {
    setUserToken(null)
    AsyncStorage.removeItem('userToken')
  }
  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem('userToken')
      setUserToken(userToken)
      setIsLoading(false)
    } catch (e) {
      console.log(`isLoggedIn: ${e}`)
    }
  }

  useEffect(() => {
    isLoggedIn()
  })
  return (
    <>
      <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
