import { Flex, Text, Image, scaleFadeConfig, Box } from '@chakra-ui/react'

type ProductCardProps = {
  src: string
  description: string
  discount: number
  price: number
  brand: string
}

export default function HomeProductCard({
  src,
  description,
  discount,
  price,
  brand
}: ProductCardProps) {
  return (
    <Flex
      cursor="pointer"
      direction="column"
      w="285px"
      h="400px"
      _hover={{
        boxShadow: '10px 0px 40px #bbb'
      }}
      mb="50px"
    >
      <Flex h="76%" overflow="hidden">
        <Image
          src={src}
          w="300px"
          _hover={{
            transform: 'scale(1.07)'
          }}
          transition="all 0.7s"
        />
      </Flex>
      <Flex
        px="0.2rem"
        py="0.4rem"
        h="24%"
        bg="white"
        direction="column"
        justify="space-between"
      >
        <Text fontSize="0.8rem">{brand}</Text>
        <Text fontWeight={500} fontSize="0.85rem">
          {description}
        </Text>

        {discount == 0 && (
          <Flex>
            <Text fontWeight={700}>£ {price}</Text>
          </Flex>
        )}
        {discount > 0 && (
          <Flex gap={3}>
            <Text fontWeight={700} color="cyan.700">
              £ {(price - (price * discount) / 100).toFixed(2)}
            </Text>
            <Flex fontWeight={400} fontSize="0.8rem" gap={1}>
              <Text>RRP </Text>
              <Text textDecoration="line-through"> £ {price}</Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
