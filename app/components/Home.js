import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { firestore } from '../../firebase'

export default function Home({ handleNotePress }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, 'notes'),
      (querySnapshot) => {
        const newNotes = []
        querySnapshot.forEach((doc) => {
          const { note, title } = doc.data()
          newNotes.push({ note, title, id: doc.id })
        })
        setNotes(newNotes)
      },
    )

    return () => unsubscribe()
  }, [])

  const onPressNote = (note) => {
    handleNotePress(note)
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <FlatList
        data={notes}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => onPressNote('Note 1')}>
            <View>
              <Text>Note 1</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({})
