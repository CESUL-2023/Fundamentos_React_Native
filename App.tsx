import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#131016', padding: 24 }}>
      <Text style={{ color: '#FDFCFE', fontSize: 24, fontWeight: 'bold', marginTop: 48 }} >Nome do Grupo</Text>
      <Text style={{ color: '#6b6b6b', fontSize: 16, }} >Terça, 8 de Agosto de 2023.</Text>
    </View>
  );
}

