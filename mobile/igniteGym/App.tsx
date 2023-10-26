import React from 'react'
import { LogBox, StatusBar, View } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { theme } from './src/themes'
import { useEffect } from 'react'
import { Routes } from './src/routes'

function App(): JSX.Element {
  useEffect(() => {
    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ])
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <Routes />
    </NativeBaseProvider>
  )
}

export default App
