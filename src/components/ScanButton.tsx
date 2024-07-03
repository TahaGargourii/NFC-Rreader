import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native';
import NfcManager, { NfcTech, NfcEvents } from 'react-native-nfc-manager';

const ScanButton = () => {
  const [isScanning, setIsScanning] = useState(false);

  const startNfc = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.NfcA);
      const tag = await NfcManager.getTag();
      Alert.alert('NFC Tag', JSON.stringify(tag));
      NfcManager.setEventListener(NfcEvents.DiscoverTag, () => {
        NfcManager.setAlertMessageIOS('NFC Tag Found');
        NfcManager.unregisterTagEvent().catch(() => 0);
      });
    } catch (ex) {
      console.warn(ex);
    } finally {
      NfcManager.cancelTechnologyRequest().catch(() => 0);
    }
  };

  const handlePress = () => {
    if (!isScanning) {
      setIsScanning(true);
      startNfc().finally(() => setIsScanning(false));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress} disabled={isScanning}>
        <Text style={styles.buttonText}>Tap Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontStyle: 'italic',
  },
});

export default ScanButton;
