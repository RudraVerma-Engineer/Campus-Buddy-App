import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function SignupScreen() {
  const [activeTab, setActiveTab] = useState("Student");
  const [userInfo, setUserInfo] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
  });

  // ✅ Handles both Expo and Native builds
  const redirectUri = AuthSession.makeRedirectUri({
  // scheme: "com.campusbuddy.app",
  // useProxy: Platform.OS !== "android", // Android build uses native URI
  native: "com.anonymous.rnchatapp:/oauthredirect",
});

  // ✅ Setup Google OAuth
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "352485137591-nd54kscoe38ct062dv0gj9vei48jb3qo.apps.googleusercontent.com",
    webClientId:
      "352485137591-odpdkm243uj3l92oq2m8porkv0nkfk31.apps.googleusercontent.com",
    redirectUri,
  });

  // ✅ Handle Google Response
  useEffect(() => {
    if (response?.type === "success") {
      fetchGoogleUser(response.authentication.accessToken);
    }
  }, [response]);

  const fetchGoogleUser = async (token) => {
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await res.json();

      await AsyncStorage.setItem("userData", JSON.stringify(user));
      setUserInfo(user);
      Alert.alert("Success", `Welcome ${user.name}!`);
      console.log("Google User Info:", user);
    } catch (error) {
      console.error("Error fetching Google user info:", error);
      Alert.alert("Error", "Failed to fetch Google user info.");
    }
  };

  // ✅ Manual Sign Up Handler
  const handleSignUp = async () => {
    const { fullName, email, password, confirmPassword, department } = formData;

    if (!fullName || !email || !password || !confirmPassword || !department) {
      return Alert.alert("Error", "Please fill all fields.");
    }
    if (password !== confirmPassword) {
      return Alert.alert("Error", "Passwords do not match!");
    }

    const userData = { fullName, email, role: activeTab, department };

    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      Alert.alert("Success", "Account created successfully!");
      console.log("Saved User Info:", userData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const departments = [
    "Computer Science & Engineering",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
    "Electrical Engineering",
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "#0B1623" }}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="person-add-outline" size={70} color="#61A4FF" />
      </View>

      <Text style={styles.title}>Campus Buddy</Text>
      <Text style={styles.subtitle}>Create a new account</Text>

      {/* Role Tabs */}
      <View style={styles.tabContainer}>
        {["Student", "Faculty"].map((role) => (
          <TouchableOpacity
            key={role}
            style={[styles.tab, activeTab === role && styles.activeTab]}
            onPress={() => setActiveTab(role)}
          >
            <Text
              style={[styles.tabText, activeTab === role && styles.activeTabText]}
            >
              {role === "Faculty" ? "Faculty/Admin" : role}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Input Fields */}
      <View style={styles.inputGroup}>
        <InputField
          icon="person-outline"
          placeholder="Full"
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        />
        <InputField
          icon="mail"
          placeholder="Email address"
          value={formData.email}
          keyboardType="email-address"
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <InputField
          icon="lock-closed-outline"
          placeholder="Create Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
        <InputField
          icon="lock-closed-outline"
          placeholder="Confirm Password"
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(text) =>
            setFormData({ ...formData, confirmPassword: text })
          }
        />

        {/* Department Picker */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.department}
            dropdownIconColor="#fff"
            style={styles.picker}
            onValueChange={(itemValue) =>
              setFormData({ ...formData, department: itemValue })
            }
          >
            <Picker.Item label="Select Department" value="" color="#aaa" />
            {departments.map((dept, index) => (
              <Picker.Item key={index} label={dept} value={dept} color="#000" />
            ))}
          </Picker>
        </View>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Google Signup */}
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => promptAsync()}
        disabled={!request}
      >
        <Ionicons name="logo-google" size={20} />
        <Text style={styles.googleText}>Sign up with Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.loginText}>Login</Text>
      </Text>
    </ScrollView>
  );
}

const InputField = ({ icon, ...props }) => (
  <View style={styles.inputWrapper}>
    <Ionicons name={icon} size={20} color="#aaa" />
    <TextInput style={styles.input} placeholderTextColor="#aaa" {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  iconContainer: { alignItems: "center", marginBottom: 20 },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: { color: "#aaa", textAlign: "center", marginBottom: 25 },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#101B2B",
    borderRadius: 15,
    marginBottom: 20,
  },
  tab: { flex: 1, paddingVertical: 12, borderRadius: 15 },
  tabText: { textAlign: "center", color: "#888", fontWeight: "500" },
  activeTab: { backgroundColor: "#1E5EFF" },
  activeTabText: { color: "#fff" },
  inputGroup: { gap: 15 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#152032",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: { flex: 1, color: "#fff", marginLeft: 8, fontSize: 15 },
  pickerContainer: {
    backgroundColor: "#152032",
    borderRadius: 10,
    overflow: "hidden",
  },
  picker: {
    color: "#fff",
    height: Platform.OS === "ios" ? 180 : 50,
    width: "100%",
  },
  signupButton: {
    backgroundColor: "#1E5EFF",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 30,
  },
  signupText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },
  googleButton: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  googleText: {
    color: "#000",
    fontWeight: "500",
    marginLeft: 8,
    fontSize: 15,
  },
  footerText: {
    textAlign: "center",
    color: "#ccc",
    marginTop: 15,
    fontSize: 14,
  },
  loginText: { color: "#4CAF50", fontWeight: "600" },
});
// import { UserAsyncStorage } from "@/lib/services/async-storage/user.async-storage";
// import { api, setToken } from "@/lib/services/axios";
// import * as AuthSession from "expo-auth-session";
// import * as Google from "expo-auth-session/providers/google";
// import { router } from "expo-router";
// import { useEffect } from "react";
// import { Alert, TouchableOpacity } from "react-native";
// import { useTheme } from "../contexts/theme-context";
// import { AnimatedAntDesign } from "../ui/animated";

// export function GoogleLoginBtn() {
//     const { animatedStyles } = useTheme();
//     const redirectUri = AuthSession.makeRedirectUri({
//         native: "com.anonymous.rnchatapp:/oauthredirect",
//     });

//     const [_, response, promptAsync] = Google.useAuthRequest({
//       androidClientId:"352485137591-nd54kscoe38ct062dv0gj9vei48jb3qo.apps.googleusercontent.com",
//       webClientId:"352485137591-odpdkm243uj3l92oq2m8porkv0nkfk31.apps.googleusercontent.com",
//         redirectUri,
//     });

//     useEffect(() => {
//         registerUser(response);
//     }, [response]);

//     async function registerUser(response) {
//         if (response?.type == "success") {
//             try {
//                 const { authentication } = response;
//                 if (authentication?.idToken) {
//                     const res = await api.post(/api/auth/google, {
//                         idToken: authentication?.idToken
//                     });
//                     if (res?.data) {
//                         await UserAsyncStorage.setCurrentUser(res?.data?.user);
//                         await UserAsyncStorage.setUserToken(res?.data?.token);
//                         setToken(res?.data?.token);
//                         router.replace("/");
//                     }
//                 } else {
//                     Alert.alert("Error", "No token found");
//                 }
//             } catch (error) {
//                 Alert.alert("Error", "Something went wrong");
//             }
//         }
//     }

//     return (
//         <TouchableOpacity
//             onPress={() => promptAsync()}
//         >
//             <AnimatedAntDesign
//                 name="google"
//                 size={32}
//                 style={animatedStyles.textPrimary}
//             />
//         </TouchableOpacity>
//     )
// }