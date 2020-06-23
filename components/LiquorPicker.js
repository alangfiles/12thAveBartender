import GenericPicker from "./GenericPicker";
import React from "react";

const options = [
  "Whiskey",
  "Gin",
  "Tequila",
  "Vodka",
  "Brandy",
  "Bourbon",
  "Scotch",
  "Rye",
  "Dark Rum",
  "Light Rum",
];

export default function LiquorPicker() {
  return <GenericPicker options={options} />;
}

export const randomLiquor = (name) => {
  return options[Math.floor(Math.random() * options.length)];
};
