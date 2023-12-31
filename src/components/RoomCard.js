import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import PopularFacilities from "./PopularFacilities";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const RoomCard = (props) => {
  const {
    name,
    payment,
    refundable,
    oldPrice,
    newPrice,
    onSelect,
    onRemove,
    isSelected,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.nameSection}>
        <Text style={styles.roomName}>{name}</Text>
        <AntDesign name="infocirlceo" size={18} color="#1E7DFC" />
      </View>
      <Text>{payment}</Text>
      <Text style={styles.refundableText}>{refundable}</Text>
      <View style={styles.priceCompare}>
        <Text style={styles.oldPrice}>Rs{oldPrice}</Text>
        <Text style={styles.specialPrice}>Rs {newPrice}</Text>
      </View>
      <PopularFacilities />
      <TouchableOpacity
        onPress={onSelect}
        activeOpacity={0.8}
        style={[styles.selectButton, isSelected ? styles.selectedButton : {}]}
      >
        {isSelected ? (
          <Pressable
            onPress={(name) => onRemove(name)}
            style={styles.cancelIconWrap}
          >
            <MaterialIcons name="cancel" size={22} color="red" />
          </Pressable>
        ) : null}

        <Text style={styles.selectButtonText}>
          {isSelected ? "Selected" : "Select"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
  },
  nameSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roomName: {
    color: "#1E7DFC",
    fontSize: 16,
    fontWeight: "600",
  },
  refundableText: {
    color: "green",
    fontWeight: "600",
  },
  priceCompare: {
    flexDirection: "row",
    gap: 10,
  },
  oldPrice: {
    fontSize: 15,
    color: "red",
    textDecorationLine: "line-through",
  },
  specialPrice: {
    fontSize: 15,
    fontWeight: "500",
  },
  selectButton: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#1E7DFC",
    borderRadius: 6,
    padding: 10,
    marginTop: 10,
  },
  selectedButton: {
    backgroundColor: "rgba(30, 125, 252, 0.2)",
  },
  selectButtonText: {
    color: "#1E7DFC",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  cancelIconWrap: {
    position: "absolute",
    right: 7,
    bottom: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
