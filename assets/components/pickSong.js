import React, { useState } from "react"
import { View } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"

const PickSong = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: "Sonido Bestial", value: "option1" },
    { label: "No Le Pegue", value: "option2" },
  ])

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select an option"
        style={{ backgroundColor: "green" }}
      />
    </View>
  )
}

export default PickSong
