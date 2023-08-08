import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

    const participants = ['Cleiton', 'Maria', 'Ana', 'Larissa', 'Lucas', 'Fabio', 'João', 'Carlos', 'Jonh', 'Rodrigo']

    function handleParticipantAdd() {


        if (participants.includes("Cleiton")) {
            return Alert.alert("Participante existe", "Participante já existe com esse nome")
        }

    }

    function handleParticipantRemove() {

        Alert.alert("Remover", "Deseja remover o participante ?", [
            { text: 'Sim', onPress: () => Alert.alert("Deletado") },
            { text: 'Não', style: 'cancel' }
        ])

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

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={handleParticipantRemove} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() =>
                    <Text style={styles.listEmptyText}> Ninguém chegou no evento ainda ! Caso precise pode adicionar participantes a sua lista</Text>
                }
            />





        </View>
    );
}
