import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const MenuList = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(true);

  return (
    <ScrollView>
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={handlePress}
        >
          <List.Item title="Bread and Tea" />
          <List.Item title="Pancake and Coffee" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={handlePress}
        >
          <List.Item title="Bread and Tea" />
          <List.Item title="Pancake and Coffee" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={handlePress}
        >
          <List.Item title="Bread and Tea" />
          <List.Item title="Pancake and Coffee" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          onPress={handlePress}
        >
          <List.Item title="Red Wine" />
          <List.Item title="Martini" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
