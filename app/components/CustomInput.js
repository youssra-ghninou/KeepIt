import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-web'

export default function CustomInput() {
  return (
    <View>
      <TextInput placeholder='placeholder'></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {},
})
