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

export default function AdminHome({navigation}) {
  return (
    <View>
      <ScrollView>
        <Card>
          <Card.Title
            title="Welcome Admin"
            subtitle="Manage the Admins Here"
            left={LeftContent}
            
          />

          <Card.Cover
            source={{
              uri: "https://cdni.iconscout.com/illustration/premium/thumb/admin-panel-4439228-3728455.png",
            }}
          />
          <Card.Actions>
          <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("ViewAdmins")}>
              <Text style={styles.buttonText}>View Admins</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Cover
            source={{
              uri: "https://cdni.iconscout.com/illustration/premium/thumb/admin-lady-managing-online-data-transfer-and-security-2112384-1782204.png",
            }}
          />
          <Card.Actions>
            <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("AddAdmin")}>
              <Text style={styles.buttonText}>Add Admins</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Cover
            source={{
              uri: "https://cdni.iconscout.com/illustration/premium/thumb/admin-services-4500540-3804451.png",
            }}
          />
          <Card.Actions>
          <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("ConfigAdmin")}>
              <Text style={styles.buttonText}>Edit/Remove Admins</Text>
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
