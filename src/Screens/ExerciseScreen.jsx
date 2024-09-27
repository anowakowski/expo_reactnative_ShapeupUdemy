import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ExerciseScreen = () => {
  const route = useRoute();
  const { item } = route.params;
  console.log(item);
  return (
    <View>
      <Text>ExerciseScreen</Text>
    </View>
  );
};

export default ExerciseScreen;
