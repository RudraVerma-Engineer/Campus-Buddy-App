import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date"); // "date" or "time"

  // When user selects
  const onChange = (event, selectedDate) => {
    setShow(false); // hide picker after selection
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showPicker = (currentMode) => {
    setMode(currentMode);
    setShow(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Selected: {date.toLocaleString()}
      </Text>

      <Button title="Pick Date" onPress={() => showPicker("date")} />
      <Button title="Pick Time" onPress={() => showPicker("time")} />

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
