import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView,StyleSheet, Text, View, TextInput, Image, Button, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Alert } from 'react-native';
import axios from "axios";
export default function SelectCourses({ navigation }) {
 const [StudentFullName, setStudentFullName] = useState("");
 const [StudentNIC, setStudentNIC] = useState("");
 const [StudentContact, setStudentContact] = useState("");
 const [CourseID, setCourseID] = useState("");
 const [CourseType, setCourseType] = useState("");
 const [DeliveryType, setDeliveryType] = useState("");
 const [Location, setLocation] = useState("");

  const SelectCourses = () => {
    const URL = `http://172.28.6.14:8000/selectcourse/studentselectcourse`;
    const payload = {
      StudentFullName,
      StudentNIC,
      StudentContact,
      CourseID,
      CourseType,
      DeliveryType,
      Location,
    };
  
    axios
      .post(URL, payload)
      .then((res) => {
        navigation.navigate("StudentHomePage");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Insert Unsuccessful",
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
        placeholder="Course ID"
        style={styles.textInput}
        onChangeText={(e) => setCourseID(e)}
      />
      <Text style={styles.titulo1}>Course Type</Text>
      <TextInput
        placeholder="Select Course Type"
        style={styles.textInput}
        onChangeText={(e) => setCourseType(e)}
      />
      <Text style={styles.titulo1}>Delivery Type</Text>
      <TextInput
        placeholder="Select Delivery Type"
        style={styles.textInput}
        onChangeText={(e) => setDeliveryType(e)}
      />
      <Text style={styles.titulo1}>Location</Text>
      <TextInput
        placeholder="Select Location"
        style={styles.textInput}
        onChangeText={(e) => setLocation(e)}
      />
      

        <TouchableOpacity style={styles.button} onPress={SelectCourses}>
          <Text style={styles.buttonText}>Submit Details</Text>
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
    marginBottom: 0
  },
  titulo1: {
    marginLeft: 12
  },
  titulo2: {
        textAlign: "center",
        fontSize: 20,
        color: "#17202a",
        fontWeight: "italic",
        marginTop: 0,
        marginBottom: 5
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
    marginTop: 10,
    marginLeft: 10
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});







// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, TextInput, Image, Button, ImageBackground} from "react-native";
// import { TouchableOpacity } from "react-native";
// import { Alert } from 'react-native';
// import axios from "axios";

// export default function SelectCourses({navigation}) {
//   const [Student_Full_Name, setStudent_Full_Name] = useState("");
//   const [Student_NIC, setStudent_NIC] = useState("");
//   const [Student_Contact, setStudent_Contact] = useState("");
//   const [Course_ID, setCourse_ID] = useState("");
//   const [Course_Type, setCourse_Type] = useState("");
//   const [Delivery_Type, setDelivery_Type] = useState("");
//   const [Location, setLocation] = useState("");
  
//   const SelectCourses = () => {
//     const URL = `http://192.168.1.6:8000/selectcourse/studentselectcourse`;
//     const payload = {
//         Student_Full_Name,
//         Student_NIC,
//         Student_Contact,
//         Course_ID,
//         Course_Type,
//         Delivery_Type,
//         Location,
//     };
//     axios
//       .post(URL, payload)
//       .then((res) => {
//         navigation.navigate("Login");
//       })
//       .catch((error) => {
//         console.log(error);
//         Alert.alert(
//           "Error",
//           "Registration Unsuccessful",
//           [{ text: "Check Again" }],
//           { cancelable: false }
//         );
//       });
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Enter Details for selecting courses</Text>
//       <Text style={styles.titulo2}>Thank you for joining us!</Text>
      
//       <Text style={styles.titulo1}>Full Name</Text>
//       <TextInput
//         placeholder="Full_Name"
//         style={styles.textInput}
//         onChangeText={(e) => setStudent_Full_Name(e)}
//       />

//       <Text style={styles.titulo1}>NIC</Text>
//       <TextInput
//         placeholder="NIC"
//         style={styles.textInput}
//         onChangeText={(e) => setStudent_NIC(e)}
//       />
    
//     <Text style={styles.titulo1}>Contact</Text>
//       <TextInput
//         placeholder="Contact"
//         style={styles.textInput}
//         onChangeText={(e) => setStudent_Contact(e)}
//         secureTextEntry={true}
//       />
//       <Text style={styles.titulo1}>Course_ID</Text>
//       <TextInput
//         placeholder="Course ID"
//         style={styles.textInput}
//         onChangeText={(e) => setCourse_ID(e)}
//       />
//       <Text style={styles.titulo1}>Course_Type</Text>
//       <TextInput
//         placeholder="Course Type"
//         style={styles.textInput}
//         onChangeText={(e) => setCourse_Type(e)}
//       />
//       <Text style={styles.titulo1}>Delivery_Type</Text>
//       <TextInput
//         placeholder="Delivery Type"
//         style={styles.textInput}
//         onChangeText={(e) => setDelivery_Type(e)}
//       />
//       <Text style={styles.titulo1}>Location</Text>
//       <TextInput
//         placeholder="Location"
//         style={styles.textInput}
//         onChangeText={(e) => setLocation(e)}
//       />
      
        
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("StudentHomePage")}>
//         <Text style={styles.buttonText}>Back To Courses</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={SelectCourses}>
//         <Text style={styles.buttonText}>Submit Details</Text>
//       </TouchableOpacity>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   titulo: {
//     textAlign: "center",
//     fontSize: 30,
//     color: "#5D3FD3",
//     fontWeight: "bold",
//     marginTop: 0,
//     marginBottom: 5
//   },
//   titulo2: {
//     textAlign: "center",
//     fontSize: 20,
//     color: "#17202a",
//     fontWeight: "italic",
//     marginTop: 0,
//     marginBottom: 5
//   },
//   titulo1: {
//     marginLeft: 12,
    
//   },
//   subtitle: {
//     fontSize: 15,
//     color: "gray",
//     marginTop: 20,
//   },
//   textInput: {
//     padding: 10,
//     paddingStart: 30,
//     width: "80%",
//     height: 50,
//     marginTop: 15,
//     borderRadius: 30,
//     backgroundColor: "#FBFAF3",
//   },
//   button: {
//     backgroundColor: "#5D3FD3",
//     width: "60%",
//     height: 40,
//     padding: 10,
//     borderRadius: 30,
//     marginTop: 10,
//     marginLeft: 10
//   },
//   buttonText: {
//     textAlign: "center",
//     color: "white",
//     fontWeight: "bold"

//   },
// });
