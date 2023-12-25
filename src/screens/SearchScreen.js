import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import SearchResults from "../views/SearchScreen/SearchResults";
import { data } from "../utils/placeData";

const SearchScreen = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            ref={inputRef}
            style={{ width: "90%" }}
            cursorColor="#000"
            placeholder="Enter your Destination"
            onChangeText={(val) => setInput(val)}
          />
          <Feather name="search" size={24} color="black" />
        </View>
        <SearchResults data={data} input={input} setInput={setInput} />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    margin: 20,
  },
  searchBar: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderColor: "#FFC72C",
    borderWidth: 4,
    borderRadius: 10,
  },
});
