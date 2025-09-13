import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";



export default function StreaksScreen() {

  const habits = [0, 1, 2, 3];


  return (
    <View
      style={styles.container}
    >
      <Text>Habits Streak</Text>
      {
      habits.length === 0 ? (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateText}> No Habits Yet. Add your first Habit!</Text>
      </View>) : ()
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
})
