import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../styles/theme/colors";

const StartGameScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumer] = useState();

  const inputHandler = (text) => {
    setInputValue(text.replace(/[^0-9]/g, ""));
  };

  const closeKeyboard = () => Keyboard.dismiss();

  const resetInputHandler = () => {
    setInputValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(inputValue);
    if (!chosenNumber || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "The number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }

    setConfirmed(true);
    setSelectedNumer(chosenNumber);
    setInputValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={{ ...styles.card, ...{ marginTop: 24 } }}>
        <Text>You Selected</Text>
        <View style={{ marginVertical: 8 }}>
          <Text style={{ fontSize: 22, color: colors.primary.main }}>
            {selectedNumber}
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <Button title="Play" />
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}>
      <View style={styles.screen}>
        <Text style={styles.sectionTitle}>Start a new game!</Text>
        <Card style={styles.card}>
          <Text>Select a number!</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={inputValue}
            onChangeText={inputHandler}
          />
          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={colors.secondary.main}
              />
            </View>
            <View style={styles.space} />
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={colors.primary.main}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    marginVertical: 16,
    minWidth: 50,
  },
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
