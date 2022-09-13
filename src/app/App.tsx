import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ProfileScreen } from '../profile/ProfileScreen';

const App = () => {
  const [screen, setScreen] = useState<'profile' | 'prescription'>('profile');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Screen = screen === 'profile' ? ProfileScreen : PrescriptionScreen;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <Screen setScreen={setScreen} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
