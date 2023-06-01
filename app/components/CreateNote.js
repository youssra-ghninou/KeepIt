import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { db } from '../../firebase'

export default function CreateNote(props) {
  const [Notes, setNotes] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Notes !== '') {
      await addDoc(collection(db, 'notes'), {
        Notes,
        completed: false,
      })
      setNotes('')
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='What do you want to do?'
        value={Notes}
        onChangeText={setNotes}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
