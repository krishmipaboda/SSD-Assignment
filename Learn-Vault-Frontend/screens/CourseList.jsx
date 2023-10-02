import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";

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
            <View style={{ backgroundColor: '#FFFFFF', width: "100%", height: "100%" }}>

                <Text style={styles.titulo}>Select Courses in Quality Education</Text>
                <Text style={styles.titulo2}>...Click the course name for selecting...</Text>
                <ScrollView
                    style={{ display: "flex", flexDirection: "column", width: "100%" }}
                >
                    <View style={styles.container1}>
                        <Text style={styles.titulo3}>C01</Text>
                        <Text style={styles.titulo3}>C02</Text>
                    </View>
                    <View style={styles.container1}>
                        <Image style={{ width: 130, height: 150, marginLeft: 35 }}
                            source={require("../assets/7.jpg")} />

                        <Image style={{ width: 150, height: 150, marginRight: 35 }}
                            source={require("../assets/10.jpg")} />
                    </View>
                    <View style={styles.container1}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectNewCourse")}>
                            <Text style={styles.buttonText}>Java Programming</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectNewCourse")}>
                            <Text style={styles.buttonText}>Python</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container1}>
                        <Text style={styles.titulo3}>C03</Text>
                        <Text style={styles.titulo3}>C04</Text>
                    </View>
                    <View style={styles.container1}>
                        <Image style={{ width: 130, height: 150, marginLeft: 35 }}
                            source={require("../assets/8.png")} />
                        <Image style={{ width: 150, height: 150, marginRight: 35 }}
                            source={require("../assets/11.png")} />
                    </View>


                    <View style={styles.container1}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectNewCourse")}>
                            <Text style={styles.buttonText}>C Programming</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectNewCourse")}>
                            <Text style={styles.buttonText}>C++ Programming</Text>
                        </TouchableOpacity></View>
                        <View style={styles.container1}>
                        <Text style={styles.titulo3}>C05</Text>
                        <Text style={styles.titulo3}>C06</Text>
                    </View>
                
                    <View style={styles.container1}>
                        <Image style={{ width: 130, height: 150, marginLeft: 35 }}
                            source={require("../assets/12.png")} />
                        <Image style={{ width: 150, height: 150, marginRight: 35 }}
                            source={require("../assets/14.jpg")} />
                    </View>
                    

                    <View style={styles.container1}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectNewCourse")}>
                            <Text style={styles.buttonText}>English Spoken</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectNewCourse")}>
                            <Text style={styles.buttonText}>Graphic Design</Text>
                        </TouchableOpacity></View>
                        
                        <View style={styles.container1}>
                        <Text style={styles.titulo3}>C05</Text>
                        <Text style={styles.titulo3}>C06</Text>
                    </View>
                    <View style={styles.container1}>
                        <Image style={{ width: 130, height: 150, marginLeft: 35 }}
                            source={require("../assets/16.png")} />
                        <Image style={{ width: 150, height: 150, marginRight: 35 }}
                            source={require("../assets/17.jpg")} />
                    </View>
                    

                    <View style={styles.container1}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectNewCourse")}>
                            <Text style={styles.buttonText}>Microsoft Azure</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectNewCourse")}>
                            <Text style={styles.buttonText}>Diploma in ICT</Text>
                        </TouchableOpacity></View>

                        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("StudentHomePage")}>
          <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Back To Home Page</Text>
        </TouchableOpacity>
                </ScrollView>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row'
    },
    container1: {
        flex: 0,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titulo: {
        textAlign: "center",
        fontSize: 28,
        color: "#5D3FD3",
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
    titulo2: {
        textAlign: "center",
        fontSize: 20,
        color: "#5D3FD3",
        fontWeight: "italic",
        marginTop: 0,
        marginBottom: 10
    },
    titulo3: {
        textAlign: "center",
        fontSize: 25,
        color: "#17202a",
        fontWeight: "bold",
        marginTop: 10,
        marginLeft:80,
        marginRight:80,
        marginBottom: 5
    },
    button1: {
        backgroundColor: "#5D3FD3",
        width: "60%",
        height: 40,
        padding: 10,
        borderRadius: 30,
        marginTop: 20,
        marginLeft: 80,
        marginBottom:30
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
        fontSize: 20,
        textAlign: "center",
        color: "#5D3FD3",
        marginTop: 2,
        marginBottom: 5,
        fontWeight: "bold"
    },
});
