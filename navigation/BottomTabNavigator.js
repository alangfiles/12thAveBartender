import * as React from "react";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import MixerScreen from "../screens/MixerScreen";
import TabBarIcon from "../components/TabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "12th Ave Bartender",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-beer" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Mixer"
        component={MixerScreen}
        options={{
          title: "12th Ave Mixologist",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-flask" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-settings" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "12th Ave Bartender";
    case "Mixer":
      return "12th Ave Mixologist";
    case "Links":
      return "Settings";
  }
}
