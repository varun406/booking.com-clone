import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import RoomCard from "../components/RoomCard";
import BottomStickyButton from "../components/BottomStickyButton";

const AvailableRoomScreen = () => {
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
  } = route.params?.data || {};

  const [selectedRooms, setSelectedRooms] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Rooms",
      headerTitleAlign: "center",
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
          <Text style={{ fontWeight: 500, color: "#1E7DFC" }}>Back</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainerContentStyle}>
        {rooms?.map((room, index) => (
          <RoomCard
            key={index}
            name={room.name}
            payment={room.payment}
            refundable={room.refundable}
            newPrice={newPrice}
            oldPrice={oldPrice}
            isSelected={selectedRooms[index]?.name === room.name}
            onSelect={() =>
              setSelectedRooms((prev) => {
                if (selectedRooms[index]?.name === room.name) return prev;
                return [...prev, room];
              })
            }
            onRemove={() =>
              setSelectedRooms((prev) => {
                return prev.filter((existing) => existing.name !== room.name);
              })
            }
          />
        ))}
      </ScrollView>
      {selectedRooms.length > 0 && (
        <BottomStickyButton
          title="Reserve"
          onPress={() =>
            navigation.navigate("Confirmation", {
              ...route.params?.data,
              rooms: selectedRooms,
            })
          }
        />
      )}
    </View>
  );
};

export default AvailableRoomScreen;

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
  },
  scrollContainerContentStyle: {
    flexDirection: "column",
    gap: 15,
    padding: 20,
    paddingBottom: 80,
  },
});
