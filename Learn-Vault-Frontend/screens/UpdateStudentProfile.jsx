import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";

const UpdateStudentProfile = ({ route, navigation }) => {
  const [FullName, setFullName] = useState("");
  const [NIC, setNIC] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://172.28.6.14:8000/student/getStudent/${route.params.FullName}`
      )
      .then((res) => {
        setFullName(res.data.FullName);
        setNIC(res.data.NIC);
        setContact(res.data.Contact);
        setAddress(res.data.Address);
        setEmail(res.data.Email);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const UpdateStudentProfile = () => {
    const URL = `http://172.28.6.14:8000/student/updateStudent/${route.params.FullName}`;
    const payload = {
      FullName: FullName,
      NIC: NIC,
      Contact: Contact,
      Address: Address,
      Email: Email,
    };

    //validations for creating student profile
    if (
      FullName == "" ||
      NIC == "" ||
      Contact == "" ||
      Address == "" ||
      Email == ""
    ) {
      alert("Enter all details for updating");
      return 0;
    } else if (Contact.length < 10 || Contact.length > 10) {
      alert("Contact cannot be greater than or less than 10 characters");
      return 0;
    } else
      axios
        .patch(URL, payload)
        .then((res) => {
          Alert.alert(
            "Student Profile is Updated",
            "Your Details updated successfully!!",
            [
              {
                text: "OK",
                onPress: () =>
                  navigation.navigate("ViewStudentDetails", {
                    //FullName: route.params.FullName,
                    //userRole: route.params.userRole,
                  }),
              },
            ],
            { cancelable: false }
          );
        })
        .catch((error) => {
          console.error(error);
          Alert.alert(
            "Error",
            "Inserting Unsuccessful",
            [{ text: "Check Again" }],
            { cancelable: false }
          );
        });
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "600",
          textAlign: "center",
          color: "#2727E2",
          marginVertical: 20,
          marginBottom: 10,
        }}
      >
        Update Student Profile{" "}
      </Text>

      <ScrollView>
        <View>
          <Image
            style={{ width: 120, height: 120, marginTop: 10, marginLeft: 140 }}
            source={require("../assets/6.png")}
          />
          <View style={styles.container2}>
            <Text style={styles.titul2}> Full Name :- </Text>
            <TextInput
              value={FullName}
              onChange={(e) => setFullName(e.nativeEvent.text)}
              style={styles.textView}
            />

            <Text style={styles.titul2}> NIC :- </Text>
            <TextInput
              value={NIC}
              onChange={(e) => setNIC(e.nativeEvent.text)}
              style={styles.textView}
            />

            <Text style={styles.titul2}> Contact :- </Text>
            <TextInput
              value={Contact}
              onChange={(e) => setContact(e.nativeEvent.text)}
              style={styles.textView}
            />

            <Text style={styles.titul2}> Address :-</Text>
            <TextInput
              value={Address}
              onChange={(e) => setAddress(e.nativeEvent.text)}
              style={styles.textView}
            />

            <Text style={styles.titul2}> Email :-</Text>
            <TextInput
              value={Email}
              onChange={(e) => setEmail(e.nativeEvent.text)}
              style={styles.textView}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => UpdateStudentProfile()}
          style={styles.button}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Update Student Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("StudentHomePage")}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Back To Home Page
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titul2: {
    textAlign: "left",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft: 55,
    marginTop: 0,
    marginBottom: 20,
  },
  container2: {
    backgroundColor: "#ccd1d1",
  },
  textView: {
    textAlign: "right",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginRight: 55,
    marginTop: 0,
    marginBottom: 20,
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#5D3FD3",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 20,
  },
  titulo1: {
    marginLeft: 12,
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
    width: "60%",
    height: 40,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 80,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});

export default UpdateStudentProfile;
