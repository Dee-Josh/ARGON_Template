// HOME SCREEN

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text, TextInput } from "react-native-paper";



export const [habits, setHabit] = useState([
  {

  }
]);


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
     

      {habits.length === 0 ? ( 
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateCard}> No Habits Yet. Add your first Habit!</Text>
        </View>) : (
          habits.map((habits, key)=> (
            <ScrollView key={key}  style={styles.cardContent}>
              <Text style={styles.cardTitle}>{habits.title}</Text>
              <Text style={styles.cardDescription}>{habits.description}</Text>
              <View  style={styles.cardFooter}>
                <View style={styles.streakBadge}>
                  <MaterialCommunityIcons name="fire" size={18} color={'#ff9800'} />
                  <Text style={styles.streakText}>{habits.streak_count} day streak</Text>
                </View>
                <View style={styles.frequencyBadge}>
                  <Text>{habits.frequncy.ChartAt(0).toUpperCase + habits.frequncy.slice(1)}</Text>
                </View>
              </View>
            </ScrollView>
          ))
        )
      }



    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
  }
})


  /** backgroundColor: '#009688',**/
