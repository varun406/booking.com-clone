import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("stays");
  return (
    <View style={styles.headerWrap}>
      <Pressable
        onPress={() => setSelectedCategory("stays")}
        style={[
          styles.categoryChip,
          selectedCategory === "stays" ? styles.selectedCategoryChip : {},
        ]}
      >
        <Ionicons name="bed-outline" size={20} color="white" />
        <Text style={styles.categoryChipText}>Stays</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedCategory("flights")}
        style={[
          styles.categoryChip,
          selectedCategory === "flights" ? styles.selectedCategoryChip : {},
        ]}
      >
        <Ionicons name="airplane-outline" size={20} color="white" />
        <Text style={styles.categoryChipText}>Flights</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedCategory("car-rental")}
        style={[
          styles.categoryChip,
          selectedCategory === "car-rental" ? styles.selectedCategoryChip : {},
        ]}
      >
        <AntDesign name="car" size={20} color="white" />
        <Text style={styles.categoryChipText}>Car Rental</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedCategory("taxi")}
        style={[
          styles.categoryChip,
          selectedCategory === "taxi" ? styles.selectedCategoryChip : {},
        ]}
      >
        <FontAwesome5 name="uber" size={20} color="white" />
        <Text style={styles.categoryChipText}>Taxi</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrap: {
    height: 65,
    backgroundColor: "#003580",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  selectedCategoryChip: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 25,
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
