import {
  Image,
  Picker,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import GarnishPicker from "../components/GarnishPicker";
import { Ionicons } from "@expo/vector-icons";
import LiqueurPicker from "../components/LiqueurPicker";
import LiquorPicker from "../components/LiquorPicker";
import MixerPicker from "../components/MixerPicker";
import { ScrollView } from "react-native-gesture-handler";

export default function MixerScreen() {
  const [numberOfLiquors, setNumberOfLiquors] = useState(0);
  const [numberOfLiqueurs, setNumberOfLiqueurs] = useState(0);
  const [numberOfMixers, setNumberOfMixers] = useState(0);
  const [numberOfGarnishes, setNumberOfGarnishes] = useState(0);

  const clearDrink = () => {
    setNumberOfLiquors(0);
    setNumberOfLiqueurs(0);
    setNumberOfMixers(0);
    setNumberOfGarnishes(0);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headline}>
          <Text></Text>
          <TouchableOpacity onPress={clearDrink}>
            <Ionicons size={25} name="ios-trash" />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.headline}>
            <Text style={styles.header}>Liquor:</Text>
            <TouchableOpacity
              onPress={() => setNumberOfLiquors(numberOfLiquors + 1)}
            >
              <Ionicons size={35} name="ios-add" />
            </TouchableOpacity>
          </View>
          {Array(numberOfLiquors)
            .fill(0)
            .map((i, idx) => (
              <LiquorPicker key={idx} />
            ))}
        </View>

        <View>
          <View style={styles.headline}>
            <Text style={styles.header}>Liqueur:</Text>
            <TouchableOpacity
              onPress={() => setNumberOfLiqueurs(numberOfLiqueurs + 1)}
            >
              <Ionicons size={35} name="ios-add" />
            </TouchableOpacity>
          </View>
          {Array(numberOfLiqueurs)
            .fill(0)
            .map((i, idx) => (
              <LiqueurPicker key={idx} />
            ))}
        </View>

        <View>
          <View style={styles.headline}>
            <Text style={styles.header}>Mixer:</Text>
            <TouchableOpacity
              onPress={() => setNumberOfMixers(numberOfMixers + 1)}
            >
              <Ionicons size={35} name="ios-add" />
            </TouchableOpacity>
          </View>
          {Array(numberOfMixers)
            .fill(0)
            .map((i, idx) => (
              <MixerPicker key={idx} />
            ))}
        </View>

        <View>
          <View style={styles.headline}>
            <Text style={styles.header}>Garnish:</Text>
            <TouchableOpacity
              onPress={() => setNumberOfGarnishes(numberOfGarnishes + 1)}
            >
              <Ionicons size={35} name="ios-add" />
            </TouchableOpacity>
          </View>
          {Array(numberOfGarnishes)
            .fill(0)
            .map((i, idx) => (
              <GarnishPicker key={idx} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

MixerScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header2: {
    fontSize: 25,
    fontWeight: "bold",
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
  },
  headline: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingTop: 30,
  },
});
