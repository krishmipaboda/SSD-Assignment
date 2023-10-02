import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView,StyleSheet, Text, Alert, View, TextInput, Image, Button, ImageBackground, data } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { value } from "deprecated-react-native-prop-types";

export default function SelectNewCourse({ navigation }) {
    const [StudentFullName, setStudentFullName] = useState("");
    const [StudentNIC, setStudentNIC] = useState("");
    const [StudentContact, setStudentContact] = useState("");
    const [CourseID, setCourseID] = useState("");
    const [CourseType, setCourseType] = useState("");
    const [DeliveryType, setDeliveryType] = useState("");
    const [Location, setLocation] = useState("");

    const SelectNewCourse = () => {

        const URL = `http://172.28.6.14:8000/selectcourse/selectnewcourse`;
        const payload = {
            StudentFullName,
            StudentNIC,
            StudentContact,
            CourseID,
            CourseType,
            DeliveryType,
            Location,
        };

        //validations for selecting course
        if (StudentFullName == "" || StudentNIC == "" || StudentContact == "" || CourseID == "" || CourseType == "" || DeliveryType == "" || Location == "") {
            alert("Enter all details for creating student account")
            return 0;
        }
        else if (StudentContact.length < 10 || StudentContact.length > 10) {
            alert("Contact cannot be greater than or less than 10 characters")
            return 0;
        }
        else if (CourseID.length < 3 || CourseID.length > 3) {
            alert("Course ID cannot be greater than or less than 3 characters")
            return 0;
        }
        else

            axios
                .post(URL, payload, data)
                .then((res) => {
                    Alert.alert(
                        "Great",
                        "Selected course detials added successfully!!",
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
            <Text style={styles.titulo}>Enter Details for selecting courses</Text>
            <Text style={styles.titulo2}>Thank you for joining us!</Text>
            <ScrollView
                    style={{ display: "flex", flexDirection: "column", width: "100%" }}
                >
            <Text style={styles.titulo1}>Full Name</Text>
            <TextInput
                placeholder="Full_Name"
                style={styles.textInput}
                onChangeText={(e) => setStudentFullName(e)}
            />

            <Text style={styles.titulo1}>Student NIC</Text>
            <TextInput
                placeholder="NIC"
                style={styles.textInput}
                onChangeText={(e) => setStudentNIC(e)}
            />

            <Text style={styles.titulo1}>Contact</Text>
            <TextInput
                placeholder="Contact"
                style={styles.textInput}
                onChangeText={(e) => setStudentContact(e)}
            />

            <Text style={styles.titulo1}>Course ID</Text>
            <TextInput
                placeholder="CourseID"
                style={styles.textInput}
                onChangeText={(e) => setCourseID(e)}
            />

            <Text style={styles.titulo1}>Course Type</Text>
            <TextInput
                placeholder="Weekday / Weekend"
                style={styles.textInput}
                onChangeText={(e) => setCourseType(e)}
            />
            <Text style={styles.titulo1}>Delivery Type</Text>
            <TextInput
                placeholder="Online / Physical"
                style={styles.textInput}
                onChangeText={(e) => setDeliveryType(e)}
            />
            <Text style={styles.titulo1}>Location</Text>
            <TextInput
                placeholder="None / Nugegoda / Gampaha / Kurunegala "
                style={styles.textInput}
                onChangeText={(e) => setLocation(e)}
            />

            <TouchableOpacity style={styles.button} onPress={SelectNewCourse}>
                <Text style={styles.buttonText}>Creat Your Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("StudentHomePage")}>
                <Text style={styles.buttonText}>Back To Home Page</Text>
            </TouchableOpacity>

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
        marginBottom: 5
    },
    titulo1: {
        fontWeight: "bold",
        marginLeft: 12
    },
    titulo2: {
        textAlign: "center",
        fontSize: 20,
        color: "#17202a",
        fontWeight: "italic",
        marginTop: 0,
        marginBottom: 15
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
    },
    button: {

        backgroundColor: "#5D3FD3",
        width: "60%",
        height: 40,
        padding: 10,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 10,
        marginLeft:75
    },
    buttonText: {
        textAlign: "center",
        color: "white",
    },
});
