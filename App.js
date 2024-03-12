import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',      
    }}>
      <Text 
      >
        Hello World!Try editing me! 🎉
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

