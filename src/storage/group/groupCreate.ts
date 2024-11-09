import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEYS } from "@storage/storageConfig"
import { groupsGetAll } from "./groupsGetAll"
import { AppError } from "@utils/AppError"

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll()
    const groupsAlreadyExists = storedGroups.includes(newGroup)

    if (groupsAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com este nome!')
    }

    const storage = JSON.stringify([...storedGroups ,newGroup])
    
    await AsyncStorage.setItem(STORAGE_KEYS.GROUP, storage)
  } catch (error) {
    throw error
  }
}