import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import NfcManager from 'react-native-nfc-manager';
import ScanButton from '../components/ScanButton';


const App = () => {
  useEffect(() => {
    NfcManager.start();
  }, []);

  return (
    <View>
      <Text>Welcome to NFC App</Text>
      <ScanButton/>
    </View>
  );
};

export default App;
