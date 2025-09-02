import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";



export default function AddHabitsScreen() {
  return (
    <View>
      <TextInput
        label="Title"
        mode="outlined"
      />
      <TextInput
        label="Description"
        mode="outlined"
      />
    </View>
  );
}
