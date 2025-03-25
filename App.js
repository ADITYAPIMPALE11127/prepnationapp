import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper'; 
import TestScreen from './src/components/TestScreen';

export default function App() {
  return (
    <PaperProvider> 
      <View style={styles.container}>
        <TestScreen /> 
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
