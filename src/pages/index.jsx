// ** RN Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// ** Other View Imports
import HomeScreen from './home'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
