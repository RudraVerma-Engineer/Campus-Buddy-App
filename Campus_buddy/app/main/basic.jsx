import { Link, useRouter } from "expo-router";
import { ArrowLeftIcon, ListIcon } from "phosphor-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Structure from "../../comp/structure";
import { SafeAreaView } from "react-native-safe-area-context";
export default function BasicHomePage() {
  const router = useRouter();
  const [openHandle, setOpenHandle] = useState(false);

  function openHandler() {
    setOpenHandle((prev) => !prev);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* Header Section */}
        <View style={styles.logoView}>
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeftIcon size={28} weight="bold" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openHandler}>
            <ListIcon size={32} weight="bold" />
          </TouchableOpacity>
        </View>

        {/* Greetings */}
        <View style={styles.greetingsView}>
          <Text style={styles.greetings}>Good morning,</Text>
          <Text style={styles.greetings}>Rudra</Text>
        </View>

        {/* Current Class */}
        <View style={styles.currentClass}>
          <View style={styles.currentCard}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Current Class
            </Text>
          </View>
        </View>

        {/* Structure Component */}
        <View>
          <Text style={{
            fontSize:20,
            fontWeight:"bold",
            marginLeft:10
          }}>Quick Access</Text>
          <Structure />
        </View>

        {/* Today's Schedule */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Schedule</Text>

          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleTitle}>AI Workshop</Text>
            <View style={styles.row}>
              <Text>11:00 AM</Text>
              <Text style={styles.location}>Lab 2</Text>
            </View>

            <Text style={styles.scheduleTitle}>Computer Science</Text>
            <View style={styles.row}>
              <Text>1:00 PM</Text>
              <Text style={styles.location}>Room 105</Text>
            </View>
          </View>
        </View>

        {/* Campus Updates */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campus Updates</Text>
          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleTitle}>AI Workshop</Text>
            <View style={styles.row}>
              <Text>11:00 AM</Text>
              <Text style={styles.location}>Lab 2</Text>
            </View>
          </View>
        </View>

        {/* Add Details Button */}
        <View style={styles.addButtonWrapper}>
          <Link href={"../../Pages/addDetails"} asChild>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Details</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Optional menu if open */}
        {openHandle && (
          <View style={styles.menuPopup}>
            <Text style={styles.menuText}>Menu Opened</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"90%",
    flex: 1,
    backgroundColor: "#fff",
  },

  logoView: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 5,
  },

  greetingsView: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  greetings: {
    fontSize: 30,
    color: "#1c5e94ff",
    fontWeight: "bold",
  },
  currentClass: {
    margin: 10,
    width:"95%",
    height:"20%",
    alignSelf:"flex-end"
  },
  
  currentCard:{
    width:"100%",
    padding:10,
    backgroundColor:"#4976a825",
    height:"100%",
    borderRadius:10,
    boxShadow:"-4px -2px 6px 1px #27557aff"
  },

  section: {
    marginTop: 10,
    marginHorizontal: "5%",
  },

  sectionTitle: {
    fontSize: 26,
    color: "#1c5e94ff",
    fontWeight: "bold",
    marginBottom: 6,
  },

  scheduleContainer: {
    marginLeft: "5%",
    marginBottom: 12,
  },

  scheduleTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#06c5f5bd",
    marginTop: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },

  location: {
    marginLeft: 20,
  },

  addButtonWrapper: {
    backgroundColor: "#C1E4E8",
    height: 50,
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 20,
    overflow: "hidden",
  },

  addButton: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },

  menuPopup: {
    backgroundColor: "#e3f2fd",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: "5%",
  },

  menuText: {
    color: "#1c5e94ff",
    fontWeight: "bold",
  },
});
