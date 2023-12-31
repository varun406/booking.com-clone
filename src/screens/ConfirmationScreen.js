import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import BookNowCard from "../components/BookNowCard";

const ConfirmationScreen = ({ navigation }) => {
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
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
          <Text style={{ fontWeight: 500, color: "#1E7DFC" }}>Rooms</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <BookNowCard data={route.params} />
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
