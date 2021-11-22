import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card";
import colors from "../styles/theme/colors";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>Start a new game!</Text>
      <Card style={styles.card}>
        <Text>Select a number!</Text>
        <TextInput />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={() => {}}
              color={colors.secondary.main}
            />
          </View>
          <View style={styles.space} />
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => {}}
              color={colors.primary.main}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  card: { width: 300, maxWidth: "80%", alignItems: "center" },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 0,
  },
  button: {
    flex: 1,
  },
  space: {
    marginHorizontal: 10,
  },
});

export default StartGameScreen;
