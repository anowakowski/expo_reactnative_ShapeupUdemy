import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Welcome = () => {
  const [loaded, error] = useFonts({
    Kameron: require('../../assets/fonts/Kameron-Bold.ttf'),
  });
  
  if (!loaded){
    return null;
  }


  return (
    <View>
      <Text style={{
        fontFamily: "Kameron",
        fontSize: 27,
        textAlign: "center",
        color: '#92400e'
        }}>Welcome</Text>
    </View>
  );
}

export default Welcome;