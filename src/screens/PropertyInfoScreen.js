import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { pixelNormalize } from "../utils/Normalise";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

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
  } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: name,
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        shadowColor: "transparent",
      },
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Ionicons name="chevron-back" size={24} color="#1E7DFC" />
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={[styles.photosSection, styles.section]}>
          {photos?.slice(0, 5)?.map((item, index) => (
            <Image
              key={index}
              style={styles.photoWrap}
              source={{ uri: item.image }}
            />
          ))}
          <Pressable style={styles.showMore}>
            <Text style={styles.showMoreText}>Show More</Text>
          </Pressable>
        </View>
        <View style={[styles.nameSection, styles.section]}>
          <View style={styles.nameWrap}>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.ratingSection}>
              <View style={styles.rating}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{rating}</Text>
              </View>
              <Text style={[styles.levelText, { backgroundColor: "#4B91EB" }]}>
                Genius Level
              </Text>
            </View>
          </View>
          <View
            style={[styles.sustainableWrap, { backgroundColor: "#65B741" }]}
          >
            <Text style={styles.levelText}>Travel Sustainable</Text>
          </View>
        </View>
        <View style={styles.divider} />
        {/* NOTE: PRICE SECTION */}
        <View style={[styles.section, styles.priceSection]}>
          <View>
            <Text>Price for 1 night, {stayDetails?.adults} adults</Text>
            <View style={styles.priceCompare}>
              <Text style={styles.oldPrice}>Rs{oldPrice}</Text>
              <Text style={styles.specialPrice}>Rs {newPrice}</Text>
            </View>
          </View>
          <View style={styles.discountWrap}>
            <Text style={styles.discountText}>28% off</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={[styles.stayDetailsSection, styles.section]}>
          <View>
            <Text style={styles.stayDetailsTitle}>Check In</Text>
            <Text style={styles.stayDetailsValue}>
              {new Intl.DateTimeFormat(["ban", "id"]).format(
                selectedDates.selectedStartDate
              )}
            </Text>
          </View>
          <View>
            <Text style={styles.stayDetailsTitle}>Check Out</Text>
            <Text style={styles.stayDetailsValue}>
              {new Intl.DateTimeFormat(["ban", "id"]).format(
                selectedDates.selectedEndDate
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
        {/* NOTE: PRICE SECTION ENDS*/}
        <View style={styles.divider} />
        {/* NOTE: MOST POPULAR FACILITY SECTION STARTS*/}
        <View style={[styles.section]}>
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
        </View>
        {/* NOTE: MOST POPULAR FACILITY SECTION ENDS*/}
        {/* NOTE: STICKY BUTTON*/}
      </ScrollView>
      <View style={styles.availabilityButtonWrap}>
        <TouchableOpacity style={[styles.availabilityButton, styles.section]}>
          <Text style={styles.availabilityButtonText}>Select Availability</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  },
  scrollContainer: {
    flexDirection: "column",
    gap: 15,
    paddingTop: 20,
    paddingBottom: 100,
  },
  section: {
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  photosSection: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  photoWrap: {
    width: pixelNormalize(220),
    height: pixelNormalize(250),
    objectFit: "cover",
    borderRadius: 6,
  },
  showMore: {
    width: pixelNormalize(220),
    height: pixelNormalize(250),
    justifyContent: "center",
    alignItems: "center",
  },
  showMoreText: {
    fontWeight: "600",
  },
  nameSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameWrap: {
    flex: 3,
  },
  nameText: {
    fontSize: 18,
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
    color: "white",
    textAlign: "center",
  },
  sustainableWrap: {
    width: 120,
    borderRadius: 6,
  },
  divider: {
    height: 1,
    backgroundColor: "lightgray",
  },
  priceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  priceCompare: {
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
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
  discountWrap: {
    width: 60,
    height: 25,
    backgroundColor: "green",
    padding: 3,
    borderRadius: 6,
  },
  discountText: {
    fontSize: 12,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  stayDetailsSection: {
    flex: 1,
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
  },
  availabilityButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "white",
  },
});
