import {
  Animated,
  Easing,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { data } from "../utils/placeData";
import SearchedCard from "../components/SearchedCard";
const PlaceScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 18,
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
            marginLeft: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={24} color="#1E7DFC" />
          <Text style={{ fontWeight: 500, color: "#1E7DFC" }}>Back</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={styles.searchedContainer}>
      <View style={styles.filterSection}>
        <Pressable style={styles.filter}>
          <Octicons name="arrow-switch" size={20} color="black" />
          <Text style={styles.filterText}>Sort By</Text>
        </Pressable>
        <Pressable style={styles.filter}>
          <Ionicons name="filter" size={24} color="black" />
          <Text style={styles.filterText}>Filter</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Maps", {
              data: data
                .filter((item) => item.place === route.params?.place)
                .flatMap((item) => item.properties),
            })
          }
          style={styles.filter}
        >
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color="black"
          />
          <Text style={styles.filterText}>Map</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.resultList}>
        {data
          .filter((item) => item.place === route.params?.place)
          .map((item) =>
            item.properties.map((item, index) => (
              <SearchedCard
                key={index}
                searchedData={route.params}
                propertyData={item}
              />
            ))
          )}
      </ScrollView>
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  searchedContainer: {
    flex: 1,
  },
  filterSection: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: "white",
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  filterText: {
    fontSize: 14,
  },
  //   NOTE: SEARCHED LIST
  resultList: {
    backgroundColor: "#F5F5F5",
    margin: 20,
  },
});
