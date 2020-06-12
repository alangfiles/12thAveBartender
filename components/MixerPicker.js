import GenericPicker from "./GenericPicker";
import React from "react";

export default function MixerPicker() {
  const options = [
    "Cola",
    "Lemon Soda",
    "Club Soda",
    "Tonic",
    "Ginger Ale",
    "Coffee",
    "Tomato Juice",
  ];

  return <GenericPicker options={options} />;
}
