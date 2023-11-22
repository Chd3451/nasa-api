import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Home from './src/components/pages/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#11194A",
  },
});