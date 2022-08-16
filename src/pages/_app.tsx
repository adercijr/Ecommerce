import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/toggle.css'
import '../styles/Swiper.css'
import '../styles/SwiperProduct.css'
import { FiltersProvider } from '../providers/Filters'

function MyApp({ Component, pageProps }) {
  return (
    <FiltersProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </FiltersProvider>
  )
}

export default MyApp
