import { Link } from "expo-router";
import {
  BookOpen,
  BookOpenIcon,
  Books,
  BooksIcon,
  CalendarDots,
  CalendarDotsIcon,
  MapPinLine,
  MapPinLineIcon,
  Notepad,
  NotepadIcon,
  Users,
  UsersIcon,
} from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Structure() {
  return (
    <View style={styles.mainButtonView}>
      {/* Row 1 */}
      <View style={styles.row}>
        <Link href="/Pages/timetable" asChild>
          <TouchableOpacity style={styles.buttonBlue}>
            <BookOpenIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Classes</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/Pages/event" asChild>
          <TouchableOpacity style={styles.buttonOrange}>
            <CalendarDotsIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Events</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/Pages/Notes" asChild>
          <TouchableOpacity style={styles.buttonBlue}>
            <NotepadIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Notes</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Row 2 */}
      <View style={[styles.row, { marginTop: 10 }]}>
        <Link href="/Pages/Clubs" asChild>
          <TouchableOpacity style={styles.buttonBlue}>
            <UsersIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Clubs</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/Pages/Library" asChild>
          <TouchableOpacity style={styles.buttonOrange}>
            <BooksIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Library</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/Pages/Maps" asChild>
          <TouchableOpacity style={styles.buttonBlue}>
            <MapPinLineIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Maps</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainButtonView: {
    height: 230,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "45%",
    width: "100%",
  },

  buttonBlue: {
    backgroundColor: "#C1E4E8",
    width: "28%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  buttonOrange: {
    backgroundColor: "#FDCA91",
    width: "28%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  buttonText: {
    fontSize: 18,
    color: "#1c5e94ff",
    fontWeight: "600",
  },
});
