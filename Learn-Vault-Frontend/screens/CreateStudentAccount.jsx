import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView,StyleSheet, Text, Alert, View, TextInput, Image, Button, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
//import CheckBox from 'react-native-check-box';
import axios from "axios";
export default function CreateStudentAccount({ navigation }) {
  const [FullName, setFullName] = useState("");
  const [NIC, setNIC] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");

  //create studet profile
  const CreateStudentAccount = () => {
    const URL = `http://172.28.6.14:8000/student/createStudents`;
    const payload = {
      FullName,
      NIC,
      Contact,
      Address,
      Email,
    };

    //validations for creating student profile
    if (FullName == "" || NIC == "" || Contact == "" || Address == "" || Email == "") {
      alert("Enter all details for creating student account")
      return 0;
    }
    else if (Contact.length < 10 || Contact.length > 10) {
      alert("Contact cannot be greater than or less than 10 characters")
      return 0;
    }
    else

      axios
        .post(URL, payload)
        .then((res) => {
          Alert.alert(
            "Great",
            "Your Student Profile created successfully!!",
            [
              {
                text: "OK",
                onPress: () =>
                  navigation.navigate("StudentHomePage", {
                  }),
              },
            ],
            { cancelable: false }
          );
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(
            "Error",
            "Student Account Created Unsuccessful",
            [{ text: "Check Again" }],
            { cancelable: false }
          );
        });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Create a Student Profile in Quality Education</Text>

      <ScrollView
                    style={{ display: "flex", flexDirection: "column", width: "100%" }}
                >
                  
      <Text style={styles.titulo1}>Full Name</Text>
      <TextInput
        placeholder="Full_Name"
        style={styles.textInput}
        onChangeText={(e) => setFullName(e)}
      />

      <Text style={styles.titulo1}>Student NIC</Text>
      <TextInput
        placeholder="NIC"
        style={styles.textInput}
        onChangeText={(e) => setNIC(e)}
      />

      <Text style={styles.titulo1}>Contact</Text>
      <TextInput
        placeholder="Contact"
        style={styles.textInput}
        onChangeText={(e) => setContact(e)}
      />

      <Text style={styles.titulo1}>Address</Text>
      <TextInput
        placeholder="Address"
        style={styles.textInput}
        onChangeText={(e) => setAddress(e)}
      />
      <Text style={styles.titulo1}>Email</Text>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        onChangeText={(e) => setEmail(e)}
      />
      {/* <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"CheckBox"}
/> */}
      <ImageBackground
        style={{ width: 415, height: 200, marginTop: 20 }}
        source={require("../assets/4.jpg")}>

        <TouchableOpacity style={styles.button} onPress={CreateStudentAccount}>
          <Text style={styles.buttonText}>Creat Your Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("StudentHomePage")}>
          <Text style={styles.buttonText}>Back To Home Page</Text>
        </TouchableOpacity>
      </ImageBackground>

      <StatusBar style="auto" />
      </ScrollView>
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
    textAlign: "center",
    fontSize: 30,
    color: "#5D3FD3",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 20
  },
  titulo1: {
    fontWeight: "bold",
    marginLeft: 12
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
    marginTop: 20,
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "100%",
    height: 50,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: "#ebedef"
    //backgroundColor: "#FBFAF3",
  },
  button: {
    backgroundColor: "#5D3FD3",
    width: "60%",
    height: 40,
    padding: 10,
    borderRadius: 30,
    marginTop: 40,
    marginLeft: 10
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
