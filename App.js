import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/navbar'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar /> 
      <Text style={{ fontSize: 50 }}>Prep Nation</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
