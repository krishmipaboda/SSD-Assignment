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

  return (
    <View>
      <ScrollView>
        
        <View>
            
          {users?.map((current, index) => {
            return (
                
              <Card key={index}>
                <Text>Name - {current.Fullname}</Text>
                <Text>Email - {current.email}</Text>
                <Text>Admin ID - {current.regCode}</Text>
                <Text>User Type - {current.userRole}</Text>
                
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
});
