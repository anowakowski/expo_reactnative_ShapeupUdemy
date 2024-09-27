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
    <View>
      {gifUrl ? (
        <Image source={{ uri: gifUrl }} className="w-full h-80" />
      ) : (
        <View className="items-center justify-center">
          <ActivityIndicator size={"large"} color={"grey"} />
        </View>
      )}
      <ScrollView>
        <View>
          <Text>{item.title}</Text>
          <Text>
            {item.category.split(",").map((cat, index) => (
              <View key={index}>
                <View>
                  <Text>#{cat}</Text>
                </View>
              </View>
            ))}
          </Text>
          <View>
            <Text>Intensity:</Text>
            <Text>{item.intensity}</Text>
          </View>
          <Text>Instructions:</Text>
          <View>
            {item.instructions.map((instruction) => (
              <View key={instruction.step}>
                <Text>{instruction.step}</Text>
                <Text>{instruction.text}</Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>10 secs</Text>
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>START</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>RESET</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExerciseScreen;
