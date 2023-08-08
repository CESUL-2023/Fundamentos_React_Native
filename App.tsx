import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.groupName} >Nome do Grupo</Text>
      <Text style={styles.groupDate} >Terça, 8 de Agosto de 2023.</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, backgroundColor: '#131016', padding: 24
  },
  groupName: {
    color: '#FDFCFE', fontSize: 24, fontWeight: 'bold', marginTop: 48
  },
  groupDate: {
    color: '#6b6b6b', fontSize: 16,
  }

});
