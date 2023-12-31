import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const BottomStickyButton = (props) => {
  const { title, onPress } = props || {};
  return (
    <View style={styles.availabilityButtonWrap}>
      <TouchableOpacity onPress={onPress} style={styles.availabilityButton}>
        <Text style={styles.availabilityButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomStickyButton;

const styles = StyleSheet.create({
  availabilityButtonWrap: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 15,
  },
  availabilityButton: {
    alignItems: "center",
    backgroundColor: "#5FBDFF",
    borderRadius: 6,
    padding: 15,
    marginHorizontal: 20,
  },
  availabilityButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "white",
  },
});
