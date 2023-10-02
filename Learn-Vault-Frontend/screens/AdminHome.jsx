import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  LeftContent,
} from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function AdminHome({ navigation }) {
  return (
    <View>
      <ScrollView>
        <Card>
          <Card.Title
            title="Welcome Admin"
            subtitle="Manage the work easily"
            left={LeftContent}
            
          />

          <Card.Cover
            source={{
              uri: "https://cdni.iconscout.com/illustration/premium/thumb/user-rating-4118325-3414906.png",
            }}
          />
          <Card.Actions>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}onPress={() => navigation.navigate("AdminManagement")}>Admin Management</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Cover
            source={{
              uri: "https://www.mymusicstaff.com/wp-content/uploads/2015/05/student-management-11.png",
            }}
          />
          <Card.Actions>
            <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("StudentManagement")}>
              <Text style={styles.buttonText}>Student Management</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Cover
            source={{
              uri: "https://assets-global.website-files.com/59d46c848021530001e0117b/5fd7f0d984ec5e3790d412a6_learning-management-system-essentials-hero.png",
            }}
          />
          <Card.Actions>
          <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("AllCourse")}>
              <Text style={styles.buttonText}>Course Management</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Cover
            source={{
              uri: "https://cdni.iconscout.com/illustration/premium/thumb/financial-management-5685840-4744558.png",
            }}
          />
          <Card.Actions>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Finance Management</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
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
    width: "60%",
    height: 40,
    padding: 10,
    borderRadius: 30,
    marginTop: 1,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
