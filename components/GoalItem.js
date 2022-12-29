import { Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

const dTap = ()=>{
  alert("Long Press working")
}

GoalItem = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.onDelete.bind(this,props.id)} activeOpacity={0.7} onLongPress={dTap}>
        <Text style={styles.golaText}>{props.text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  golaText: {
    backgroundColor: "#E74522",
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    marginBottom: 5,
  },
});
