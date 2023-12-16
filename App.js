import { StatusBar } from "expo-status-bar"
import {
  Button,
  Text,
  Modal,
  StyleSheet,
  View,
  Pressable,
  Switch,
} from "react-native"
import { Audio } from "expo-av"
import React, { useState } from "react"
import { Image } from "expo-image"
import PickSong from "./assets/components/pickSong"

import {
  sonidoBestialArray,
  noLePegueArray,
} from "./assets/components/musicList"

const countSound = require("./assets/sounds/countdown.mp3")
const countSoundLenght = 1890
export default function App() {
  const [titu, setTitu] = React.useState("Click a button to start")

  const [soundObject, setSoundObject] = useState(null)
  const [isEnabled, setIsEnabled] = useState(false)
  const [countDown, setCountDown] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }

  const countDownSwitch = () => {
    setCountDown((previousState) => !previousState)
  }
  const playCountDown = async () => {
    const { sound: soundObject } = await Audio.Sound.createAsync(
      require("./assets/sounds/countdown.mp3")
    )
    try {
      await soundObject.playAsync()
    } catch (error) {
      console.error("Error playing countdown sound:", error)
    }
  }

  //Testing a new idea
  async function playTogether(sound, songName, padName, loop = isEnabled) {
    //Function 1
    console.log(padName)
    const playCountDown = async () => {
      const { sound: soundObject } = await Audio.Sound.createAsync(
        require("./assets/sounds/countdown.mp3")
      )
      try {
        await soundObject.playAsync()
      } catch (error) {
        console.error("Error playing countdown sound:", error)
      }
    }
    //Function 2
    if (countDown) {
      playCountDown()
    }
    //Function  3
    const playSound = async () => {
      console.log(`${songName} is playing`)
      setTitu(`Playing: ${songName} ♫ ${padName} 💃🏻`)
      if (soundObject !== null) {
        await soundObject.unloadAsync() // Stop and unload any previously playing sound
      }

      const { sound: newSoundObject } = await Audio.Sound.createAsync(sound, {
        isLooping: loop,
      })

      setSoundObject(newSoundObject)

      try {
        await newSoundObject.playAsync()
      } catch (error) {
        console.error("Error playing sound:", error)
      }
    }
    //Function 4
    if (countDown) {
      setTimeout(() => playSound(), countSoundLenght)
    } else {
      playSound()
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
      <Image
        source={require("./assets/sclogo.png")}
        style={{ width: 70, height: 70, marginBottom: 20 }}
        contentFit="contain"
      />
      <Text style={styles.title}>SalsaColombia Dance Academy</Text>
      {/* Modal goes here */}
      <PickSong />
      {/* Modal ends here */}
      <Text style={styles.subTitle}> {titu}</Text>

      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* //Divider here */}
      <View style={styles.buttonContainer}>
        {sonidoBestialArray.map((song) => (
          <Pressable
            key={song.id}
            style={styles.button}
            onPress={() =>
              playTogether(song.sound, song.name, song.padName, isEnabled)
            }
          >
            <Text style={styles.textInside}>{song.padName}</Text>
          </Pressable>
        ))}
      </View>
      {/* //Buttons Container ends here */}
      {/* loop and countdown container starts here */}

      <View style={styles.toggleDiv}>
        <View style={styles.toggleDiv}>
          <Text style={styles.toggleTitle}>Loop</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#7CDD6D" }}
            thumbColor={isEnabled ? "f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.toggleDiv}>
          <Text style={styles.toggleTitle}>Countdown</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#7CDD6D" }}
            thumbColor={countDown ? "#f4f3f4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={countDownSwitch}
            value={countDown}
          />
        </View>

        {/* Loop and countdown container ends here */}
      </View>
      <Pressable
        style={styles.stopButton}
        onPress={() => {
          stopSound()
        }}
      >
        <Text style={styles.textInside}>Stop</Text>
      </Pressable>
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
    marginBottom: 20,
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
    marginTop: 20,
  },
  subTitle: {
    color: "#DEACF5",
    marginBottom: 20,
  },
  toggleTitle: {
    color: "white",
    marginTop: 1,
    marginRight: 20,
    fontSize: 20,
    marginStart: 20,
  },
  toggleDiv: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
  },
})
