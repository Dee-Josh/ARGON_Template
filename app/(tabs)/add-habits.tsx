import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SegmentedButtons, TextInput, Button } from "react-native-paper";

const FREQUENCIES = ["daily", "weekly", "monthly"]


export default function AddHabitsScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("daily");
  // const

  const handleSubmit = async ()=> {

  }


  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        mode="outlined"
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Description"
        mode="outlined"
        onChangeText={setDescription}
        style={styles.input}
      />
      <View style={styles.frequencyContainer}>
        <SegmentedButtons buttons={FREQUENCIES.map((freq)=> ({
            value: freq,
            label: freq.charAt(0).toUpperCase() + freq.slice(1),
          }))} 
          value = {frequency}
          onValueChange={(value)=>{
            setFrequency(value);
          }}
        />
      </View>
      <Button 
        mode="contained" 
        disabled={!title || !description}
        onPress={handleSubmit}  
      >
        Add Habit
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    marginBottom: 10,
  },
  frequencyContainer: {
    marginBottom: 24,
  },
 })
