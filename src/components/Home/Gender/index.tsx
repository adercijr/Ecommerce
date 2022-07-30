import { Flex, ScaleFade, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

export function GenderCard({ gender }) {
  const [hover, setHover] = useState(false)
  const isWide = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex
      w="400px"
      h="300px"
      position="relative"
      direction="column"
      justify="space-between"
      px={5}
      py={10}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      filter="grayscale(40%)"
      _hover={{
        filter: 'grayscale(0%)',
        boxShadow: '0 0 30px #bbb',
        transform: 'scale(1.02)'
      }}
      cursor="pointer"
      boxShadow={'0 0 10px #ccc'}
      transition="all 0.7s"
    >
      <Flex direction="column" zIndex={2}>
        <Text fontSize="1.5rem" fontWeight={600} textTransform="capitalize">
          {gender}
        </Text>
        {isWide && <Text>New Trend</Text>}
      </Flex>
      <Image
        src={`/images/${gender}.webp`}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      {isWide && (
        <Flex
          w="100px"
          h="50px"
          zIndex={2}
          direction="column"
          justify="space-around"
          align="center"
        >
          <ScaleFade initialScale={0.5} in={hover}>
            <Flex>
              <Text fontWeight={600}>Shop Now</Text>
            </Flex>
          </ScaleFade>
          <Flex
            w={hover ? '100%' : '0px'}
            bg="cyan.600"
            h="3px"
            transition={'all 0.7s'}
          ></Flex>
        </Flex>
      )}
    </Flex>
  )
}
