import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(goalText) {
    setEnteredGoalText(goalText);
  }
  function addGoalHandler(event) {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#5e0acc" title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button color="#f31282" title="Cancel" onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#cccccc",
  },
  image: {
    width: 100,
    height: 100,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    width: "90%",
    padding: 16,
    borderRadius: 6,
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
