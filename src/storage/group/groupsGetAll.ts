import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEYS } from "@storage/storageConfig"

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(STORAGE_KEYS.GROUP)
    const groups: string[] = storage ? JSON.parse(storage) : []
  
    return groups
  } catch (error) {
    throw error
  }
}