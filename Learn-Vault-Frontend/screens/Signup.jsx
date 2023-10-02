import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
export default function Signup({navigation}) {
  const [userRole, setUserRole] = useState("User");
  const [Fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [regCode, setRegCode] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    const URL = `http://172.28.6.14:8000/user/signup`;
    const payload = {
      Fullname,
      email,
      regCode,
      password,
      userRole,
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
      <Text style={styles.titulo}>Hello Welcome</Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("../assets/logo.png")}
      />
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        onChangeText={(e) => setFullname(e)}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Registration Code"
        style={styles.textInput}
        onChangeText={(e) => setRegCode(e)}
      />
      <TouchableOpacity style={styles.button} onPress={registerUser}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Have an account ?</Text>
      <TouchableOpacity
        style={{ color: "#5D3FD3" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Login</Text>
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
