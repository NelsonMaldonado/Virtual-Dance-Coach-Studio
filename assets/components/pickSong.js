import React, { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import AntDesign from "@expo/vector-icons/AntDesign"
import musicList, { sonidoBestialArray } from "./musicList"

const data = [
  { label: "No le pegue", value: "1" },
  { label: "Sonido Bestial", value: "2" },
]

// {
//
//     name: "Sonido Bestial",
//     sound: require("../sounds/sonidoBestial/Sound1.mp3"),
//     padName: "Part 1",
//   }

const DropdownComponent = (props) => {
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)
  const testButton = () => {
    alert("Pressed")
    console.log()
  }

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Select song
        </Text>
      )
    }
    return null
  }

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value)
          setIsFocus(false)
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  )
}

export default DropdownComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 8,
    width: 300,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
