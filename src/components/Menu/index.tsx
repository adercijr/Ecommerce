import { Flex } from '@chakra-ui/react'

import Data from './Items.json'
import MenuItems from './MenuItems'

export default function Menu() {
  return (
    <Flex width="100vw" height="50px" justify="center">
      <Flex
        height="50px"
        w="100%"
        maxW="1680px"
        position="relative"
        justify="center"
      >
        {Data.map((nav) => {
          return <MenuItems nav={nav} />
        })}
      </Flex>
    </Flex>
  )
}
