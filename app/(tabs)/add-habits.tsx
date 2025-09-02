import { Text, View, StyleSheet } from "react-native";
import { SegmentedButtons, TextInput, Button } from "react-native-paper";

const FREQUENCIES = ["daily", "weekly", "monthly"]


export default function AddHabitsScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Description"
        mode="outlined"
        style={styles.input}
      />
      <View>
        <SegmentedButtons buttons={FREQUENCIES.map((freq)=> ({
          value: freq,
          label: freq.charAt(0).toUpperCase() + freq.slice(1)
        })} />
      </View>
      <Button mode="contained">
        Add Habit
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({

})
