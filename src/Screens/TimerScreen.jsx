import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

const TimerScreen = () => {
  const [roundDuration, setRoundDuration] = useState(60);
  const [restDuration, setRestDuration] = useState(3);
  const [numberOfRounds, setNumberOfRounds] = useState(2);
  const [currentRound, setCurrentRound] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(roundDuration);
  const [isResting, setIsResting] = useState(false);
  const [resetFlag, setResetFlag] = useState(false);

  useEffect(() => {
    setTime(isResting ? restDuration : roundDuration);
  }, [roundDuration, restDuration, isResting, resetFlag]);

  return (
    <View className="pt-[30%] items-center min-h-screen bg-gray-200">
      <Text className="text-5xl mb-4">
        {isResting
          ? isResting
            ? "Resting"
            : `Round ${currentRound}`
          : currentRound === 1 && time === roundDuration
          ? "Start"
          : currentRound === numberOfRounds && time === 0
          ? "Finished"
          : "Paused"}
      </Text>

      <Text className="text-5xl">
        {`${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${time % 60}`}
      </Text>
      <View className="flex-row mt-4">
        <TouchableOpacity className="mx-4 bg-white px-4 py-1 rounded-lg">
          <Text className="text-lg text-green-500">START</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mx-4 bg-white px-4 py-1 rounded-lg">
          <Text className="text-lg text-red-500">PAUSE</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mx-4 bg-white px-4 py-1 rounded-lg">
          <Text className="text-lg text-blue-500">RESET</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-8">
        <Text className="text-xl text-slate-500">Round Duration (seconds)</Text>
        <TextInput
          className="text-2xl text-neutral-950"
          value={roundDuration.toString()}
          onChangeText={(text) => setRoundDuration(parseInt(text) || 0)}
          keyboardType="numeric"
          editable={!isRunning}
        />
        <Text className="text-xl text-slate-500">Rest Duration (seconds)</Text>
        <TextInput
          className="text-2xl text-neutral-950"
          value={restDuration.toString()}
          onChangeText={(text) => setRestDuration(parseInt(text) || 0)}
          keyboardType="numeric"
          editable={!isRunning}
        />
        <Text className="text-xl text-slate-500">Number of Rounds</Text>
        <TextInput
          className="text-2xl text-neutral-950"
          value={numberOfRounds.toString()}
          onChangeText={(text) => setNumberOfRounds(parseInt(text) || 0)}
          keyboardType="numeric"
          editable={!isRunning}
        />
      </View>
    </View>
  );
};

export default TimerScreen;
