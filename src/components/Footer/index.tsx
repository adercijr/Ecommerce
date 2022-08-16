import {
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiHeart, FiTwitter } from 'react-icons/fi'
import { GrFacebook, GrInstagram } from 'react-icons/gr'

export default function Footer() {
  return (
    <Flex
      h={{ sm: '1000px', md: '700px', lg: '450px' }}
      w="100%"
      bg="gray.900"
      justify="center"
      direction="column"
      align="center"
      paddingX="2rem"
      paddingTop="4rem"
      mt="5rem"
    >
      <Grid
        w="100%"
        h="100%"
        maxW="1680px"
        gridTemplateColumns={{
          sm: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr 1fr'
        }}
        gridTemplateRows={{ sm: '1fr 1fr 1fr 1fr', md: '1fr 1fr', lg: '1fr' }}
        fontSize="0.9rem"
      >
        <GridItem w="100%" h="100%" p={4}>
          <Flex h="20%">
            <Text fontWeight={700} color="gray.200">
              CUSTOMER SERVICE
            </Text>
          </Flex>
          <Flex
            h="85%"
            direction="column"
            gap={4}
            color="gray.400"
            fontSize="0.8rem"
          >
            <Text>FAQ'S</Text>
            <Text>Orders & payment</Text>
            <Text>Delivery & returns</Text>
            <Text>Track order</Text>
          </Flex>
        </GridItem>

        <GridItem w="100%" h="100%" p={4}>
          <Flex h="20%">
            <Text fontWeight={700} color="gray.200">
              ABOUT US
            </Text>
          </Flex>
          <Flex
            h="85%"
            direction="column"
            gap={4}
            color="gray.400"
            fontSize="0.8rem"
          >
            <Text>Careers</Text>
            <Text>Terms & conditions</Text>
            <Text>Corporate</Text>
          </Flex>
        </GridItem>

        <GridItem w="100%" h="100%" p={4}>
          <Flex h="20%">
            <Text fontWeight={700} color="gray.200">
              GET IN TOUCH
            </Text>
          </Flex>
          <Flex
            h="85%"
            direction="column"
            gap={4}
            color="gray.400"
            fontSize="0.8rem"
          >
            <Text>
              Any questions? Let us know in store at 8th floor, 555 Madson St,
              New York, NY 10123 or call us on (+4) 90 711 5555
            </Text>
            <Flex gap={4}>
              <Icon as={GrFacebook} h="1.5rem" w="1.5rem" />
              <Icon as={GrInstagram} h="1.5rem" w="1.5rem" />
              <Icon as={FiTwitter} h="1.5rem" w="1.5rem" />
            </Flex>
          </Flex>
        </GridItem>

        <GridItem w="100%" h="100%" p={4}>
          <Flex h="20%">
            <Text fontWeight={700} color="gray.200">
              NEWSLETTER
            </Text>
          </Flex>
          <Flex
            h="85%"
            direction="column"
            gap={6}
            color="gray.400"
            fontSize="0.8rem"
          >
            <Input
              variant="flushed"
              placeholder="exemple@email.com"
              focusBorderColor="cyan.600"
              borderBottomColor="gray.500"
            />
            <Button colorScheme="cyan" w="50%" color="white" bg="cyan.700">
              SUBSCRIBE
            </Button>
          </Flex>
        </GridItem>
      </Grid>
      <Flex
        h="200px"
        w="100%"
        maxW="1680px"
        align="center"
        direction="column"
        justify="center"
      >
        <Image src="/images/payment-icons.svg" width="250px" height="50px" />
        <Text color="gray.400" fontSize="0.8rem" textAlign="center">
          Copyright ©2022 All rights reserved | This template is made with{' '}
          <Icon as={FiHeart} h="0.85rem" w="1rem" /> by AderciJr
        </Text>
      </Flex>
    </Flex>
  )
}
