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

export default function HomeScreen() {
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

  const randomDrink = () => {
    clearDrink();

    const numLiquors = Math.random() > 0.85 ? 2 : 1;
    const numLiqueurs = Math.random() > 0.5 ? 1 : 0;
    const numMixers = 1;
    const numGarnishes = Math.random() > 0.9 ? 2 : 1;

    setNumberOfLiquors(numLiquors);
    setNumberOfLiqueurs(numLiqueurs);
    setNumberOfMixers(numMixers);
    setNumberOfGarnishes(numGarnishes);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headline}>
          <Text style={styles.header2}>Have a Drink</Text>
          <TouchableOpacity onPress={randomDrink}>
            <Ionicons size={35} name="md-refresh" />
          </TouchableOpacity>
          <TouchableOpacity onPress={clearDrink}>
            <Ionicons size={35} name="ios-trash" />
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

HomeScreen.navigationOptions = {
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
