import GenericPicker from "./GenericPicker";
import React from "react";

const options = [
  "Coffee",
  "Cola",
  "Lemon-Lime Soda",
  "Club Soda",
  "Tonic",
  "Ginger Ale",
  "Tomato Juice",
  "Grenadine",
  "Simple Syrup",
  "Red Bull",
  "Lemon Juice",
  "Grapefruit Juice",
  "Pineapple Juice",
  "Cranberry Juice",
  "Coconut Cream",
  "Sour Mix",
  "Orange Juice",
  "Bitters",
];

export default function MixerPicker() {
  return <GenericPicker options={options} />;
}

export const randomMixer = (name) => {
  return options[Math.floor(Math.random() * options.length)];
};
