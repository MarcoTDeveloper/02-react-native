import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEYS } from "@storage/storageConfig"
import type { PlayerStorageDTO } from "./PlayerStorageDTO"

export async function playersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${STORAGE_KEYS.PLAYERS}-${group}`)
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

    return players
  } catch (error) {
    throw error
  }
}