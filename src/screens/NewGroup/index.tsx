import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroupScreen() {
  const [groupName, setGroupName] = useState('')
  const navigation = useNavigation()

  async function handleCreateNewGroup() {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome da turma!')
      }

      await groupCreate(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.')
        console.log(error)
      }
    }
  }
  
  return (
    <Container>
    
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subTitile="Crie uma turma para adicionar pessoas!"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroupName}
        />
        <Button
          title="Criar"
          style={{ marginTop: 8 }}
          onPress={handleCreateNewGroup}
        />
      </Content>
    </Container>
  )
}