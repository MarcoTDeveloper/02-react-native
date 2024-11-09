import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/Loading';

export function GroupsScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const groupsData = await groupsGetAll()
      setGroups(groupsData)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert('Turmas', 'Não foi possível carregar as turmas!')
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpenGroup(groupName: string) {
    navigation.navigate('players', { group: groupName })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  },[]))

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subTitile='jogue com a sua turma!' />

      {isLoading ? <Loading /> : (
        <FlatList
          data={groups}
          keyExtractor={(group) => group}
          renderItem={({ item }) => {
            return (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )
          }}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={<ListEmpty message='Que tal cadastrar uma turma?' />}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  )
}