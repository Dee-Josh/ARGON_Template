import { View, StyleSheet } from "react-native";
import { Card, Text, TextInput } from "react-native-paper";



export default function StreaksScreen() {

  // const habits = [0, 1, 2, 3];
  const habits = [];
  const rankedHabits = [
    {
      habit: "",
      streak: "",
      bestStreak: "",
      total: 0,
    },
    {
      habit: "",
      streak: "",
      bestStreak: "",
      total: 0,
    },
    {
      habit: "",
      streak: "",
      bestStreak: "",
      total: 0,
    },
    {
      habit: "",
      streak: "",
      bestStreak: "",
      total: 0,
    },
  ];


  return (
    <View
      style={styles.container}
    >
      <Text>Habits Streak</Text>
      {
      habits.length === 0 ? (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateText}> No Habits Yet. Add your first Habit!</Text>
      </View>) : (
        rankedHabits.map(({habit, streak, bestStreak, total}, key)=>(
          <Card key={key}>
            <Card.Content>
              <Text>{habit.title}</Text>
              <Text>{habit.description}</Text>
              <View>
                <View>
                  <Text>🔥 {streak}</Text>
                  <Text>Current</Text>
                </View>
                <View>
                  <Text>🏆 {bestStreak}</Text>
                  <Text>Best</Text>
                </View>
                <View>
                  <Text>✅ {total}</Text>
                  <Text>Current</Text>
                </View>
                
              </View>
            </Card.Content>
          </Card>
        ))
      )
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
   emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
   color: '#666',
  },
})
