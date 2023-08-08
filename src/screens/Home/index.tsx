import { Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.groupName} >Nome do Grupo</Text>
            <Text style={styles.groupDate} >Terça, 8 de Agosto de 2023.</Text>
        </View>
    );
}
