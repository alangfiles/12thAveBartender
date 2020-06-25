import GenericPicker from "./GenericPicker";
import React from "react";

const options = [
  "Olive",
  "Lemon Twist",
  "Orange Slice",
  "Lime Slice",
  "Cherry",
  "Mint",
  "Lime",
  "Salt Rim",
  "Pickle",
  "Sugar Rim",
  "Cocktail Onion",
];

export default function GarnishPicker() {
  return <GenericPicker options={options} />;
}

export const randomGarnish = (name) => {
  return options[Math.floor(Math.random() * options.length)];
};
