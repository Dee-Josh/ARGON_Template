import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";



export default function StreaksScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text>Habits Streak</Text>
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
