import {
  Grid,
  GridItem,
  Button,
  Box,
  Text,
  Image,
  Flex
} from '@chakra-ui/react'

export default function MenuHover({ data }) {
  return (
    <Flex
      position="absolute"
      top="50px"
      left="0px"
      w="100%"
      maxW="1680px"
      bg="white"
      justify="center"
    >
      <Grid
        px={8}
        py={8}
        templateColumns="repeat(5, 1fr)"
        gap={10}
        maxW="1280px"
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
            >
              <Text fontWeight="bold" textTransform="uppercase" color="black">
                {item.name}
              </Text>
            </Box>

            {item.subCategories.map((sub) => (
              <Box
                px={2}
                as={Button}
                variant="link"
                width={sub.img ? '' : '100%'}
                textAlign="left"
                justifyContent="flex-start"
                color="black"
              >
                <Text fontWeight={500}>{sub.name}</Text>
                {sub.img && <Image src={sub.img} w="100px" my={5} mx={9} />}
              </Box>
            ))}
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}
