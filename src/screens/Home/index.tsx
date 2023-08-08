import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

    function handleParticipantAdd() {
        console.log("Você clicou no botão de adicionar")
    }

    function handleParticipantRemove() {
        console.log("Você removeu o participante")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.groupName} >Nome do Grupo</Text>
            <Text style={styles.groupDate} >Terça, 8 de Agosto de 2023.</Text>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Nome do participante' placeholderTextColor="#6B6B6B" />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <Participant name="Cleiton" onRemove={handleParticipantRemove} />
            <Participant name="Maria" onRemove={handleParticipantRemove} />
            <Participant name="Ana" onRemove={handleParticipantRemove} />
        </View>
    );
}
