import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/toggle.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
