import React, {useState} from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask =()=> {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
let itemsCopy = [...taskItems];
itemsCopy.splice(index, 1);
setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
     <View style={styles.taskWrapper} >
      <Text style={styles.title}>
        Today's tasks
      </Text>
   <View style={styles.items}>
   {
     taskItems.map((item, index) => { 
       return ( <TouchableOpacity key={index} onPress={() => completeTask(index)}>
       <Task  text={item} /> 
       </TouchableOpacity>
     )
   })
   }
    
   </View>
     </View>
     <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.keyboard}>
       <TextInput style={styles.input} placeholder={"Write a task"} valuie={task} onChangeText={text => setTask(text)}/>
       <TouchableOpacity onPress={() =>handleAddTask()} >
   <View style={styles.wrapper}>
     <Text style={styles.addText}>+</Text>
   </View>
       </TouchableOpacity>
       
     </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth:1
  },
  items: {
 marginTop: 30,
  },
  keyboard: {
  position: "absolute",
  bottom: 60,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center"
  },
  taskWrapper: {
    paddingTop: 80,
  paddingHorizontal: 20,

  },
  title: {
  fontSize: 24,
  fontWeight: "bold",
  },
  wrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth:1
  }
});
