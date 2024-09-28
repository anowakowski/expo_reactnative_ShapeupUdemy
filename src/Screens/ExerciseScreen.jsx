import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../Firebase/config";

const ExerciseScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  const [gifUrl, setGifUrl] = useState(null);

  const fetchGifUrl = async () => {
    try {
      const storageRef = ref(storage, `AllExercieses/${item.gif_url}`);
      const url = await getDownloadURL(storageRef);
      //console.log("url", url);
      setGifUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGifUrl();
  }, []);

  //console.log(item);
  return (
    <View className="flex-1">
      {gifUrl ? (
        <Image source={{ uri: gifUrl }} className="w-full h-80" />
      ) : (
        <View className="items-center justify-center">
          <ActivityIndicator size={"large"} color={"grey"} />
        </View>
      )}
      <ScrollView>
        <View className="mt-4 mx-3">
          <Text className="text-2xl font-bold text-center mb-1">
            {item.title}
          </Text>
          <View className="flex-row">
            {item.category.split(",").map((cat, index) => (
              <View key={index} className="mr-2">
                <View className="bg-gray-300 px-2 rounded-2xl pb-1">
                  <Text className="text-fuchsia-500">#{cat}</Text>
                </View>
              </View>
            ))}
          </View>
          <View className="flex-row items-center space-x-2 mt-2">
            <Text className="font-semibold text-blue-500">Intensity:</Text>
            <Text className="text-cyan-400 italic text-base">
              {item.intensity}
            </Text>
          </View>
          <Text className="text-xl font-semibold mt-4">Instructions:</Text>
          <View className="mt-2">
            {item.instructions.map((instruction) => (
              <View
                key={instruction.step}
                className="flex-row items-center mb-2"
              >
                <Text className="text-base text-gray-600">
                  {instruction.step}.
                </Text>
                <Text className="ml-2 text-base">{instruction.text}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-center space-x-3">
          <TouchableOpacity className="items-center justify-center w-14 h-14 bg-red-500 rounded-full">
            <Text className="text-white text-3xl">-</Text>
          </TouchableOpacity>
          <Text className='text-xl font-bold'>10 secs</Text>
          <TouchableOpacity className="items-center justify-center w-14 h-14 bg-green-500 rounded-full">
            <Text className="text-white text-3xl">+</Text>
          </TouchableOpacity>
        </View>
        <View className='mt-4 flex-row items-center justify-center mb-10 space-x-4'>
          <TouchableOpacity>
            <Text className='text-blue-500 text-xl py-2 border rounded-lg border-blue-500 px-4'>START</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className='text-gray-500 text-xl py-2 border rounded-lg border-blue-500 px-4'>RESET</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExerciseScreen;
