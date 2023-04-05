// ** React Imports
import React from 'react'
import { Text } from 'react-native'

// ** Redux Imports
import { store } from './src/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Text>Hello world</Text>
    </Provider>
  )
}

export default App
