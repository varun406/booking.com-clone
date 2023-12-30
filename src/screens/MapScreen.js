import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const MapScreen = ({ navigation }) => {
  const route = useRoute();
  const mapView = useRef(null);

  const coordinates = [];
  const details = route.params?.data?.map((property) => {
    coordinates.push({
      latitude: Number(property.latitude),
      longitude: Number(property.longitude),
    });
  });

  useEffect(() => {
    setTimeout(() => {
      mapView.current.fitToCoordinates(coordinates, {
        edgePadding: {
          top: 190,
          left: 190,
          bottom: 190,
          right: 190,
        },
      });
    }, 1000);
  }, [route, details]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Maps",
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
    <View style={{ flex: 1 }}>
      <MapView ref={mapView} provider={PROVIDER_GOOGLE} style={{ flex: 1 }}>
        {route.params?.data?.map((property, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: Number(property.latitude),
              longitude: Number(property.longitude),
            }}
            title={property.name}
            description={property.address}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>₹{property.newPrice}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  marker: {
    padding: 5,
    backgroundColor: "#003580",
    borderRadius: 6,
  },
  markerText: {
    fontSize: 12,
    fontWeight: "600",
    color: "white",
  },
});
