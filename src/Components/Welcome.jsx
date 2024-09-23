import { View, Text } from 'react-native'
import React from 'react'
//import { useFonts } from 'expo-font';
import {
    useFonts,
    Caveat_400Regular,
    Caveat_500Medium,
    Caveat_600SemiBold,
    Caveat_700Bold,
  } from '@expo-google-fonts/caveat';

const Welcome = () => {
  /*  
  const [loaded, error] = useFonts({
    Kameron: require('../../assets/fonts/Kameron-Bold.ttf'),
  });
  
  if (!loaded){
    return null;
  }
  */
  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
    Caveat_500Medium,
    Caveat_600SemiBold,
    Caveat_700Bold,
  });

  if (!fontsLoaded){
    return null;
  }

  let fontSize = 30;
  let paddingVertical = 6;  

  return (
    <View>
      <Text style={{
        //fontFamily: "Kameron",
        fontFamily: 'Caveat_400Regular',
        fontSize: fontSize,
        textAlign: "center",
        color: '#92400e'
        }}>Welcome</Text>
    </View>
  );
}

export default Welcome;