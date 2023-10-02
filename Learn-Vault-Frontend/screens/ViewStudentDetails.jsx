import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
//import { printToFileAsync } from 'expo-print';
//import { shareAsync } from 'expo-sharing';
import {
  StyleSheet,
  Alert,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  View,
  Image,
  Table,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ViewStudentDetails({ route, navigation }) {
  //const ViewStudentDetails = ({ route, navigation }) => {

  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    axios
      .get("http://172.28.6.14:8000/student/getAllStudents")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => {
        console.error(e);
        Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
          cancelable: false,
        });
      });
  };

  //update function
  const updateOrder = (id) => {
    Alert.alert("Are you sure to update your profile?", [
      {
        text: "OK",
        onPress: () => {
          axios
            .patch(`http://172.28.6.14:8000/student/updateStudent/${id}`)
            .then((res) => {
              console.log("updated successfully");
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
    ]);
  };

  const deleteOrder = (id) => {
    Alert.alert("Are you sure?", "This will permanently delete your profile!", [
      {
        text: "OK",
        onPress: () => {
          axios
            .delete(`http://172.28.6.14:8000/student/RemoveStudent/${id}`)
            .then((res) => {
              getOrders();
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
    ]);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          textAlign: "center",
          color: "#2727E2",
          marginBottom: "4%",
        }}
      >
        Student Profiles{" "}
      </Text>
      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
        {orders.map((order, index) => (
          <View style={orderStyles.orderCard} key={order + index}>
            <Image
              style={{
                width: 120,
                height: 120,
                marginTop: 30,
                marginLeft: 125,
              }}
              source={require("../assets/5.jpg")}
            />
            <View style={orderStyles.items}>
              <View>
                <Text style={orderStyles.container3}>
                  Full Name : {order.FullName}
                </Text>
                <Text style={orderStyles.container3}>NIC : {order.NIC}</Text>
                <Text style={orderStyles.container3}>
                  Contact : {order.Contact}
                </Text>
                <Text style={orderStyles.container3}>
                  Address : {order.Address}
                </Text>
                <Text style={orderStyles.container3}>
                  Email : {order.Email}
                </Text>
              </View>
            </View>
            <View style={orderStyles.container1}>
              <TouchableOpacity
                style={orderStyles.button}
                onPress={() =>
                  navigation.navigate("UpdateStudentProfile", {
                    //FullName: route.params.FullName,
                    // userRole: route.params.userRole,
                    FullName: order._id,
                  })
                }
                //style={{ ...commonStyles.buttonupdate, width: "30%" }}
              >
                <Text style={orderStyles.buttonText}>Update Profile</Text>
              </TouchableOpacity>

              {/* { backgroundColor: "#5D3FD3", width: 135, height: 45, padding: 10, borderRadius: 30, flexDirection: "row", marginTop: 5 } */}
              {/* {{ textAlign: "center", marginTop: 5, color: "white", fontWeight: "bold" }}  */}
              <TouchableOpacity
                style={orderStyles.button}
                onPress={() => deleteOrder(order._id)}
                //style={{ ...commonStyles.buttondelete, width: "30%" }}
              >
                <Text style={orderStyles.buttonText}>Remove Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <TouchableOpacity
          //style={commonStyles.button22}
          onPress={() => navigation.navigate("CreateJob")}
        >
          <Ionicons name="ios-add-circle-sharp" size={20} color="white">
            <Text
              style={{ color: "white", paddingHorizontal: 1, fontSize: "16" }}
            >
              Add Job
            </Text>
          </Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const orderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 0,
    justifyContent: "space-between",
    padding: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    textAlign: "",
    fontSize: 20,
    color: "Black",
    fontWeight: "bold",
    marginRight: 10,
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 40,
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#5D3FD3",
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 0,
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
    width: "48%",
    height: 50,
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 5,
    fontWeight: "bold",
  },
});
//export default ViewStudentDetails;
