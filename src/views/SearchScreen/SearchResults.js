import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchResultContainer}>
      <FlatList
        data={data}
        ItemSeparatorComponent={<View style={{ height: 20 }} />}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }

            return (
              <Pressable
                onPress={() => {
                  navigation.navigate("Home", {
                    searchedInput: item.place,
                  });
                }}
                style={styles.searchedPlace}
              >
                <Image
                  source={{ uri: item.placeImage }}
                  style={styles.searchedImage}
                />
                <View style={styles.searchedPlaceDetail}>
                  <Text style={styles.searchedPropertyName}>{item.place}</Text>
                  <Text style={styles.searchedPropertyDesc}>
                    {item.shortDescription}
                  </Text>
                  <Text style={styles.searchedProperties}>
                    {item.properties.length} Properties
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  searchResultContainer: {
    marginTop: 20,
  },
  searchedPlace: {
    flexDirection: "row",
    gap: 20,
  },
  searchedImage: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  searchedPlaceDetail: {
    justifyContent: "center",
  },
  searchedPropertyName: {
    fontWeight: "900",
    fontSize: 15,
  },
  searchedPropertyDesc: {
    fontWeight: "400",
    fontSize: 14,
  },
  searchedProperties: {
    color: "grey",
  },
});
