// HOME SCREEN

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
     <View>
      <Text  variant="headlineSmall">Today's Habits</Text>
     </View>
     

      {habits.length === 0 ?  <View>
          <Text> No Habits Yet. Add your first Habit!</Text>

        </View> : (
          <ScrollView>
            {habits.map((habits, key)=> (
              <View key={key}>
                <Text>{habits.title}</Text>
                <Text>{habits.description}</Text>
              </View>
            ))}
          </ScrollView>
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
