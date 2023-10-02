import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { Alert } from 'react-native';
import axios from "axios";
export default function AddCourse({navigation}) {

  const [coureId, setcoureId] = useState("");
  const [courseTitle, setcourseTitle] = useState("");
  const [duration, setduration] = useState("");
  const [coureseMedium, setcoureseMedium] = useState("");

  const AddCourse = () => {
    const URL = `http://172.28.6.14:8000/course/createCourses`;
    const payload = {
      coureId,
      courseTitle,
      duration,
      coureseMedium,
      
    };
    axios
      .post(URL, payload)
      .then((res) => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Registration Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Add Courses</Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("../assets/addcourse.png")}
      />
      <TextInput
        placeholder="Course ID"
        style={styles.textInput}
        onChangeText={(e) => setcoureId(e)}
      />
      <TextInput
        placeholder="Course Title"
        style={styles.textInput}
        onChangeText={(e) => setcourseTitle(e)}
      />
      <TextInput
        placeholder="Medium"
        style={styles.textInput}
        onChangeText={(e) => setcoureseMedium(e)}
      
      />
      <TextInput
        placeholder="Course Duration"
        style={styles.textInput}
        onChangeText={(e) => setduration(e)}
      />
      <TouchableOpacity style={styles.button} onPress={AddCourse}>
        <Text style={styles.buttonText}>Add Course </Text>
      </TouchableOpacity>
     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    color: "#34434D",
    fontWeight: "bold",
    marginBottom: 80,
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
    marginTop: 20,
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: "#FBFAF3",
  },
  button: {
    backgroundColor: "#5D3FD3",
    width: "30%",
    height: 40,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
