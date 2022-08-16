import { Flex, Text } from '@chakra-ui/react'

export default function MessageBanner() {
  return (
    <Flex
      w="100%"
      h="50px"
      bg="cyan.800"
      position="relative"
      justify="center"
      align="center"
      gap={2}
    >
      <Text color="white" fontSize="0.9rem">
        Free returns - Free shipping over £ 50
      </Text>
      <Text color="white" as="ins" cursor="pointer" fontSize="0.9rem">
        Details
      </Text>
    </Flex>
  )
}
