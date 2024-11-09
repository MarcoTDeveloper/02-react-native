import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupsGetAll } from "./groupsGetAll"
import { STORAGE_KEYS } from "@storage/storageConfig"

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll()
    const groups = storedGroups.filter((group) => group !== groupDeleted)
    const groupsFormatted = JSON.stringify(groups)
    
    await AsyncStorage.setItem(STORAGE_KEYS.GROUP, groupsFormatted)
    await AsyncStorage.removeItem(`${STORAGE_KEYS.PLAYERS}-${groupDeleted}`)

  } catch (error) {
    throw error
  }
}