// HOME SCREEN

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Surface, Text, TextInput } from "react-native-paper";
import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";



const habits = [
  {
    title: "Do this Daily",
    description: "Drink 25 million gallons of water.",
    streak_count: 0,
    frequency: "Daily",

  },
  {
    title: "Do this Daily",
    description: "Drink 25 million gallons of water.",
    streak_count: 0,
    frequency: "Daily",

  },
  {
    title: "Do this Daily",
    description: "Drink 25 million gallons of water.",
    streak_count: 0,
    frequency: "Daily",

  },
  {
    title: "Do this Daily",
    description: "Drink 25 million gallons of water.",
    streak_count: 0,
    frequency: "Daily",

  },
  {
    title: "Do this Daily",
    description: "Drink 25 million gallons of water.",
    streak_count: 0,
    frequency: "Daily",

  },
  {
    title: "Do this Daily",
    description: "Drink 25 million gallons of water.",
    streak_count: 0,
    frequency: "Daily",

  },
]


export default function Index() {

  const fetchHabits = async ()=>{
    // get habits from Database
  }

  return (
    <View
      style={styles.container}
    >
     <View style={styles.header}>
      <Text  variant="headlineSmall" style={styles.title}>Today's Habits</Text>
     </View>
     
      <ScrollView showsVerticalScrollIndicator={false}>
        {habits.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}> No Habits Yet. Add your first Habit!</Text>
          </View>) : (
            habits.map((habits, key)=> (
              <Surface key={key}   style={styles.card} elevation={0}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{habits.title}</Text>
                  <Text style={styles.cardDescription}>{habits.description}</Text>
                  <View  style={styles.cardFooter}>
                    <View style={styles.streakBadge}>
                      <MaterialCommunityIcons name="fire" size={18} color={'#ff9800'} />
                      <Text style={styles.streakText}>{habits.streak_count} day streak</Text>
                    </View>
                    <View style={styles.frequencyBadge}>
                      <Text style={styles.frequencyText}>{habits.frequency}</Text>
                    </View>
                  </View>
                </View>
              </Surface>
            ))
          )
        }
      </ScrollView>



    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header:{
    marginBottom: 24,
  },
  title:{
   fontWeight: 'bold'
  },
  card:{
   marginBottom: 18,
   borderRadius: 18,
   backgroundColor: '#f7f7f2',
   shadowColor: '#000',
   shadowOffset: {width: 0, height: 2},
   shadowRadius: 8,
   elevation: 4,
   borderColor: '#0000009f',
   borderWidth: 1
  },
  cardContent:{
    padding: 20,
  },
  cardTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#22223b'
  },
  cardDescription:{
    fontSize: 15,
    marginBottom: 16,
    color: '#6c6c80'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streakBadge:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff3e0',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  streakText :{
    marginLeft: 6,
    color: '#ff9800',
    fontWeight: 'bold',
    fontSize: 14,

  },
  frequencyBadge:{
    alignItems: 'center',
    backgroundColor: '#ede7f6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  frequencyText :{
    color: '#7c4dff',
    fontWeight: 'bold',
    fontSize: 14,

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


  /** backgroundColor: '#009688',**/
