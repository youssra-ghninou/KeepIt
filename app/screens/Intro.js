import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'twrnc'
import { AuthContext } from '../context/AuthContext'
const Intro = () => {
  const { logout } = useContext(AuthContext)
  return (
    <>
      <View>
        <Text className='text-red-500'>hello ur logged in</Text>
      </View>
      <View style={tailwind`flex-1 flex items-center`}>
        <Text
          style={tailwind`text-black text-base font-medium`}
          label={'logout'}
          onPress={() => {
            logout()
          }}
        >
          Logout
        </Text>
      </View>
    </>
  )
}

export default Intro
