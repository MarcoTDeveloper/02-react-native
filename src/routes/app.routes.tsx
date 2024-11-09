import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GroupsScreen } from "@screens/Groups"
import { NewGroupScreen } from "@screens/NewGroup"
import { PlayersScreen } from "@screens/Players"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="groups"
        component={GroupsScreen}
      />

      <Screen
        name="new"
        component={NewGroupScreen}
      />

      <Screen
        name="players"
        component={PlayersScreen}
      />
    </Navigator>
  )
}