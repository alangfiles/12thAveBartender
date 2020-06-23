import GarnishPicker, { randomGarnish } from "../components/GarnishPicker";
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

import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { randomDrinkName } from "../components/NamePicker";
import { randomLiqueur } from "../components/LiqueurPicker";
import { randomLiquor } from "../components/LiquorPicker";
import { randomMixer } from "../components/MixerPicker";

export default function HomeScreen() {
  const [liquors, setLiquors] = useState([]);
  const [liqueurs, setLiqueurs] = useState([]);
  const [mixers, setMixers] = useState([]);
  const [garnishes, setGarnishes] = useState([]);
  const [name, setName] = useState("");

  const clearDrink = () => {
    setLiquors([]);
    setLiqueurs([]);
    setMixers([]);
    setGarnishes([]);
    setName("");
  };

  const randomDrink = () => {
    const numLiquors = Math.random() > 0.85 ? 2 : 1;
    const numLiqueurs = Math.random() > 0.5 ? 1 : 0;
    const numMixers = 1;
    const numGarnishes = Math.random() > 0.9 ? 2 : 1;

    setLiquors(
      Array(numLiquors)
        .fill(0)
        .map((i, idx) => randomLiquor())
    );
    setLiqueurs(
      Array(numLiqueurs)
        .fill(0)
        .map((i, idx) => randomLiqueur())
    );

    setMixers(
      Array(numMixers)
        .fill(0)
        .map((i, idx) => randomMixer())
    );

    setGarnishes(
      Array(numGarnishes)
        .fill(0)
        .map((i, idx) => randomGarnish())
    );

    const drink = randomDrinkName(
      liquors.join() + liqueurs.join() + mixers.join() + garnishes.join()
    );

    setName(drink);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headline}>
          <Text style={styles.header2}>Have a Drink</Text>
          <TouchableOpacity
            onPress={() => {
              clearDrink();
              randomDrink();
            }}
          >
            <Ionicons size={35} name="md-refresh" />
          </TouchableOpacity>
          <TouchableOpacity onPress={clearDrink}>
            <Ionicons size={35} name="ios-trash" />
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.drinkName}>{name}</Text>
          </View>

          <View>
            {liquors.map((l) => (
              <Text style={styles.ingredient}>{l}</Text>
            ))}
          </View>

          <View>
            {liqueurs.map((l) => (
              <Text style={styles.ingredient}>{l}</Text>
            ))}
          </View>

          <View>
            {mixers.map((l) => (
              <Text style={styles.ingredient}>{l}</Text>
            ))}
          </View>

          <View>
            {garnishes.map((l) => (
              <Text style={styles.ingredient}>{l}</Text>
            ))}
          </View>
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
  container2: {
    padding: 15,
  },
  drinkName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  ingredient: {
    fontSize: 25,
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
