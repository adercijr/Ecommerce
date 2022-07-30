import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": '#222'
        }
    },
    fonts: {
        body: 'Montserrat, sans-serif',
        heading: 'Montserrat, sans-serif',
    },
    styles: {
        global: {
            body: {
                color: 'blackAlpha.800',
                bg: 'white'
            }
        }
    }
})
