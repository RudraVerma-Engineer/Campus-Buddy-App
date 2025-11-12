import { Link } from "expo-router";
import {
  BookOpenIcon,
  BooksIcon,
  CalendarDotsIcon,
  MapPinLineIcon,
  NotepadIcon,
  UsersIcon,
} from "phosphor-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Structure() {
  return (
    <View style={styles.mainButtonView}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: "45%",
          width: "100%",
          gap: 10,
        }}
      >
        <Link href="Campus_buddy/app/Pages/classes.jsx" asChild>
          <TouchableOpacity style={styles.buttonCss}>
            <BookOpenIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Classes</Text>
          </TouchableOpacity>
        </Link>
        <Link href="Campus_buddy/app/Pages/event" asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#FDCA91",
              width: "28%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <CalendarDotsIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Events</Text>
          </TouchableOpacity>
        </Link>
        <Link href="Campus_buddy/app/Pages/Notes" asChild>
          <TouchableOpacity style={styles.buttonCss}>
            <NotepadIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Notes</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: "45%",
          width: "100%",
          marginTop: 10,
          gap: 10,
        }}
      >
        <Link href="Campus_buddy/app/Pages/Clubs" asChild>
          <TouchableOpacity style={styles.buttonCss}>
            <UsersIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Clubs</Text>
          </TouchableOpacity>
        </Link>
        <Link href="Campus_buddy/app/Pages/Library" asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#FDCA91",
              width: "28%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <BooksIcon size={45} color="#1c5e94ff" />
            <Text style={styles.buttonText}>Library</Text>
          </TouchableOpacity>
        </Link>
        <Link href="Campus_buddy/app/Pages/Maps" asChild>
          <TouchableOpacity style={styles.buttonCss}>
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
  },
  buttonCss: {
    backgroundColor: "#C1E4E8",
    width: "28%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#1c5e94ff",
  },
});
