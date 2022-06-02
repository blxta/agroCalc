import { render } from "react-dom";

import WorkScreenOne from "../WorkScreens/workScreenOne";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StartInput from "./startInput";

const StartScreen = () => {
  const [flag, setFlag] = useState(false);

  return (
    <View style={!flag ? style.content : style.contentReverse}>
      <View>
        <Pressable style={style.button} onPress={() => setFlag(!flag)}>
          <Text style={style.text}>
            {!flag ? "До роботи!" : "Початкові дані"}
          </Text>
        </Pressable>
      </View>
      {!flag && <StartInput />}
      {flag && <WorkScreenOne />}
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse",
  },
  contentReverse: {
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "black",
    borderColor: "deepskyblue",
    borderWidth: 5,
    borderRadius: 26,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default StartScreen;
