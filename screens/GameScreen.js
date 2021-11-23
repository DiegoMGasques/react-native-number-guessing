import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import colors from "../styles/theme/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currGuess, setCurrGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [steps, setSteps] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currGuess === userChoice) {
      onGameOver(steps);
    }
  }, [currGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currGuess < userChoice) ||
      (direction === "greater" && currGuess > userChoice)
    ) {
      Alert.alert("Invalid action!", "You should give correct hint", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currGuess;
    } else {
      currentLow.current = currGuess;
    }

    const newGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currGuess
    );
    setCurrGuess(newGuess);
    setSteps((curr) => (curr += 1));
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.sectionTitle}>Opponent's Guess</Text>
        <Text style={styles.result}>{currGuess}</Text>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              title="Lower"
              onPress={nextGuessHandler.bind(this, "lower")}
            />
          </View>
          <View style={styles.space} />
          <View style={styles.button}>
            <Button
              title="Greater"
              onPress={nextGuessHandler.bind(this, "greater")}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    padding: 8,
    alignItems: "center",
  },
  card: {
    width: "100%",
    alignItems: "center",
  },
  sectionTitle: {
    fontWeight: "bold",
  },
  result: {
    fontSize: 24,
    color: colors.secondary.main,
    fontWeight: "bold",
    marginVertical: 16,
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexGrow: 1,
  },
  space: {
    marginHorizontal: 8,
  },
});

export default GameScreen;
