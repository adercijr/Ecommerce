import { Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={{ sm: '50vh', md: '65vh' }}
      justify="center"
      position="relative"
      align="center"
    >
      <Image
        src="/images/bannerHome/image1.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <Flex w="100%" maxW="1680px">
        <Flex
          w="600px"
          direction="column"
          justify="space-between"
          zIndex={2}
          px={10}
        >
          <Text fontWeight={400}>SPRING / SUMMER COLLECTION 2022</Text>
          <Text fontSize={{ sm: '3rem', md: '4rem' }} fontWeight={400}>
            Get up to 30% Off New Arrivals
          </Text>
          <Flex>
            <Button colorScheme={'cyan'}>Shop Now</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
