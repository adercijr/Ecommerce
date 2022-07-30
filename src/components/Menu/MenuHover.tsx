import { Grid, GridItem, Button, Box, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'

type dataProps = {
  data:
    | {
        id: number
        name: string
        category?: undefined
        genders?: undefined
      }
    | {
        id: number
        name: string
        category: (
          | {
              name: string
              subCategories: {
                img: string
              }[]
            }
          | {
              name: string
              subCategories: {
                name: string
              }[]
            }
        )[]
      }
  hide: boolean
}

export default function MenuHover({ data, hide }: dataProps) {
  return (
    <Flex
      position="fixed"
      top="126px"
      left="0px"
      w="100vw"
      bg="white"
      justify="center"
      zIndex={200}
      display={hide ? 'none' : ''}
      boxShadow="2xl"
    >
      {data.category && (
        <Grid
          px={8}
          py={8}
          templateColumns="repeat(5, 1fr)"
          gap={10}
          maxW="1280px"
          margin="auto"
          bg="white"
        >
          {data.category.map((item) => (
            <GridItem
              key={item.name}
              colSpan={item.name === 'Featured Brands' ? 3 : 1}
            >
              <Box
                px={2}
                as={Button}
                width="100%"
                textAlign="left"
                mb={2}
                variant="link"
                justifyContent="flex-start"
                fontSize="0.85rem"
              >
                <Text fontWeight="bold" textTransform="uppercase" color="black">
                  {item.name}
                </Text>
              </Box>

              {item.name &&
                item.subCategories.map((sub) => (
                  <Box
                    key={sub.name}
                    px={2}
                    as={Button}
                    variant="link"
                    width={sub.img ? '' : '100%'}
                    textAlign="left"
                    justifyContent="flex-start"
                    color="black"
                    fontSize="0.8rem"
                  >
                    <Text fontWeight={500}>{sub.name}</Text>
                    {sub.img && (
                      <Flex mx={9} my={4}>
                        <Image
                          src={`/${sub.img}`}
                          width="100px"
                          height="100px"
                        />
                      </Flex>
                    )}
                  </Box>
                ))}
            </GridItem>
          ))}
        </Grid>
      )}

      {data.genders && (
        <Flex px={8} py={8} maxW="1280px" margin="auto">
          {data.genders.map((item) => (
            <Flex
              w="30rem"
              h="18rem"
              mx="6px"
              direction="column"
              cursor="pointer"
            >
              <Flex
                h="90%"
                w="100%"
                position="relative"
                filter="grayscale(40%)"
                _hover={{
                  filter: 'grayscale(0%)'
                }}
                transition="all 0.7s"
              >
                <Image layout="fill" src={`/${item.img}`} />
              </Flex>
              <Text
                mt={1}
                textTransform="capitalize"
                fontSize="0.8rem"
                fontWeight={600}
              >
                {item.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}

      {data.name == 'sale' && <Flex bg="red.500" h="400px" w="100%"></Flex>}
    </Flex>
  )
}
