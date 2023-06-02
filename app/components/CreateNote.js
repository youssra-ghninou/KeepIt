import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { firestore } from '../../firebase'

import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function CreateNote() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const handleAdd = async () => {
    try {
      const docRef = await addDoc(collection(firestore, 'notes'), {
        title,
        note,
      })
      setTitle('')
      setNote('')
      Keyboard.dismiss()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Title'
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='note'
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Create Note</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
