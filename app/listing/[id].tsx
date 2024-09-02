import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function ListingDatails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ListingDatails {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
