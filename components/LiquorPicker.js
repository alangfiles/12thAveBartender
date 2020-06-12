import GenericPicker from "./GenericPicker";
import React from "react";

export default function LiquorPicker() {
  const options = [
    "Whiskey",
    "Gin",
    "Tequila",
    "Vodka",
    "Brandy",
    "Burbon",
    "Scotch",
    "Rye",
    "Dark Rum",
    "Light Rum",
  ];

  return <GenericPicker options={options} />;
}
