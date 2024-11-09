import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PlayerStorageDTO } from "./PlayerStorageDTO";
import { STORAGE_KEYS } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { AppError } from "@utils/AppError";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group)
    const playerAlreadyExists = storedPlayers.filter((player) => player.name === newPlayer.name)

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Está pessoa já está adicionada em um time!')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])
    await AsyncStorage.setItem(`${STORAGE_KEYS.PLAYERS}-${group}`, storage)
  } catch (error) {
    throw error
  }
}