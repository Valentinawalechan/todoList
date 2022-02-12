import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "./config/colors";
import {MaterialCommunityIcons } from "@expo/vector-icons"

const Task = ({text}) => {

    return (
        <View style={styles.item}>
        <View style={styles.itemLeft}>
        
           <View style={styles.square}> 
          
          </View>
          <Text style={styles.text}>{text}</Text>
        </View>
         <View>
    <MaterialCommunityIcons name="trash-can" size={30} color={colors.medium} />
    </View>
        </View>
    )
    }

const styles =StyleSheet.create ({
circular: {
 width: 12,
 height: 12,
 borderColor: colors.danger,
 borderWidth: 2,
 borderRadius: 5,
},
item:{
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
},
itemLeft: {
 flexDirection: "row",
 alignItems: "center",
 flexWrap: "wrap"
},
square:{
width: 24,
height: 24,
backgroundColor: colors.secondary,
opacity: 0.4,
borderRadius: 5,
marginRight: 15,
},
text:{
maxWidth: "80%",

}
})

export default Task
    
