import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import CalendarPicker from "react-native-calendar-picker";
import Modal from "react-native-modal";
import TravelMore from "../views/HomeScreen/TravelMore";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
  const [isRoomModalVisible, setRoomModalVisible] = useState(false);
  const [stayDetails, setStayDetails] = useState({
    rooms: 1,
    adults: 2,
    children: 0,
  });
  const [selectedDates, setSelectedDates] = useState({
    selectedStartDate: "",
    selectedEndDate: "",
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const formatDates = (date) => {
    if (date) {
      return new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(date));
    }
  };

  const onModalOpen = () => {
    setCalendarModalVisible(true);
  };

  const onModalClose = () => {
    setCalendarModalVisible(false);
  };

  // NOTE: HANDLE DATE CHANGE
  const handleDateChange = (date, type) => {
    if (type === "END_DATE") {
      setSelectedDates((prev) => {
        return { ...prev, selectedEndDate: date };
      });
    } else {
      setSelectedDates({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  };

  // HANDLE STAY DETAILS

  const handleStayDetailsChange = (key, calc = "inc") => {
    setStayDetails((prev) => {
      // VALIDATING FOR CHILDREN ADULTS AND ROOMS
      const decrementValidator = (key) => {
        if (key === "children") {
          return Math.max(0, prev[key] - 1);
        }

        return Math.max(1, prev[key] - 1);
      };
      return {
        ...prev,
        [key]: calc === "inc" ? prev[key] + 1 : decrementValidator(key),
      };
    });
  };

  // HANDLE SEARCH

  const searchPlaces = () => {
    if (
      !route.params ||
      !selectedDates.selectedStartDate ||
      !selectedDates.selectedEndDate
    ) {
      Alert.alert("Invalid details", "Please provide all details", [
        {
          text: "Cancel",
          onPress: () => console.log("cancel"),
        },
        { text: "OK", onPress: () => console.log("ok") },
      ]);
    }

    if (
      route.params &&
      selectedDates.selectedStartDate &&
      selectedDates.selectedEndDate
    ) {
      navigation.navigate("Places", {
        stayDetails: stayDetails,
        selectedDates: selectedDates,
        place: route.params?.searchedInput,
      });
    }
  };

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Header />

      <ScrollView>
        <View style={styles.searchWrap}>
          {/* DESTINATION */}
          <Pressable
            onPress={() => navigation.navigate("Search")}
            style={styles.searchSection}
          >
            <Feather name="search" size={24} color="black" />
            <Text onPress={() => navigation.navigate("Search")}>
              {route?.params?.searchedInput
                ? route?.params?.searchedInput
                : "Enter your destination"}
            </Text>
          </Pressable>
          {/* SELECTED DATES */}
          <Pressable onPress={onModalOpen} style={styles.searchSection}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text style={{ opacity: 0.7 }}>
              {selectedDates.selectedStartDate
                ? formatDates(selectedDates.selectedStartDate)
                : "Start Date"}{" "}
              •{" "}
              {selectedDates.selectedEndDate
                ? formatDates(selectedDates.selectedEndDate)
                : "End Date"}{" "}
            </Text>
          </Pressable>
          {/* ROOM AND GUEST */}
          <Pressable
            style={styles.searchSection}
            onPress={() => setRoomModalVisible((prev) => !prev)}
          >
            <Ionicons name="person-outline" size={24} color="black" />
            <Text style={{ color: "red" }}>
              {stayDetails.rooms} room • {stayDetails.adults} adults •{" "}
              {stayDetails.children} children
            </Text>
          </Pressable>
          {/* SEARCH BUTTON */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={searchPlaces}
            style={[styles.searchSection, { backgroundColor: "#003580" }]}
          >
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>

        <TravelMore />
      </ScrollView>
      {/* NOTE: CALENDAR MODAL */}
      <Modal
        hasBackdrop
        backdropOpacity={0.5}
        onBackButtonPress={onModalClose}
        onBackdropPress={onModalClose}
        isVisible={isCalendarModalVisible}
        collapsable
        style={styles.dateModal}
      >
        <View style={styles.calendarView}>
          <Text style={styles.modalTitle}>Select Stay Dates</Text>
          <CalendarPicker
            onDateChange={handleDateChange}
            allowRangeSelection={true}
            allowBackwardRangeSelect={true}
            todayBackgroundColor="#003580"
            todayTextStyle={{ color: "white" }}
            selectedRangeStyle={{ backgroundColor: "#FFC72C" }}
            nextTitleStyle={styles.calendarActionButton}
            previousTitleStyle={styles.calendarActionButton}
            selectedDayTextStyle={{ color: "white" }}
          />
          <TouchableOpacity
            style={styles.modalSubmitButton}
            activeOpacity={0.7}
          >
            <Text style={styles.modalSubmitText} onPress={onModalClose}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* NOTE: ROOM SELECTION MODAL */}
      <Modal
        hasBackdrop
        backdropOpacity={0.5}
        onBackButtonPress={() => setRoomModalVisible((prev) => !prev)}
        onBackdropPress={() => setRoomModalVisible((prev) => !prev)}
        isVisible={isRoomModalVisible}
        collapsable
        style={styles.dateModal}
      >
        <View style={styles.stayDetailsView}>
          <Text style={styles.modalTitle}>Select rooms and guests</Text>
          <View style={styles.stayDetailsSection}>
            <Text style={styles.stayDetailsSectionTitle}>Rooms</Text>
            <View style={styles.stayDetailsActionContainer}>
              <TouchableOpacity
                onPress={() => handleStayDetailsChange("rooms", "dec")}
                style={styles.stayDetailsAction}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{stayDetails.rooms}</Text>
              <TouchableOpacity
                onPress={() => handleStayDetailsChange("rooms")}
                style={styles.stayDetailsAction}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.stayDetailsSection}>
            <Text style={styles.stayDetailsSectionTitle}>Adults</Text>
            <View style={styles.stayDetailsActionContainer}>
              <TouchableOpacity
                onPress={() => handleStayDetailsChange("adults", "dec")}
                style={styles.stayDetailsAction}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{stayDetails.adults}</Text>
              <TouchableOpacity
                onPress={() => handleStayDetailsChange("adults")}
                style={styles.stayDetailsAction}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.stayDetailsSection}>
            <Text style={styles.stayDetailsSectionTitle}>Children</Text>
            <View style={styles.stayDetailsActionContainer}>
              <TouchableOpacity
                onPress={() => handleStayDetailsChange("children", "dec")}
                style={styles.stayDetailsAction}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{stayDetails.children}</Text>
              <TouchableOpacity
                onPress={() => handleStayDetailsChange("children")}
                style={styles.stayDetailsAction}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.modalSubmitButton}
            activeOpacity={0.7}
          >
            <Text
              style={styles.modalSubmitText}
              onPress={() => setRoomModalVisible((prev) => !prev)}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchWrap: {
    margin: 20,
    borderWidth: 3,
    borderColor: "#FFC72C",
    borderRadius: 6,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    gap: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: "#FFC72C",
    borderWidth: 2,
  },

  dateModal: {
    padding: 0,
    margin: 0,
    justifyContent: "flex-end",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 18,
    paddingBottom: 10,
    marginBottom: 10,
    fontWeight: "800",
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  calendarView: {
    minHeight: 400,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  calendarActionButton: {
    color: "white",
    backgroundColor: "#003580",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  modalSubmitButton: {
    height: 50,
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: "#003580",
    justifyContent: "center",
  },
  modalSubmitText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  searchText: {
    flex: 1,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
  // NOTE: STAY DETAILS MODAL
  stayDetailsView: {
    minHeight: 240,
    padding: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: "space-between",
    backgroundColor: "white",
    gap: 25,
  },
  stayDetailsSection: {
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  stayDetailsSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stayDetailsActionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  stayDetailsAction: {
    width: 30,
    height: 30,
    backgroundColor: "#dedede",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
