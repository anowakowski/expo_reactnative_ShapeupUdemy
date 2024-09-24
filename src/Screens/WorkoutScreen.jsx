import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Welcome from '../Components/Welcome';
import WorkoutOTD from '../Components/WorkoutOTD';
import Separator from '../Components/Separator';

const WorkoutScreen = () => {
  return (
    <SafeAreaView className='mx-[1%]'>
      <Welcome />
      <WorkoutOTD />
      <Separator />
    </SafeAreaView>
  );
}

export default WorkoutScreen;