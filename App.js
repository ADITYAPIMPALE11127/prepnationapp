import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/navbar'; 
import CustomButton from './src/atoms/CustomButton.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar /> 
      <CustomButton 
        style={{ width: 150, height: 60 }} 
        title="Click Me"
        useTouchableOpacity={true} 
        mode="contained"
        onPress={() => console.log('Button Pressed')}
      />
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
