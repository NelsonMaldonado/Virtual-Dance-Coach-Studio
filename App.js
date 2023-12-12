import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
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

  const startTime = 15
  let currentDate = new Date()
  const currentTime = currentDate.getHours()

  const playSound = async () => {
    if (sound) {
      await sound.stopAsync()
      await sound.playAsync()
    }
  }

  return (
    <View style={styles.container}>
      <Text>App by Nelly</Text>
      <StatusBar style="light-content" />

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
})
