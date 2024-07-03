declare module 'react-native-nfc-manager' {
    import { EmitterSubscription } from 'react-native';
  
    export enum NfcTech {
      NfcA = 'NfcA',
      NfcB = 'NfcB',
      NfcF = 'NfcF',
      NfcV = 'NfcV',
      IsoDep = 'IsoDep',
      MifareClassic = 'MifareClassic',
      MifareUltralight = 'MifareUltralight',
      Ndef = 'Ndef',
    }
  
    export enum NfcEvents {
      DiscoverTag = 'NfcManagerDiscoverTag',
      StateChange = 'NfcManagerStateChange',
    }
  
    export interface Tag {
      id: string;
      techTypes: string[];
      [key: string]: any;
    }
  
    export interface NfcManager {
      start: () => Promise<void>;
      isSupported: () => Promise<boolean>;
      requestTechnology: (tech: NfcTech | NfcTech[], options?: object) => Promise<void>;
      getTag: () => Promise<Tag>;
      setEventListener: (eventType: NfcEvents, listener: (data: any) => void) => EmitterSubscription;
      unregisterTagEvent: () => Promise<void>;
      cancelTechnologyRequest: () => Promise<void>;
      setAlertMessageIOS: (message: string) => void;
    }
  
    const NfcManager: NfcManager;
  
    export default NfcManager;
  }
  