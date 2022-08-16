import {
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  Text
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import ProductCard from '../components/Product/Card'
import MenuAside from '../components/Menu/MenuAside'
import { useFilters } from '../providers/Filters'
import MessageBanner from '../components/Home/MessageBanner'

export default function Men() {
  const [whell, setWhell] = useState(false)
  const targetRef = useRef()
  const [divWidth, setDivWidth] = useState(0)

  const { filteredData } = useFilters()

  // holds the timer for setTimeout and clearInterval
  let movement_timer = null

  // the number of ms the window size must stay the same size before the
  // dimension state variable is reset
  const RESET_TIMEOUT = 100

  const test_dimensions = () => {
    // For some reason targetRef.current.getBoundingClientRect was not available
    // I found this worked for me, but unfortunately I can't find the
    // documentation to explain this experience
    if (targetRef.current) {
      setDivWidth(targetRef.current.offsetWidth)
    }
  }

  // This sets the dimensions on the first render
  useEffect(() => {
    setTimeout(test_dimensions, RESET_TIMEOUT)
    window.addEventListener('resize', () => {
      clearInterval(movement_timer)
      movement_timer = setTimeout(test_dimensions, RESET_TIMEOUT)
    })
  }, [])

  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex m="auto" direction="column" align="center" w="100%">
      <Header />
      <Flex w="100%" m="auto" direction="column" mt="5rem">
        <MessageBanner />
      </Flex>

      <Grid
        w="100%"
        maxW="1680px"
        templateColumns={{ base: '1fr', lg: '25% 1fr' }}
        templateRows="50px 1fr"
      >
        <GridItem h="50px" w="100%" colSpan={2} />
        {isWide && (
          <GridItem w="100%">
            <MenuAside />
          </GridItem>
        )}
        <GridItem w="100%" px={{ base: 2, md: 6 }}>
          <Flex direction="row" align="baseline" gap={1}>
            <Text fontSize="1.5rem" fontWeight={700}>
              Men's Shoes & Clothing
            </Text>
            <Text fontSize="0.9rem" fontWeight={400}>
              ({filteredData.length})
            </Text>
          </Flex>
          <Grid
            templateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr' }}
            gridTemplateRows="1fr 1fr 1fr"
            gap={{ base: 2, md: 2 }}
            mt="1rem"
          >
            {filteredData.map((prod) => (
              <GridItem
                key={prod.id}
                w="100%"
                h={divWidth * 1.5}
                ref={targetRef}
              >
                <ProductCard data={prod} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>

      <Footer />
    </Flex>
  )
}
