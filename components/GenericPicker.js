import {
  Button,
  Picker,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

export default function GenericPicker({ options }) {
  const newOption = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const [selectedValue, setSelectedValue] = useState(newOption());

  const selectNewOption = () => {
    let newSelection = newOption();

    setSelectedValue(newSelection);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selectedValue}</Text>
      <TouchableOpacity onPress={selectNewOption}>
        <Ionicons size={25} name="ios-refresh" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 25,
  },
});
