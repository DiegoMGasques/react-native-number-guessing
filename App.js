import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

const loadFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoading(false)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const resetGameHandler = () => {
    setRounds(0);
    setSelectedNumber(null);
  };

  const startGameHandler = (num) => {
    setSelectedNumber(num);
  };

  const gameOverHandler = (rounds) => {
    setRounds(rounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {selectedNumber ? (
        rounds > 0 ? (
          <GameOverScreen rounds={rounds} onReset={resetGameHandler} />
        ) : (
          <GameScreen
            userChoice={selectedNumber}
            onGameOver={gameOverHandler}
          />
        )
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
