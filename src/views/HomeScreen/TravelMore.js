import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const data = [
  {
    title: "Genius",
    desc: " You are ate genius level one in our loyalty program",
  },
  {
    title: "Genius",
    desc: " You are ate genius level one in our loyalty program",
  },
  {
    title: "Genius",
    desc: " You are ate genius level one in our loyalty program",
  },
  {
    title: "Genius",
    desc: " You are ate genius level one in our loyalty program",
  },
  {
    title: "Genius",
    desc: " You are ate genius level one in our loyalty program",
  },
  {
    title: "Genius",
    desc: " You are ate genius level one in our loyalty program",
  },
];

const TravelMore = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <View>
      <Text style={styles.sectionTitle}>Travel More Spend Less</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.TravelCardScroll}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCard(index)}
            activeOpacity={0.8}
            style={[
              styles.TravelCard,
              selectedCard === index ? styles.selectedTravelCard : {},
            ]}
          >
            <Text
              style={[
                styles.TravelCardTitle,
                selectedCard === index ? styles.selectedTravelCardTitle : {},
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                styles.TravelCardDescription,
                selectedCard === index
                  ? styles.selectedTravelCardDescription
                  : {},
              ]}
            >
              {item.desc}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TravelMore;

const styles = StyleSheet.create({
  sectionTitle: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
  },
  TravelCardScroll: {
    marginLeft: 20,
    paddingRight: 20,
  },
  TravelCard: {
    width: 200,
    height: 150,
    borderColor: "#e0e0e0",
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    marginRight: 20,
    justifyContent: "center",
  },
  selectedTravelCard: {
    backgroundColor: "#003580",
  },
  TravelCardTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedTravelCardTitle: {
    fontWeight: "800",
    color: "white",
  },
  TravelCardDescription: {
    fontWeight: "400",
  },
  selectedTravelCardDescription: {
    fontWeight: "400",
    color: "white",
  },
});
