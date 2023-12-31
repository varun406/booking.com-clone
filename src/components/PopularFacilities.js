import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PopularFacilities = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Most Popular Facilities</Text>
      <View style={styles.facilitySection}>
        <Text style={styles.facility}>Room service</Text>
        <Text style={styles.facility}>Free WIFI</Text>
        <Text style={styles.facility}>Family room</Text>
        <Text style={styles.facility}>Free parking</Text>
        <Text style={styles.facility}>Swimming pool</Text>
        <Text style={styles.facility}>Restar</Text>
        <Text style={styles.facility}>Fitness center</Text>
      </View>
    </>
  );
};

export default PopularFacilities;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  facilitySection: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    columnGap: 15,
    rowGap: 10,
    marginTop: 7,
  },
  facility: {
    backgroundColor: "#1E7DFC",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    fontSize: 13,
    fontWeight: "400",
  },
});
