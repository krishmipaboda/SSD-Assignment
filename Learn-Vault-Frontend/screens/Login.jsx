import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const URL = `http://172.28.6.14:8000/user/signin`;
    axios
      .post(URL, { email: email, password: pwd })
      .then((res) => {
        // alert("Welcome User");
        console.log(res.data.userRole);
        if (res.data.userRole === "User") {
          console.log(res.data.userRole);
          navigation.navigate("StudentHomePage", {
            userID: res.data.userId,
            userRole: res.data.userRole,
          });
        } else if (res.data.userRole === "Admin") {
          navigation.navigate("AdminHome", {
            userID: res.data.userId,
            userRole: res.data.userRole,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Invalid Credentials");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Welcome Back</Text>
      <Image
        style={{ width: 250, height: 250 }}
        source={require("../assets/logo.png")}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        onChangeText={(e) => setPwd(e)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Don't have an account ?</Text>
      <TouchableOpacity
        style={{ color: "#5D3FD3" }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text>Signup</Text>
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
    fontSize: 50,
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
    marginTop: 20,
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
