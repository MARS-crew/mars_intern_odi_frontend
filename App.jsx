// ** React Imports
import React from 'react'

// ** RN Imports
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/pages'

// ** Redux Imports
import { store } from './src/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
