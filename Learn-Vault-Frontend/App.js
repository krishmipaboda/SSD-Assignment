import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import AdminHome from "./screens/AdminHome";
import AdminManagement from "./screens/AdminManagement";
import StudentManagement from "./screens/StudentManagement";
import AddStudents from "./screens/AddStudents";
import ViewStudents from "./screens/ViewStudents";
import ViewAdmins from "./screens/ViewAdmins";
import AddAdmin from "./screens/AddAdmin";
import ConfigStudents from "./screens/ConfigStudents";
import ConfigAdmin from "./screens/ConfigAdmin";
import AddCourse from "./screens/AddCourse";
import AllCourse from "./screens/AllCourse";
import StudentHomePage from "./screens/StudentHomePage";
import CreateStudentAccount from "./screens/CreateStudentAccount";
import UpdateStudentProfile from "./screens/UpdateStudentProfile";
import SelectCourses from "./screens/SelectCourses";
import ViewStudentDetails from "./screens/ViewStudentDetails";
import SelectNewCourse from "./screens/SelectNewCourse";
import CourseList from "./screens/CourseList";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="AdminManagement" component={AdminManagement} />
        <Stack.Screen name="StudentManagement" component={StudentManagement} />
        <Stack.Screen name="AddStudents" component={AddStudents} />
        <Stack.Screen name="ViewStudents" component={ViewStudents} />
        <Stack.Screen name="ViewAdmins" component={ViewAdmins} />
        <Stack.Screen name="AddAdmin" component={AddAdmin} />
        <Stack.Screen name="ConfigStudents" component={ConfigStudents} />
        <Stack.Screen name="ConfigAdmin" component={ConfigAdmin} />
        <Stack.Screen name="AddCourse" component={AddCourse} />
        <Stack.Screen name="AllCourse" component={AllCourse} />
        <Stack.Screen name="StudentHomePage" component={StudentHomePage} />
        <Stack.Screen
          name="CreateStudentAccount"
          component={CreateStudentAccount}
        />
        <Stack.Screen
          name="UpdateStudentProfile"
          component={UpdateStudentProfile}
        />
        <Stack.Screen name="SelectCourses" component={SelectCourses} />
        <Stack.Screen
          name="ViewStudentDetails"
          component={ViewStudentDetails}
        />
        <Stack.Screen name="SelectNewCourse" component={SelectNewCourse} />
        <Stack.Screen name="CourseList" component={CourseList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
