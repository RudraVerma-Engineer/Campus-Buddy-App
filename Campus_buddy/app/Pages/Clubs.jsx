// TimetableScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

export default function TimetableScreen() {
  const [selectedDay, setSelectedDay] = useState("Today");

  const days = ["Mon", "Tue", "Wed", "Today", "Fri", "Sat"];

  const schedule = [
    {
      start: "9:00 AM",
      end: "10:30 AM",
      subject: "Advanced Calculus",
      room: "L101",
      faculty: "Dr. A. Smith",
      current: false,
    },
    {
      start: "10:45 AM",
      end: "12:15 PM",
      subject: "Software Engineering",
      room: "S204 (Lab)",
      faculty: "Prof. B. Jones",
      current: true,
    },
    {
      start: "1:30 PM",
      end: "3:00 PM",
      subject: "Database Management",
      room: "L305",
      faculty: "Ms. C. King",
      current: false,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Timetable</Text>
        </View>

        {/* Day Selector */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.daySelector}
        >
          {days.map((day) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayTab,
                selectedDay === day && styles.activeDayTab,
              ]}
              onPress={() => setSelectedDay(day)}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDay === day && styles.activeDayText,
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Timetable Cards */}
        {schedule.map((item, index) => (
          <View
            key={index}
            style={[styles.card, item.current && styles.currentCard]}
          >
            {item.current && (
              <View style={styles.currentIndicator}>
                <Text style={styles.currentText}>Current Class</Text>
              </View>
            )}
            <View style={styles.timeBlock}>
              <Text style={styles.timeText}>{item.start}</Text>
              <Text style={styles.timeText}>{item.end}</Text>
            </View>

            <View style={styles.classInfo}>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.detail}>Room: {item.room}</Text>
              <Text style={styles.detail}>Faculty: {item.faculty}</Text>
            </View>
          </View>
        ))}

        {/* Primary Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>View Full Weekly Schedule</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem icon="home" label="Home" />
        <NavItem icon="campaign" label="Announcements" />
        <NavItem icon="calendar_today" label="Timetable" active />
        <NavItem icon="local_library" label="Library" />
        <NavItem icon="person" label="Profile" />
      </View>
    </SafeAreaView>
  );
}

const NavItem = ({ icon, label, active }) => (
  <TouchableOpacity style={styles.navItem}>
    <MaterialIcons
      name={icon}
      size={24}
      color={active ? "#1C5E94" : "#6C757D"}
    />
    <Text style={[styles.navLabel, active && { color: "#1C5E94" }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7F9",
  },
  container: {
    padding: 16,
    paddingBottom: 80,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1C5E94",
    fontFamily: "Poppins",
  },
  daySelector: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dayTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginRight: 8,
    elevation: 2,
  },
  activeDayTab: {
    backgroundColor: "#1C5E94",
  },
  dayText: {
    color: "#6C757D",
    fontSize: 14,
    fontWeight: "500",
  },
  activeDayText: {
    color: "#FFFFFF",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 6,
    borderLeftColor: "transparent",
    elevation: 3,
  },
  currentCard: {
    borderLeftColor: "#1C5E94",
  },
  timeBlock: {
    paddingRight: 16,
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
    alignItems: "flex-end",
    width: 80,
  },
  timeText: {
    color: "#6C757D",
    fontSize: 14,
  },
  classInfo: {
    paddingLeft: 16,
    flex: 1,
  },
  subject: {
    color: "#1C5E94",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  detail: {
    color: "#6C757D",
    fontSize: 14,
  },
  currentIndicator: {
    position: "absolute",
    top: -10,
    right: 10,
    backgroundColor: "#C1E4E8",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  currentText: {
    color: "#1C5E94",
    fontSize: 12,
    fontWeight: "500",
  },
  primaryButton: {
    backgroundColor: "#28A745",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#6C757D",
  },
});
