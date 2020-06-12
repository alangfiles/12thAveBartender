import GenericPicker from "./GenericPicker";
import React from "react";

export default function GarnishPicker() {
  const options = [
    "Olive",
    "Lemon Twist",
    "Orange Slice",
    "Cherry",
    "Lime",
    "Salt Rim",
    "Pickle",
  ];

  return <GenericPicker options={options} />;
}
