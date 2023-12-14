import { StatusBar } from "expo-status-bar"
import { Button, Text, StyleSheet, View, Pressable } from "react-native"
import { Audio } from "expo-av"
import React, { useState } from "react"
import soundsArray from "./assets/components/musicList"

const stop = require("./assets/sounds/stop.mp3")
export default function App() {
  const [sound, setSound] = React.useState(null)
  const [titu, setTitu] = React.useState("Click a button to start")
  const [url, setUrl] = React.useState("./assets/sounds/sound.mp3")
  const [soundObject, setSoundObject] = useState(null)

  const playSound = async (sound, x) => {
    setTitu(`Playing: ${x} ♫ `)
    if (soundObject !== null) {
      await soundObject.unloadAsync() // Stop and unload any previously playing sound
    }

    const { sound: newSoundObject } = await Audio.Sound.createAsync(sound)
    setSoundObject(newSoundObject)

    try {
      await newSoundObject.playAsync()
    } catch (error) {
      console.error("Error playing sound:", error)
    }
  }

  const stopSound = async () => {
    setTitu(`Press a button again 🕺🏽`)
    if (soundObject !== null) {
      try {
        await soundObject.stopAsync()
        await soundObject.unloadAsync()
        setSoundObject(null)
      } catch (error) {
        console.error("Error stopping sound:", error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SalsaColombia Dance Academy</Text>
      <Text style={styles.subTitle}> {titu}</Text>

      <StatusBar style="light-content" />
      {/* //Divider here */}
      <View style={styles.buttonContainer}>
        {soundsArray.map((song) => (
          <Pressable
            key={song.id}
            style={styles.button}
            onPress={() => playSound(song.id, song.name)}
          >
            <Text style={styles.textInside}>{song.name}</Text>
          </Pressable>
        ))}
      </View>
      {/* //Buttons Container ends here */}
      <View>
        <Pressable
          style={styles.stopButton}
          onPress={() => {
            stopSound(stop)
          }}
        >
          <Text style={styles.textInside}>Stop</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#170D54",
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
    height: 470,
    borderColor: "blue",
    borderWidth: 0.5,
  },
  title: {
    fontSize: 24,
    paddingBottom: 10,
    color: "white",
  },
  button: {
    backgroundColor: "#9754CB",
    textAlignVertical: "auto",
    borderRadius: 4,

    width: 90,
    height: 90,
    margin: 10,
  },
  textInside: {
    textAlign: "center",

    color: "white",
  },
  stopButton: {
    backgroundColor: "red",
    textAlignVertical: "auto",
    borderRadius: 4,
    color: "white",
    width: 90,
    height: 40,
    margin: 10,
  },
  subTitle: {
    color: "#DEACF5",
  },
})
