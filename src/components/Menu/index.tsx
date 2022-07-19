import { Flex } from '@chakra-ui/react'

import Data from './Items.json'
import MenuItems from './MenuItems'

export default function Menu({ hide }) {
  return (
    <Flex
      width="100%"
      height="50px"
      justify="center"
      mt="5rem"
      bg="white"
      position="fixed"
      zIndex={201}
      display={hide ? '' : 'none'}
    >
      <Flex
        w="100%"
        maxW="1680px"
        position="relative"
        justify="center"
        m="auto"
      >
        {Data.map((items) => {
          return <MenuItems data={items} />
        })}
      </Flex>
    </Flex>
  )
}
