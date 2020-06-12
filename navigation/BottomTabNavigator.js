import * as React from "react";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
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
          title: "Drink Maker",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-beer" />
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
      return "Drink Maker";
    case "Links":
      return "Settings";
  }
}