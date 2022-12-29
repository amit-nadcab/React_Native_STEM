import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoal = (goal) => {
    setGoalList((currentGoal) => [...currentGoal,{text: goal, id: Math.random().toString()}]);
  };

  const deleteGoal = (id) => {
    // setGoalList((currentGoal)=> {
    //   return currentGoal.filter((goal)=>goal.id != id)
    // })
    console.log("delete",id);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData, index) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoal} />;
          }}
          keyExtractor={(itemData) => {
            return itemData.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
