import { useContext, useEffect, useState } from "react";
import { Alert } from 'react-native';
import axios from "axios";
import {
  View,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, Card } from "@rneui/themed";

const SupplierList = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const getall = async () => {
    try {
      await axios
        .get(`http://172.28.6.14:8000/course/getAllCourses`)
        .then((res) => {
          if (res.status === 200) {
            console.log(res?.data);
            setUsers(res?.data);
          }
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    getall();
  }, []);

  return (
    <View>
      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("AddCourse")}>
        <Text style={styles.buttonText}>Add Courses</Text>
      </TouchableOpacity>
      <ScrollView>
        
        <View>
            
          {users?.map((current, index) => {
            return (
                
              <Card key={index}>
                <Text>Course ID - {current.coureId}</Text>
                <Text>Course - {current.courseTitle}</Text>
                <Text>Duration ID - {current.duration}</Text>
                <Text>Language - {current.coureseMedium}</Text>
                
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SupplierList;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  logoutBtn: {
    position: "absolute",
    right: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#5D3FD3",
    width: "30%",
    height: 40,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    marginLeft:270,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
