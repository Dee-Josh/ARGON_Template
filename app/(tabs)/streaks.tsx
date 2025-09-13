import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, TextInput } from "react-native-paper";



export default function StreaksScreen() {
    const today = new Date().toDateString();

  const [habits, setHabits] = useState([
    {
      title: "Do this Once",
      description: "Drink 25 million gallons of water.",
      streak_count: 0,
      frequency: "Daily",
      date_completed: "",
      id: 0,
      idd: "hfffhh",
    },
    {
      title: "Do this Twice",
      description: "Drink 25 million gallons of water.",
      streak_count: 1,
      frequency: "Daily",
      // date_completed: "",
      date_completed: today,
      id: 1,
      idd: "hfhfhfh",
    },
    {
      title: "Do this Thrice",
      description: "Drink 25 million gallons of water.",
      streak_count: 0,
      frequency: "Daily",
      date_completed: "",
      id: 2,
      idd: "hfhfhfffh",
    },
    {
      title: "Do this Four-ice",
      description: "Drink 25 million gallons of water.",
      streak_count: 0,
      frequency: "Daily",
      date_completed: "",
      id: 3,
      idd: "hfhfhfjfjh",
    },
    {
      title: "Do this Five-ice",
      description: "Drink 25 million gallons of water.",
      streak_count: 0,
      frequency: "Daily",
      date_completed: "",
      id: 4,
      idd: "hfhfhjkkffh",
    },
    {
      title: "Do this Six-ice",
      description: "Drink 25 million gallons of water.",
      streak_count: 0,
      frequency: "Daily",
      date_completed: "",
      id: 5,
      idd: "kfkf",
    },
  ])

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
