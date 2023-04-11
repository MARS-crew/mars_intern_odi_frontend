// ** RN Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// ** Other View Imports
import RegisterScreen from './register'
import LoginScreen from './login'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default RootNavigator
