import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";

const WorkScreenOne = (props) => {
  const [showStart, setShowStart] = useState(true);

  useEffect(() => {});

  return (
    //   <SafeAreaView>
    <View>
      <Text style={style.text1}>Введіть оброблену площу</Text>
      <TextInput style={style.input} />

      <Text style={style.text1}>Введіть залишок води в баку</Text>
      <TextInput style={style.input} />

      <Pressable style={style.button}>
        <Text style={style.text}>Ввів!</Text>
      </Pressable>
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
  text1: {
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
    borderColor: "red",
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

export default WorkScreenOne;
