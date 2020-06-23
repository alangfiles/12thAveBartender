import GenericPicker from "./GenericPicker";
import React from "react";

const options = [
  "Sweet Vermouth",
  "Dry Vermouth",
  "Kahlúa",
  "Campari",
  "Triplesec",
  "Amaretto",
  "Bailey's",
  "Sambuca",
  "Blue Curaçao",
  "Absinthe",
  "Frenet branca",
  "Chartreuse",
  "Goldschläger",
  "Crème de Menthe",
  "Jägermeister",
  "Midori",
  "St Germain",
  "Southern Comfort",
];

export default function LiqueurPicker() {
  return <GenericPicker options={options} />;
}

export const randomLiqueur = (name) => {
  return options[Math.floor(Math.random() * options.length)];
};
