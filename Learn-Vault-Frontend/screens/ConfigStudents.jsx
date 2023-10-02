import { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
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
        .get(`http://172.28.6.14:8000/user/getAllUsers`)
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

  const deleteItem = (id) => {
    axios
      .delete(`http://172.28.6.14:8000/user/deleteUser/${id}`)
      .then((res) => {
        console.log("Deleted Sucessfully");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <View>
      <ScrollView>
        <View>
          {users?.map((current, index) => {
            return (
              <Card key={index}>
                <Text>Name - {current.Fullname}</Text>
                <Text>Email - {current.email}</Text>
                <Text>Reg No - {current.regCode}</Text>
                <Text>User Type - {current.userRole}</Text>

                <TouchableOpacity
                  style={styles.ConfigBtn}
                  onPress={() => updateItem(deleteItem._id)}
                >
                  <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ConfigBtn2}
                  onPress={() => deleteItem(deleteItem._id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
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
  ConfigBtn: {
    backgroundColor: "#6C0BA9",
    width: "40%",
    height: 40,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
  },
  ConfigBtn2: {
    backgroundColor: "black",
    width: "40%",
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
