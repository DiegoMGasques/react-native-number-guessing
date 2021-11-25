import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Typography from "../components/Typography";

const GameOverScreen = ({ rounds, onReset, guessed }) => {
  return (
    <View style={styles.screen}>
      <View style={{ marginVertical: 8 }} />
      <Typography variant="h5">Game is over!</Typography>
      <View style={{ marginVertical: 8 }} />
      <Image
        style={{ ...styles.image }}
        resizeMode="cover"
        source={require("../assets/success.png")}
      />
      <View style={{ marginVertical: 8 }} />
      <Typography variant="body">
        It took {rounds} rounds to guess the number {guessed}
      </Typography>
      <View style={{ marginVertical: 8 }} />
      <View style={{ width: "80%" }}>
        <Button title="Reset" onPress={onReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    padding: 8,
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
  },
});

export default GameOverScreen;
