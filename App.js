import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Equipe from './components/Equipe';

export default function App() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <Equipe />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff'
  },
});
