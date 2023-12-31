import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BookNowCard = (props) => {
  const navigation = useNavigation();
  const { data } = props || {};

  const {
    name,
    rating,
    address,
    oldPrice,
    newPrice,
    photos,
    rooms,
    place,
    selectedDates,
    stayDetails,
  } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.hotelName}>{name}</Text>
      <View style={styles.ratingSection}>
        <View style={styles.rating}>
          <MaterialIcons name="stars" size={24} color="green" />
          <Text>{rating}</Text>
        </View>
        <Text style={[styles.levelText, { backgroundColor: "#003580" }]}>
          Genius Level
        </Text>
      </View>

      <View style={styles.stayDetailsSection}>
        <View>
          <Text style={styles.stayDetailsTitle}>Check In</Text>
          <Text style={styles.stayDetailsValue}>
            {new Intl.DateTimeFormat(["ban", "id"]).format(
              selectedDates?.selectedStartDate
            )}
          </Text>
        </View>
        <Text>chjdskfhk</Text>
        <View>
          <Text style={styles.stayDetailsTitle}>Check Out</Text>
          <Text style={styles.stayDetailsValue}>
            {new Intl.DateTimeFormat(["ban", "id"]).format(
              selectedDates?.selectedEndDate
            )}
          </Text>
        </View>
        <View>
          <Text style={styles.stayDetailsTitle}>Rooms and guests</Text>
          <Text numberOfLines={2} style={styles.stayDetailsValue}>
            {stayDetails.rooms} rooms {stayDetails.adults} adults{" "}
            {stayDetails.children} children
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.replace("Main")}
        style={styles.bookNowButton}
      >
        <Text style={styles.bookNowText}>Book now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookNowCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 6,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: "600",
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 7,
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
    fontSize: 12,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  stayDetailsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  stayDetailsTitle: {
    fontWeight: "500",
  },
  stayDetailsValue: {
    color: "#1E7DFC",
    fontWeight: "500",
  },
  bookNowButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#003580",
    borderRadius: 6,
    marginTop: 10,
  },
  bookNowText: {
    fontWeight: "600",
    color: "white",
  },
});
