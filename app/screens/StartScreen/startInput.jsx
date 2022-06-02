import { render } from "react-dom";

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StartInput = () => {
  return (
    <View>
      <Text style={style.text}>Площа</Text>
      <TextInput
        style={style.input}
        textAlign={"center"}
        keyboardType={"decimal-pad"}
      />

      <Text style={style.text}>Норма розходу води л/га</Text>
      <TextInput
        style={style.input}
        textAlign={"center"}
        keyboardType={"decimal-pad"}
      />

      <Text style={style.text}>Норма препарату</Text>
      <TextInput
        style={style.input}
        textAlign={"center"}
        keyboardType={"decimal-pad"}
      />
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    marginVertical: 4,
    marginBottom: 15,
    borderWidth: 5,
    borderRadius: 20,
  },
  view: {
    width: "80%",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default StartInput;
