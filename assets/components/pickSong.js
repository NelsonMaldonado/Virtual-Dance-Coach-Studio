import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { SelectCountry } from "react-native-element-dropdown"

const data = [
  {
    value: "1",
    lable: "No le pegue",
  },
  {
    value: "2",
    lable: "Sonido Bestial",
  },
]

const SelectCountryScreen = (props) => {
  const [country, setCountry] = useState(1)

  return (
    <View>
      <Text style={{ color: "white", fontSize: "20", fontWeight: "bold" }}>
        This is the selector
      </Text>
    </View>
  )
}
export default SelectCountryScreen
