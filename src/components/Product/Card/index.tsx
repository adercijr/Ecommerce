import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'

type ProductCardProps = {
  data: {
    id: number
    brand: string
    description: string
    variants: {
      id: number
      src: string
      price: number
      discount: number
    }[]
  }
}

const Breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 200
  },
  630: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  790: {
    slidesPerView: 3,
    spaceBetween: 180
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  1100: {
    slidesPerView: 4,
    spaceBetween: 140
  },
  1400: {
    slidesPerView: 5,
    spaceBetween: 120
  },
  1550: {
    slidesPerView: 4,
    spaceBetween: 0
  }
}

export default function ProductCard({ data }: ProductCardProps) {
  const [currentProdut, setCurrentProduct] = useState(data.variants[0])
  const targetRef = useRef()
  const [divHeight, setDivHeight] = useState(60)

  // holds the timer for setTimeout and clearInterval
  let movement_timer = null

  // the number of ms the window size must stay the same size before the
  // dimension state variable is reset
  const RESET_TIMEOUT = 160

  const test_dimensions = () => {
    // For some reason targetRef.current.getBoundingClientRect was not available
    // I found this worked for me, but unfortunately I can't find the
    // documentation to explain this experience
    if (targetRef.current) {
      setDivHeight(targetRef.current.offsetHeight)
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

  return (
    <Flex w="100%" h="100%" direction="column" bg="white" align="center">
      <Flex w="100%" h="64%" position="relative">
        <Image layout="fill" src={currentProdut.src} />
      </Flex>

      <Flex w="90%" h="10%" position="relative">
        <Flex position="absolute" h="100%" w="100%">
          <Swiper
            style={{
              '--swiper-navigation-color': '#000',
              '--swiper-navigation-size': '25px'
            }}
            cssMode={true}
            navigation={true}
            modules={[Navigation, Pagination, Scrollbar]}
            breakpoints={Breakpoints}
          >
            {data.variants.map((card) => {
              return (
                <SwiperSlide key={card.id}>
                  <Box
                    ref={targetRef}
                    h="100%"
                    w={`${divHeight}px`}
                    border="1px"
                    borderColor={
                      currentProdut.id == card.id ? 'black' : 'gray.300'
                    }
                    _hover={{
                      borderColor: 'black'
                    }}
                    as="button"
                    position="relative"
                    onMouseEnter={() => setCurrentProduct(card)}
                  >
                    <Image src={card.src} layout="fill" />
                  </Box>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Flex>
      </Flex>

      <Flex w="100%" h="26%" direction="column" px={4} py={2}>
        <Flex w="100%" direction="column">
          <Text fontSize="0.7rem" mb="0.2rem">
            {data.brand}
          </Text>
          <Text fontSize="0.9rem" fontWeight={600}>
            {data.description}
          </Text>
        </Flex>
        <Flex w="100%" py={2}>
          {currentProdut.discount == 0 && (
            <Flex>
              <Text fontWeight={700}>£ {currentProdut.price}</Text>
            </Flex>
          )}
          {currentProdut.discount > 0 && (
            <Flex gap={3}>
              <Text fontWeight={700} color="cyan.700">
                £{' '}
                {(
                  currentProdut.price -
                  (currentProdut.price * currentProdut.discount) / 100
                ).toFixed(2)}
              </Text>
              <Flex fontWeight={400} fontSize="0.8rem" gap={1}>
                <Text>RRP </Text>
                <Text textDecoration="line-through">
                  {' '}
                  £ {currentProdut.price}
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
