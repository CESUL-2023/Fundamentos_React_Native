import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';


export function Home() {

    const [participants, setParticipants] = useState<String[]>([])
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {


        if (participants.includes(participantName)) {
            return Alert.alert('Paticipante encontrado', 'Já existe um participante com esse nome ');
        }

        setParticipants([...participants, participantName])
        setParticipantName('')

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
                <TextInput style={styles.input} placeholder='Nome do participante'
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

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
