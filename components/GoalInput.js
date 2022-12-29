import { StyleSheet, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  const golaInputHandler = (e) => {
    setGoal(e);
  };

  const handleAddGoal = () => {
    if (goal == "") {
      alert("Enter Goal");
    } else {
      props.onAddGoal(goal);
      setGoal("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter goal"
        style={styles.textInput}
        value={goal}
        onChangeText={golaInputHandler}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});
