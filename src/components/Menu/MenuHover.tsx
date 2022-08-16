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
}

export default function MenuHover({ data }: dataProps) {
  return (
    <Flex
      position="fixed"
      top="67px"
      left="0px"
      w="100vw"
      justify="center"
      zIndex={200}
      boxShadow="2xl"
      bg="white"
    >
      {data.category && (
        <Grid
          px={8}
          py="3.5rem"
          templateColumns="repeat(5, 1fr)"
          gap={10}
          maxW="1680px"
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
        <Flex py={8} maxW="1680px" w="100%" justify="center" gap={4}>
          {data.genders.map((item) => (
            <Flex
              w="31%"
              h={{ sm: '15rem', md: '20rem', lg: '17rem', xl: '25rem' }}
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
