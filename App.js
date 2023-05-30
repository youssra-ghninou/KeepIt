import { StyleSheet, View } from 'react-native'
import Intro from './app/screens/Intro'

export default function App() {
  return (
    <View className='bg-red-600'>
      <Intro />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
