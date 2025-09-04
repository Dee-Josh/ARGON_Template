// HOME SCREEN

import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";





export default function Index() {

  const fetchHabits = async ()=>{
    // get habits from Database
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={{
          color: "#F5F5F5"
        }}
        variant="titleMedium"
      >
        Welcome to the Home Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#009688',
  }
})


