import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [rounds, setRounds] = useState(0);

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
