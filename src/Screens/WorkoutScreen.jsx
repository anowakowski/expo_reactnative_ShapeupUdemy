import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Welcome from '../Components/Welcome';
import WorkoutOTD from '../Components/WorkoutOTD';
import Separator from '../Components/Separator';
import Category from '../Components/Category';

const WorkoutScreen = () => {
  return (
    <SafeAreaView className='mx-[1%]'>
      <Welcome />
      <WorkoutOTD />
      <Separator />
      <Category />
    </SafeAreaView>
  );
}

export default WorkoutScreen;