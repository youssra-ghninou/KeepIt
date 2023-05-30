import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import tailwind from 'twrnc'
import { AuthContext } from '../context/AuthContext'
import Intro from '../screens/Intro'
import LoginScreen from '../screens/LoginScreen'

export default function Layout() {
  const { isLoading, userToken } = useContext(AuthContext)
  console.log(isLoading)
  if (isLoading) {
    return (
      <View style={tailwind`flex:1 w-full max-w-sm`}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  } else {
    return <>{userToken !== null ? <Intro /> : <LoginScreen />}</>
  }
}

const styles = StyleSheet.create({})
