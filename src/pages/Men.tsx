import {
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  Text
} from '@chakra-ui/react'
import { useLayoutEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import ProductCard from '../components/Product/Card'

export default function Men() {
  const [whell, setWhell] = useState(false)
  const targetRef = useRef()
  const [divWidth, setDivWidth] = useState(0)

  const data = [
    {
      id: 1,
      brand: 'Nike',
      description: 'Air Zoom Pegasus 39',
      variants: [
        { id: 1, src: '/images/trainer1.webp', price: 109.99, discount: 10 },
        { id: 2, src: '/images/trainer2.webp', price: 109.99, discount: 0 },
        { id: 3, src: '/images/trainer3.webp', price: 109.99, discount: 10 },
        { id: 4, src: '/images/trainer4.webp', price: 109.99, discount: 60 },
        { id: 5, src: '/images/trainer3.webp', price: 109.99, discount: 60 },
        { id: 6, src: '/images/trainer1.webp', price: 109.99, discount: 60 },
        { id: 67, src: '/images/trainer2.webp', price: 109.99, discount: 60 }
      ]
    },
    {
      id: 2,
      brand: 'Nike',
      description: 'Air Zoom Pegasus 39',
      variants: [
        { id: 1, src: '/images/trainer1.webp', price: 109.99, discount: 10 },
        { id: 2, src: '/images/trainer2.webp', price: 109.99, discount: 0 },
        { id: 3, src: '/images/trainer3.webp', price: 109.99, discount: 10 },
        { id: 4, src: '/images/trainer4.webp', price: 109.99, discount: 60 }
      ]
    },
    {
      id: 3,
      brand: 'Nike',
      description: 'Air Zoom Pegasus 39',
      variants: [
        { id: 1, src: '/images/trainer1.webp', price: 109.99, discount: 10 },
        { id: 2, src: '/images/trainer2.webp', price: 109.99, discount: 0 },
        { id: 3, src: '/images/trainer3.webp', price: 109.99, discount: 10 },
        { id: 4, src: '/images/trainer4.webp', price: 109.99, discount: 60 }
      ]
    },
    {
      id: 4,
      brand: 'Nike',
      description: 'Air Zoom Pegasus 39',
      variants: [
        { id: 1, src: '/images/trainer1.webp', price: 109.99, discount: 10 },
        { id: 2, src: '/images/trainer2.webp', price: 109.99, discount: 0 },
        { id: 3, src: '/images/trainer3.webp', price: 109.99, discount: 10 },
        { id: 4, src: '/images/trainer4.webp', price: 109.99, discount: 60 }
      ]
    }
  ]

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
  useLayoutEffect(() => {
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

  function whelling(e) {
    if (e > 0) {
      setWhell(true)
    } else {
      setWhell(false)
    }
  }

  return (
    <Flex
      m="auto"
      direction="column"
      align="center"
      onWheel={(e) => whelling(e.deltaY)}
      w="100%"
    >
      <Header />
      <Flex w="100%" gap={2} pt="5rem">
        {isWide && <Menu hide={whell} />}
      </Flex>

      <Grid
        w="100%"
        maxW="1680px"
        pt="4rem"
        templateColumns={{ base: '1fr', lg: '25% 1fr' }}
        templateRows="50px 1fr"
      >
        <GridItem bg="green.200" h="50px" w="100%" colSpan={2} />
        {isWide && <GridItem bg="red.200" h="700px" w="100%" />}
        <GridItem w="100%" px={{ base: 2, md: 6 }}>
          <Text fontSize="1.5rem" fontWeight={600}>
            Men's Shoes & Clothing
          </Text>
          <Grid
            templateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr' }}
            gridTemplateRows="1fr 1fr 1fr"
            gap={{ base: 2, md: 2 }}
            mt="1rem"
          >
            {data.map((prod) => (
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
