import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.groupName} >Nome do Grupo</Text>
            <Text style={styles.groupDate} >Terça, 8 de Agosto de 2023.</Text>

            <TextInput style={styles.input} placeholder='Nome do participante' placeholderTextColor="#6B6B6B" />
        </View>
    );
}
