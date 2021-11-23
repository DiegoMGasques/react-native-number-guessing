import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({ rounds, onReset }) => {
  return (
    <View style={styles.screen}>
      <Text>Game is over!</Text>
      <Text>It took {rounds} rounds to guess</Text>
      <Button title="Reset" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    padding: 8,
    alignItems: "center",
  },
});

export default GameOverScreen;
