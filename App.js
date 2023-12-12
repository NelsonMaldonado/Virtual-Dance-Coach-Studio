import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"
import { Button, Text, StyleSheet, View, Pressable } from "react-native"
import { Audio } from "expo-av"
import React, { useEffect, useState } from "react"

export default function App() {
  const [sound, setSound] = React.useState(null)

  useEffect(() => {
    const fetchSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/sounds/sound.mp3")
      )
      setSound(sound)
    }

    fetchSound()
  }, [])

  const playSound = async () => {
    if (sound) {
      await sound.stopAsync()
      await sound.playAsync()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salsa Practice</Text>
      <StatusBar style="light-content" />
      {/* //Divider here */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Descarga</Text>
        </Pressable>
      </View>
      {/* //Buttons Container ends here */}
      <View>
        <Button onPress={playSound} title="Click Me" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",

    width: 350,
    height: 560,
    borderColor: "blue",
    borderWidth: 0.5,
  },
  title: {
    fontSize: 24,
    paddingBottom: 10,
  },
  button: {
    display: "flex",
    backgroundColor: "red",

    width: 90,
    height: 90,
    margin: 10,
  },
})
