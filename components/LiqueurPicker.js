import GenericPicker from "./GenericPicker";
import React from "react";

export default function LiquorPicker() {
  const options = [
    "Blue Curaçao",
    "Sweet Vermouth",
    "Dry Vermouth",
    "Kahlúa",
    "Campari",
    "Triplesec",
    "Amaretto",
    "Bailey's",
    "Sambuca",
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

  return <GenericPicker options={options} />;
}
