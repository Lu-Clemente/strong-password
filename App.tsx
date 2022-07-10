import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CreatePassword from './src/screens/CreatePassword';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CreatePassword />
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
