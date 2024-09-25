import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Welcome from "../Components/Welcome";
import WorkoutOTD from "../Components/WorkoutOTD";
import Separator from "../Components/Separator";
import Category from "../Components/Category";
import Exercise from "../Components/Exercise";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const WorkoutScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView className="mx-[1%]">
          <Welcome />
          <WorkoutOTD />
          <Separator />
          <Category />
          <Separator />
          <Exercise />
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default WorkoutScreen;
