import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { theme } from "../chakra/theme"

import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App