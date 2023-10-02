import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView,StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import CreateStudentAccount from "./CreateStudentAccount";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const URL = `http://172.28.6.14:8000/student/StudentHomePage`;
    axios
      .post(URL, { email: email, password: pwd })
      .then((res) => {
        alert(res.data.userRole);
        navigation.navigate("Home", {
          userID: res.data.userId,
          userRole: res.data.userRole,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: "#5D3FD3", width: "100%", height: "100%" }}
      >
        <ScrollView
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Image
            style={{
              width: 120,
              height: 120,
              marginTop: 30,
              marginLeft: 150,
              marginBottom: 30,
              alignItems: "center",
            }}
            source={require("../assets/5.jpg")}
          />
          <Text style={styles.titulo}>Welcome To Quality Education</Text>
          <Text style={styles.titulo1}>Student Management</Text>

          <View style={styles.container1}>
            <Image
              style={{ width: 130, height: 150 }}
              source={require("../assets/1.jpg")}
            />
            <Image
              style={{ width: 150, height: 150, marginTop: 60 }}
              source={require("../assets/3.jpg")}
            />
            <Image
              style={{ width: 150, height: 150 }}
              source={require("../assets/2.jpg")}
            />
          </View>
          <View style={styles.container1}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CreateStudentAccount")}
            >
              <Text style={styles.buttonText}>Create Your Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("ViewStudentDetails")}
            >
              <Text style={styles.buttonText}>View Your Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container1}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CourseList")}
            >
              <Text style={styles.buttonText}>View Course Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
               onPress={() => navigation.navigate("SelectNewCourse")}
            >
              <Text style={styles.buttonText}>Select Your Course</Text>
            </TouchableOpacity>
          </View>

          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container1: {
    flex: 0,
    justifyContent: "space-between",
    backgroundColor: "#5D3FD3",
    padding: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titulo: {
    textAlign: "center",
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  titulo1: {
    textAlign: "center",
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 20,
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
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#FBFAF3",
  },
  button: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    height: 50,
    padding: 10,
    borderRadius: 30,
    marginTop: 60,
  },
  buttonText: {
    textAlign: "center",
    color: "#5D3FD3",
    marginTop: 5,
    fontWeight: "bold",
  },
});
