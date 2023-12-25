import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const SearchedCard = ({ searchedData, propertyData }) => {
  const { name, rating, address, oldPrice, newPrice, photos, rooms } =
    propertyData || {};
  const { place, selectedDates, stayDetails } = searchedData || {};
  return (
    <Pressable style={styles.cardContainer}>
      <View style={styles.propertyImageSection}>
        <Image
          source={{ uri: photos[0]?.image }}
          style={styles.propertyImage}
        />
      </View>
      <View style={styles.propertyDetailsSection}>
        <Text numberOfLines={1}>{name}</Text>
        <View style={styles.ratingSection}>
          <View style={styles.rating}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{rating}</Text>
          </View>
          <Text style={styles.levelText}>Genius Level</Text>
        </View>
        <Text numberOfLines={2} style={styles.address}>
          {address}
        </Text>
        <View style={styles.priceSection}>
          <Text style={styles.oldPrice}>Rs{oldPrice}</Text>
          <Text style={styles.specialPrice}>Rs {newPrice}</Text>
        </View>
        <Text style={styles.helpingText}>Deluxe Room</Text>
        <Text style={styles.helpingText}>Hotel Room: 1 bed</Text>
        <Text style={styles.limitedDealText}>Limited Time Deal</Text>
      </View>
    </Pressable>
  );
};

export default SearchedCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 180,
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  propertyImageSection: {
    flex: 1.5,
  },
  propertyImage: {
    flex: 1,
    borderRadius: 6,
  },
  propertyDetailsSection: {
    flex: 2.5,
    gap: 3,
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  levelText: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: "#4B91EB",
    fontSize: 12,
    color: "white",
  },
  address: {
    fontWeight: "500",
    fontSize: 12,
    color: "grey",
  },
  priceSection: {
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
  helpingText: {
    fontSize: 12,
    color: "gray",
  },
  limitedDealText: {
    width: 110,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: "#4B91EB",
    fontSize: 12,
    color: "white",
  },
});
