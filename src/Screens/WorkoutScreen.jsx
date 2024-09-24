import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Welcome from '../Components/Welcome';
import WorkoutOTD from '../Components/WorkoutOTD';

const WorkoutScreen = () => {
  return (
    <SafeAreaView className='mx-[1%]'>
      <Welcome />
      <WorkoutOTD />
    </SafeAreaView>
  );
}

export default WorkoutScreen;